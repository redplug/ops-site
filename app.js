const policies = [
  { key: "policy-helpdesk", icon: "life-buoy", title: "IT 통합 지원", desc: "문의 유형을 고르고 요청서를 정리하는 정책 허브입니다." },
  { key: "policy-google-drive", icon: "folder-lock", title: "구글 드라이브 생성/권한", desc: "공유 드라이브 생성과 권한 변경 요청 기준을 안내합니다." },
  { key: "policy-software", icon: "palette", title: "소프트웨어 라이선스", desc: "상용 소프트웨어 신청, 갱신, 회수 흐름을 정리합니다." },
  { key: "policy-notion", icon: "notebook-tabs", title: "Notion 신규 공간", desc: "워크스페이스와 팀스페이스 생성 요청을 표준화합니다." },
  { key: "policy-erp", icon: "settings", title: "ERP 계정 생성/권한", desc: "계정 생성, 부서 이동, 승인권자 변경을 추적합니다." },
  { key: "policy-common-mail", icon: "mail", title: "그룹메일 생성/관리", desc: "그룹메일 생성과 멤버 변경 요청 초안을 만듭니다." },
  { key: "policy-equipment", icon: "mouse-pointer-2", title: "IT 장비 대여", desc: "대여 가능 장비와 반납 체크리스트를 제공합니다." },
  { key: "policy-resignation", icon: "log-out", title: "자산 반납", desc: "퇴사와 휴직 시 장비, 계정, 권한 회수를 점검합니다." },
  { key: "policy-loss-damage", icon: "hammer", title: "자산 손망실", desc: "파손, 분실, 도난 보고와 후속 처리 기준을 안내합니다." },
  { key: "policy-device-lifecycle", icon: "laptop", title: "장비 초기화/교체", desc: "초기화, 재배정, 교체 요청의 운영 절차를 정리합니다." },
  { key: "policy-ssl-vpn", icon: "globe-2", title: "해외 SSL VPN 신청", desc: "해외 출장자 VPN 신청과 보안 안내를 제공합니다." },
];

const officialTools = [
  { key: "policy", cat: "IT Policy & Guide", name: "Policy Navigator", desc: "사내 IT 표준 정책 가이드와 요청서 생성 흐름입니다.", status: "Official", icon: "shield-check" },
  { key: "signature", cat: "Email Branding", name: "Signature Creator", desc: "공식 이메일 서명 생성과 적용 가이드를 제공합니다.", status: "Official", icon: "pen-tool" },
  { key: "directory", cat: "System Index", name: "System Directory", desc: "Okta, ERP, Groupware 등 주요 시스템 접속 정보를 안내합니다.", status: "Official", icon: "library" },
  { key: "meeting", cat: "Facility Mgmt", name: "Meeting Room", desc: "회의실 예약 현황 확인과 간편 예약 지원 도구입니다.", status: "Official", icon: "calendar" },
  { key: "cable", cat: "Network Mgmt", name: "Cable Seat Locator", desc: "선번호, 자리, 네트워크 장비 정보를 연결해 검색합니다.", status: "Official", icon: "scan-search" },
  { key: "onboarding", cat: "New Employee", name: "IT Onboarding Guide", desc: "신규 입사자 IT 환경 셋업 체크리스트입니다.", status: "Official", icon: "user-plus" },
];

const labTools = [
  { key: "netcheck", cat: "Network", name: "Net Check", desc: "로컬 네트워크 체크 결과를 읽기 좋게 정리합니다.", status: "Labs", icon: "wifi" },
  { key: "imagestudio", cat: "Media", name: "Image Studio", desc: "이미지 리사이즈와 포맷 변환 도구 자리입니다.", status: "Labs", icon: "image-plus" },
  { key: "pdf", cat: "Document", name: "Secure PDF", desc: "PDF 보호, 병합, 분리 기능을 붙일 수 있는 슬롯입니다.", status: "Labs", icon: "file-lock-2" },
  { key: "diff", cat: "Developer", name: "Diff Expert", desc: "텍스트 차이 비교와 변경 요약을 위한 도구입니다.", status: "Labs", icon: "git-compare" },
  { key: "rename", cat: "Files", name: "File Renamer", desc: "파일명 일괄 변경 규칙을 테스트하는 도구입니다.", status: "Labs", icon: "files" },
  { key: "textcleaner", cat: "Text Utility", name: "Text Cleaner", desc: "공백, 줄바꿈, 특수문자를 정리하는 실제 구현 도구입니다.", status: "Ready", icon: "sparkles" },
  { key: "todo", cat: "Personal Ops", name: "Todo List", desc: "작업 목록과 체크리스트를 관리하는 도구입니다.", status: "Labs", icon: "list-checks" },
  { key: "work", cat: "Time & Holiday", name: "Work Manager", desc: "근무일, 휴일, 연차 시뮬레이션을 위한 슬롯입니다.", status: "Labs", icon: "calendar-range" },
  { key: "tax", cat: "Finance", name: "Year-end Tax", desc: "연말정산 계산과 시나리오 비교 도구 자리입니다.", status: "Labs", icon: "coins" },
  { key: "lunch", cat: "Dining", name: "Lunch Guide", desc: "잠실 근처 점심 후보와 랜덤 추천을 연결할 수 있습니다.", status: "Labs", icon: "map-pin" },
];

const allTools = [...officialTools, ...labTools, ...policies.map((policy) => ({
  key: policy.key,
  cat: "Policy",
  name: policy.title,
  desc: policy.desc,
  status: "Guide",
  icon: policy.icon,
}))];

const content = document.querySelector("#content");
const viewTitle = document.querySelector("#viewTitle");
const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector("#mobileOverlay");

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeMobileSidebar() {
  sidebar.classList.remove("mobile-open");
  overlay.classList.remove("show");
}

function setActive(route) {
  document.querySelectorAll("[data-route], .subnav button").forEach((item) => {
    item.classList.toggle("active", item.dataset.route === route);
  });
}

function renderPolicyMenu() {
  const menu = document.querySelector("#policyMenu");
  menu.innerHTML = policies.map((policy) => `
    <button type="button" data-route="${policy.key}">
      ${icon(policy.icon)}<span>${policy.title}</span>
    </button>
  `).join("");
}

function card(tool) {
  return `
    <article class="tool-card">
      <div class="tool-card-top">
        <span class="tool-category">${tool.cat}</span>
        <span class="tool-status">${tool.status}</span>
      </div>
      <h4>${tool.name}</h4>
      <p>${tool.desc}</p>
      <button type="button" data-open="${tool.key}">실행하기</button>
    </article>
  `;
}

function renderHome() {
  viewTitle.textContent = "OPERATIONS OVERVIEW";
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <div class="view">
      <section class="hero-grid">
        <article class="hero-card primary">
          <div class="card-label">${icon("hash")} IT Comm.</div>
          <h3 class="hero-title">#ops-clone</h3>
          <p class="hero-copy">원본 포털의 정보 구조를 분석해 재구현한 포트폴리오 클론입니다.</p>
        </article>
        <article class="hero-card weather">
          <div class="card-label">${icon("cloud-sun")} Demo Status</div>
          <div class="weather-row">
            <span class="weather-icon">☀️</span>
            <div>
              <div class="weather-temp">24°</div>
              <p class="hero-copy">정적 데이터 기반 홈 위젯</p>
            </div>
          </div>
        </article>
        <article class="hero-card meal">
          <div class="card-label">${icon("utensils")} Today Menu</div>
          <div class="meal-grid">
            <div class="mini-box"><strong>한식</strong><span>제육 정식</span></div>
            <div class="mini-box"><strong>양식</strong><span>치킨 샐러드</span></div>
            <div class="mini-box"><strong>간편</strong><span>샌드위치</span></div>
          </div>
        </article>
        <article class="hero-card rooms">
          <div class="card-label">${icon("layout-grid")} Meeting Room Status</div>
          <div class="room-grid">
            <div class="mini-box"><strong>12</strong><span>Total</span></div>
            <div class="mini-box"><strong>7</strong><span>Free</span></div>
            <div class="mini-box"><strong>5</strong><span>Busy</span></div>
          </div>
        </article>
      </section>

      <div class="section-heading"><h3>Official Support System</h3><span>공식 운영</span></div>
      <section class="tool-grid">${officialTools.map(card).join("")}</section>

      <div class="section-heading"><h3>Unofficial Tools</h3><span>Labs</span></div>
      <section class="tool-grid">${labTools.map(card).join("")}</section>

      <section class="notice">
        <div class="notice-grid">
          <div><h4>01. Portfolio Scope</h4><p>첫 버전은 shell clone과 Text Cleaner 실제 구현으로 범위를 제한했습니다.</p></div>
          <div><h4>02. Extensible Tools</h4><p>각 메뉴는 같은 렌더링 함수로 연결되어 도구를 하나씩 교체할 수 있습니다.</p></div>
          <div><h4>03. Static First</h4><p>서버 없이 실행되는 구조라 GitHub Pages나 Netlify 배포가 쉽습니다.</p></div>
        </div>
      </section>
    </div>
  `;
  refreshIcons();
}

function renderPlaceholder(tool) {
  viewTitle.textContent = tool.name.toUpperCase();
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>${tool.name}</h3>
          <p>${tool.desc}</p>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <div class="placeholder-box">
          <div>
            ${icon(tool.icon)}
            <h4>${tool.name} module slot</h4>
            <p>이 화면은 포트폴리오 클론의 확장 지점입니다. 다음 단계에서 원본 기능을 분석해 실제 폼, 계산기, 파일 처리, API 연동으로 교체합니다.</p>
          </div>
        </div>
      </div>
    </section>
  `;
  refreshIcons();
}

function renderTextCleaner() {
  viewTitle.textContent = "TEXT CLEANER";
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>Text Cleaner</h3>
          <p>붙여넣은 텍스트의 공백, 줄바꿈, 탭, 중복 라인을 정리합니다. 첫 번째 실제 구현 도구입니다.</p>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <div class="cleaner-layout">
          <div class="text-area-card">
            <label for="cleanerInput">Input / Output</label>
            <textarea id="cleanerInput" spellcheck="false" placeholder="정리할 텍스트를 붙여넣으세요."></textarea>
          </div>
          <aside class="control-card">
            <h4>Cleanup Rules</h4>
            <div class="option-list">
              <label class="check-row"><input type="checkbox" id="trimLines" checked><span>각 줄 앞뒤 공백 제거</span></label>
              <label class="check-row"><input type="checkbox" id="collapseSpaces" checked><span>연속 공백을 한 칸으로 축소</span></label>
              <label class="check-row"><input type="checkbox" id="removeEmpty" checked><span>빈 줄 제거</span></label>
              <label class="check-row"><input type="checkbox" id="dedupeLines"><span>중복 라인 제거</span></label>
              <label class="check-row"><input type="checkbox" id="sortLines"><span>라인 정렬</span></label>
            </div>

            <div class="stats-grid">
              <div class="stat-box"><strong id="charCount">0</strong><span>Characters</span></div>
              <div class="stat-box"><strong id="lineCount">0</strong><span>Lines</span></div>
              <div class="stat-box"><strong id="wordCount">0</strong><span>Words</span></div>
              <div class="stat-box"><strong id="byteCount">0</strong><span>Bytes</span></div>
            </div>

            <div class="button-row">
              <button class="primary-button" type="button" id="cleanButton">정리하기</button>
              <button class="secondary-button" type="button" id="copyButton">복사</button>
              <button class="danger-button" type="button" id="clearButton">비우기</button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
  bindTextCleaner();
  refreshIcons();
}

function cleanText(value) {
  const trimLines = document.querySelector("#trimLines").checked;
  const collapseSpaces = document.querySelector("#collapseSpaces").checked;
  const removeEmpty = document.querySelector("#removeEmpty").checked;
  const dedupeLines = document.querySelector("#dedupeLines").checked;
  const sortLines = document.querySelector("#sortLines").checked;

  let lines = value.replace(/\r\n?/g, "\n").split("\n");
  if (trimLines) lines = lines.map((line) => line.trim());
  if (collapseSpaces) lines = lines.map((line) => line.replace(/[ \t]+/g, " "));
  if (removeEmpty) lines = lines.filter((line) => line.length > 0);
  if (dedupeLines) lines = [...new Set(lines)];
  if (sortLines) lines = [...lines].sort((a, b) => a.localeCompare(b, "ko"));
  return lines.join("\n");
}

function updateStats() {
  const input = document.querySelector("#cleanerInput");
  if (!input) return;

  const text = input.value;
  const lines = text.length ? text.split(/\r\n|\r|\n/).length : 0;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const bytes = new TextEncoder().encode(text).length;

  document.querySelector("#charCount").textContent = String(text.length);
  document.querySelector("#lineCount").textContent = String(lines);
  document.querySelector("#wordCount").textContent = String(words);
  document.querySelector("#byteCount").textContent = String(bytes);
}

function bindTextCleaner() {
  const input = document.querySelector("#cleanerInput");
  const cleanButton = document.querySelector("#cleanButton");
  const copyButton = document.querySelector("#copyButton");
  const clearButton = document.querySelector("#clearButton");

  input.value = "  신청자: 홍길동  \n\n부서:  인프라팀\t\t\n요청:   그룹메일 생성\n요청:   그룹메일 생성\n권한: 관리자  ";
  updateStats();

  input.addEventListener("input", updateStats);
  document.querySelectorAll(".option-list input").forEach((checkbox) => {
    checkbox.addEventListener("change", updateStats);
  });

  cleanButton.addEventListener("click", () => {
    input.value = cleanText(input.value);
    updateStats();
  });

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(input.value);
      copyButton.textContent = "복사됨";
      setTimeout(() => { copyButton.textContent = "복사"; }, 1100);
    } catch {
      input.select();
      document.execCommand("copy");
    }
  });

  clearButton.addEventListener("click", () => {
    input.value = "";
    updateStats();
    input.focus();
  });
}

function openRoute(route) {
  closeMobileSidebar();
  setActive(route);

  if (route === "home") {
    renderHome();
    return;
  }

  if (route === "policy") {
    const tool = officialTools.find((item) => item.key === "policy");
    renderPlaceholder(tool);
    return;
  }

  if (route === "textcleaner") {
    renderTextCleaner();
    return;
  }

  const tool = allTools.find((item) => item.key === route);
  renderPlaceholder(tool || { key: route, cat: "Tool", name: route, desc: "준비 중인 도구입니다.", status: "Draft", icon: "wrench" });
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  const openButton = event.target.closest("[data-open]");

  if (routeButton) openRoute(routeButton.dataset.route);
  if (openButton) openRoute(openButton.dataset.open);
});

document.querySelector("#policyToggle").addEventListener("click", () => {
  const menu = document.querySelector("#policyMenu");
  const button = document.querySelector("#policyToggle");
  menu.classList.toggle("open");
  button.classList.toggle("closed", !menu.classList.contains("open"));
});

document.querySelector("#sidebarButton").addEventListener("click", () => {
  sidebar.classList.toggle("mobile-open");
  overlay.classList.toggle("show", sidebar.classList.contains("mobile-open"));
});

overlay.addEventListener("click", closeMobileSidebar);
document.querySelector("#refreshButton").addEventListener("click", () => openRoute(document.querySelector("[data-route].active")?.dataset.route || "home"));
document.querySelector("#versionButton").addEventListener("click", () => openRoute("textcleaner"));

renderPolicyMenu();
renderHome();
refreshIcons();
