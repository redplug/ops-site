const { describe, test, before, after } = require("node:test");
const assert = require("node:assert").strict;
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const serverPath = path.join(__dirname, "..", "server.js");
const indexHtml = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");

// 임의 포트로 서버를 띄우고, 포트 충돌로 종료되면 다른 포트로 재시도
function startServer(env = {}) {
  const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "ops-site-test-"));
  const attempt = (tries) => new Promise((resolve, reject) => {
    const port = 20000 + Math.floor(Math.random() * 30000);
    const child = spawn(process.execPath, [serverPath], {
      env: { ...process.env, PORT: String(port), DATA_DIR: dataDir, ...env },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let output = "";
    const onData = (chunk) => {
      output += chunk;
      if (output.includes("listening")) {
        child.stdout.off("data", onData);
        resolve({ child, base: `http://127.0.0.1:${port}` });
      }
    };
    child.stdout.on("data", onData);
    child.stderr.on("data", (chunk) => { output += chunk; });
    child.on("exit", () => {
      if (output.includes("listening")) return;
      if (tries > 0) resolve(attempt(tries - 1));
      else reject(new Error(`server failed to start: ${output}`));
    });
  });
  return attempt(5).then((server) => ({ ...server, dataDir }));
}

function stopServer(server) {
  if (server?.child && server.child.exitCode === null) server.child.kill();
  if (server?.dataDir) fs.rmSync(server.dataDir, { recursive: true, force: true });
}

function postJson(base, route, body, headers = {}) {
  return fetch(`${base}${route}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}

describe("server basics", () => {
  let server;
  before(async () => { server = await startServer(); });
  after(() => stopServer(server));

  test("source and data files are not exposed (fallback to index.html)", async () => {
    for (const route of ["/server.js", "/data/settings.json"]) {
      const res = await fetch(`${server.base}${route}`);
      assert.equal(res.status, 200);
      assert.equal(await res.text(), indexHtml, route);
    }
  });

  test("bootstrap reports no password before setup", async () => {
    const res = await fetch(`${server.base}/api/settings/bootstrap`);
    const body = await res.json();
    assert.equal(body.hasPassword, false);
  });

  test("init rejects passwords shorter than 8 characters", async () => {
    const res = await postJson(server.base, "/api/settings/password/init", { password: "1234567" });
    assert.equal(res.status, 400);
    assert.ok((await res.json()).error);
  });

  test("init with 8 characters sets cookie without Secure over plain http", async () => {
    const res = await postJson(server.base, "/api/settings/password/init", { password: "12345678" });
    assert.equal(res.status, 200);
    const cookie = res.headers.get("set-cookie");
    assert.match(cookie, /ops_session=/);
    assert.doesNotMatch(cookie, /Secure/);
  });

  test("verify over x-forwarded-proto https sets Secure cookie", async () => {
    const res = await postJson(server.base, "/api/settings/password/verify", { password: "12345678" }, { "X-Forwarded-Proto": "https" });
    assert.equal(res.status, 200);
    assert.match(res.headers.get("set-cookie"), /Secure/);
  });

  test("settings value write without auth is rejected", async () => {
    const res = await fetch(`${server.base}/api/settings/value`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "opsHubSidebarCollapsed", value: true }),
    });
    assert.equal(res.status, 401);
  });
});

describe("ADMIN_PASSWORD bootstrap", () => {
  let server;
  before(async () => {
    server = await startServer({ ADMIN_PASSWORD: "admin-secret", COOKIE_SECURE: "true" });
  });
  after(() => stopServer(server));

  test("password is preset at startup, so init is refused", async () => {
    const bootstrap = await (await fetch(`${server.base}/api/settings/bootstrap`)).json();
    assert.equal(bootstrap.hasPassword, true);
    const res = await postJson(server.base, "/api/settings/password/init", { password: "attacker-pw" });
    assert.equal(res.status, 409);
  });

  test("preset password works for verify and sets Secure when COOKIE_SECURE=true", async () => {
    const res = await postJson(server.base, "/api/settings/password/verify", { password: "admin-secret" });
    assert.equal(res.status, 200);
    assert.match(res.headers.get("set-cookie"), /Secure/);
  });
});

describe("login attempt limiting", () => {
  let server;
  before(async () => {
    server = await startServer();
    await postJson(server.base, "/api/settings/password/init", { password: "12345678" });
  });
  after(() => stopServer(server));

  test("failures are counted and a success resets the count", async () => {
    for (let i = 0; i < 4; i += 1) {
      const res = await postJson(server.base, "/api/settings/password/verify", { password: "wrong-pw" });
      assert.equal(res.status, 401);
    }
    const ok = await postJson(server.base, "/api/settings/password/verify", { password: "12345678" });
    assert.equal(ok.status, 200);
  });

  test("5 consecutive failures lock the IP with 429 and a JSON error", async () => {
    for (let i = 0; i < 5; i += 1) {
      const res = await postJson(server.base, "/api/settings/password/verify", { password: "wrong-pw" });
      assert.equal(res.status, 401);
    }
    const locked = await postJson(server.base, "/api/settings/password/verify", { password: "12345678" });
    assert.equal(locked.status, 429);
    assert.ok((await locked.json()).error);
  });

  test("change endpoint is locked by the same counter", async () => {
    const res = await postJson(server.base, "/api/settings/password/change", { currentPassword: "12345678", newPassword: "new-password-1" });
    assert.equal(res.status, 429);
  });
});

describe("static file allowlist", () => {
  let server;
  before(async () => { server = await startServer(); });
  after(() => stopServer(server));

  test("/config and /vendor js files are served; /config is not cached", async () => {
    // 임시 probe 파일로 vendor 서빙을 검증하고, 테스트가 만든 디렉터리는 정리
    const vendorDir = path.join(__dirname, "..", "vendor");
    const vendorExisted = fs.existsSync(vendorDir);
    fs.mkdirSync(vendorDir, { recursive: true });
    const vendorPath = path.join(vendorDir, "__test_probe.js");
    fs.writeFileSync(vendorPath, "window.__probe = 1;");
    try {
      const vendor = await fetch(`${server.base}/vendor/__test_probe.js`);
      assert.match(vendor.headers.get("content-type"), /javascript/);
      assert.equal(await vendor.text(), "window.__probe = 1;");
    } finally {
      fs.rmSync(vendorPath, { force: true });
      if (!vendorExisted) fs.rmSync(vendorDir, { recursive: true, force: true });
    }
    const config = await fetch(`${server.base}/config/site.config.js`);
    assert.equal(config.headers.get("cache-control"), "no-cache");
  });

  test("path traversal and non-allowlisted paths fall back to index.html", async () => {
    for (const route of ["/vendor/../server.js", "/vendor/%2e%2e/server.js", "/vendor/a/b.js", "/vendor/x.css"]) {
      const res = await fetch(`${server.base}${route}`);
      assert.equal(await res.text(), indexHtml, route);
    }
  });
});
