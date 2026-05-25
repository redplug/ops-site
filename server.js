const crypto = require("node:crypto");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const port = Number.parseInt(process.env.PORT || "8080", 10);
const publicDir = __dirname;
const dataDir = process.env.DATA_DIR || path.join(__dirname, "data");
const statePath = path.join(dataDir, "settings.json");
const sessionTtlMs = 12 * 60 * 60 * 1000;
const sessions = new Map();

const settingKeys = new Set([
  "opsHubMenuVisibility",
  "opsHubDashboardConfig",
  "opsHubSystemDirectoryConfig",
  "opsHubSystemDirectoryRuntime",
  "opsHubSidebarCollapsed",
]);
const publicSettingKeys = new Set([
  "opsHubMenuVisibility",
  "opsHubDashboardConfig",
  "opsHubSidebarCollapsed",
]);

function defaultState() {
  return {
    password: null,
    passwordHistory: [],
    settings: {},
  };
}

function readState() {
  try {
    const parsed = JSON.parse(fs.readFileSync(statePath, "utf8"));
    return {
      ...defaultState(),
      ...parsed,
      settings: parsed.settings || {},
      passwordHistory: Array.isArray(parsed.passwordHistory) ? parsed.passwordHistory : [],
    };
  } catch {
    return defaultState();
  }
}

function writeState(state) {
  fs.mkdirSync(dataDir, { recursive: true });
  const tmpPath = `${statePath}.${process.pid}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(state, null, 2), { mode: 0o600 });
  fs.renameSync(tmpPath, statePath);
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex"), iterations = 210000) {
  return {
    version: 2,
    algorithm: "PBKDF2-SHA-256",
    iterations,
    salt,
    hash: crypto.pbkdf2Sync(password, salt, iterations, 32, "sha256").toString("hex"),
  };
}

function verifyPassword(password, record) {
  if (!record?.salt || !record?.hash) return false;
  const iterations = Number.parseInt(record.iterations, 10) || 210000;
  const next = hashPassword(password, record.salt, iterations);
  const expected = Buffer.from(record.hash, "hex");
  const actual = Buffer.from(next.hash, "hex");
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}

function parseCookies(header = "") {
  return Object.fromEntries(header.split(";").map((pair) => {
    const index = pair.indexOf("=");
    if (index === -1) return null;
    return [pair.slice(0, index).trim(), decodeURIComponent(pair.slice(index + 1).trim())];
  }).filter(Boolean));
}

function createSession() {
  const token = crypto.randomBytes(32).toString("base64url");
  sessions.set(token, Date.now() + sessionTtlMs);
  return token;
}

function isAuthenticated(req) {
  const token = parseCookies(req.headers.cookie).ops_session;
  const expiresAt = token ? sessions.get(token) : null;
  if (!expiresAt || expiresAt < Date.now()) {
    if (token) sessions.delete(token);
    return false;
  }
  sessions.set(token, Date.now() + sessionTtlMs);
  return true;
}

function passwordMeta(password) {
  if (!password) return null;
  return {
    createdAt: password.createdAt || "",
    updatedAt: password.updatedAt || "",
    algorithm: password.algorithm || "",
  };
}

function json(res, status, payload, headers = {}) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    ...headers,
  });
  res.end(JSON.stringify(payload));
}

function setSessionCookie(token) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `ops_session=${encodeURIComponent(token)}; HttpOnly; Path=/; Max-Age=${Math.floor(sessionTtlMs / 1000)}; SameSite=Lax${secure}`;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        req.destroy();
        reject(new Error("요청 본문이 너무 큽니다."));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("JSON 요청만 지원합니다."));
      }
    });
    req.on("error", reject);
  });
}

function settingsPayload(state, authenticated) {
  const settings = {};
  Object.entries(state.settings || {}).forEach(([key, value]) => {
    if (authenticated || publicSettingKeys.has(key)) {
      settings[key] = value;
    }
  });
  return {
    hasPassword: Boolean(state.password),
    authenticated,
    settings,
    passwordMeta: authenticated ? passwordMeta(state.password) : null,
    passwordHistory: authenticated ? state.passwordHistory.slice(0, 20) : [],
  };
}

async function handleApi(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const state = readState();
  const authenticated = isAuthenticated(req);

  try {
    if (req.method === "GET" && url.pathname === "/api/settings/bootstrap") {
      json(res, 200, settingsPayload(state, authenticated));
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/settings/password/init") {
      if (state.password) {
        json(res, 409, { error: "Settings 비밀번호가 이미 설정되어 있습니다." });
        return;
      }
      const { password } = await readBody(req);
      if (String(password || "").length < 4) {
        json(res, 400, { error: "비밀번호는 4자 이상이어야 합니다." });
        return;
      }
      const now = new Date().toISOString();
      state.password = { ...hashPassword(String(password)), createdAt: now, updatedAt: now };
      state.passwordHistory = [{ type: "created", at: now }, ...state.passwordHistory].slice(0, 20);
      writeState(state);
      const token = createSession();
      json(res, 200, settingsPayload(state, true), { "Set-Cookie": setSessionCookie(token) });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/settings/password/verify") {
      const { password } = await readBody(req);
      if (!verifyPassword(String(password || ""), state.password)) {
        json(res, 401, { error: "비밀번호가 일치하지 않습니다." });
        return;
      }
      const token = createSession();
      json(res, 200, settingsPayload(state, true), { "Set-Cookie": setSessionCookie(token) });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/settings/password/change") {
      const { currentPassword, newPassword } = await readBody(req);
      if (!authenticated || !verifyPassword(String(currentPassword || ""), state.password)) {
        json(res, 401, { error: "현재 비밀번호가 일치하지 않습니다." });
        return;
      }
      if (String(newPassword || "").length < 4) {
        json(res, 400, { error: "새 비밀번호는 4자 이상이어야 합니다." });
        return;
      }
      const now = new Date().toISOString();
      state.password = {
        ...hashPassword(String(newPassword)),
        createdAt: state.password?.createdAt || now,
        updatedAt: now,
      };
      state.passwordHistory = [{ type: "changed", at: now }, ...state.passwordHistory].slice(0, 20);
      writeState(state);
      json(res, 200, settingsPayload(state, true));
      return;
    }

    if (req.method === "PUT" && url.pathname === "/api/settings/value") {
      if (!authenticated) {
        json(res, 401, { error: "Settings 인증이 필요합니다." });
        return;
      }
      const { key, value } = await readBody(req);
      if (!settingKeys.has(String(key))) {
        json(res, 400, { error: "지원하지 않는 설정 키입니다." });
        return;
      }
      state.settings[String(key)] = value;
      writeState(state);
      json(res, 200, { ok: true });
      return;
    }

    if (req.method === "DELETE" && url.pathname === "/api/settings/value") {
      if (!authenticated) {
        json(res, 401, { error: "Settings 인증이 필요합니다." });
        return;
      }
      const key = url.searchParams.get("key");
      if (!settingKeys.has(String(key))) {
        json(res, 400, { error: "지원하지 않는 설정 키입니다." });
        return;
      }
      delete state.settings[String(key)];
      writeState(state);
      json(res, 200, { ok: true });
      return;
    }

    json(res, 404, { error: "API를 찾을 수 없습니다." });
  } catch (error) {
    json(res, 500, { error: error.message || "서버 오류가 발생했습니다." });
  }
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = decodeURIComponent(url.pathname);
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const allowedFiles = new Set(["/index.html", "/styles.css", "/app.js"]);
  if (!allowedFiles.has(requestedPath)) {
    req.url = "/index.html";
    serveStatic(req, res);
    return;
  }
  const resolvedPath = path.resolve(publicDir, `.${requestedPath}`);
  const safeRoot = `${path.resolve(publicDir)}${path.sep}`;
  const filePath = resolvedPath.startsWith(safeRoot) ? resolvedPath : path.join(publicDir, "index.html");
  const finalPath = fs.existsSync(filePath) && fs.statSync(filePath).isFile()
    ? filePath
    : path.join(publicDir, "index.html");
  const ext = path.extname(finalPath);
  const type = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
  }[ext] || "application/octet-stream";

  res.writeHead(200, {
    "Content-Type": type,
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Cache-Control": ext === ".js" || ext === ".css" ? "public, max-age=3600" : "no-cache",
  });
  fs.createReadStream(finalPath).pipe(res);
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/")) {
    void handleApi(req, res);
    return;
  }
  serveStatic(req, res);
});

server.listen(port, () => {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log(`ops-site listening on ${port}`);
});
