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
  { key: "assets", cat: "Asset Ops", name: "IT Asset Management", desc: "장비 지급, 회수, 재고 상태를 관리하는 도구입니다.", status: "Official", icon: "package" },
  { key: "signature", cat: "Email Branding", name: "Signature Creator", desc: "공식 이메일 서명 생성과 적용 가이드를 제공합니다.", status: "Official", icon: "pen-tool" },
  { key: "directory", cat: "System Index", name: "System Directory", desc: "Okta, ERP, Groupware 등 주요 시스템 접속 정보를 안내합니다.", status: "Official", icon: "library" },
  { key: "meeting", cat: "Facility Mgmt", name: "Meeting Room", desc: "회의실 예약 현황 확인과 간편 예약 지원 도구입니다.", status: "Official", icon: "calendar" },
  { key: "cable", cat: "Network Mgmt", name: "Cable Seat Locator", desc: "선번호, 자리, 네트워크 장비 정보를 연결해 검색합니다.", status: "Official", icon: "scan-search" },
  { key: "onboarding", cat: "New Employee", name: "IT Onboarding Guide", desc: "신규 입사자 IT 환경 셋업 체크리스트입니다.", status: "Official", icon: "user-plus" },
];

const labTools = [
  { key: "netcheck", cat: "Network", name: "Net Check", desc: "다운로드, 업로드, 레이턴시, 테스트 서버 정보를 측정합니다.", status: "Ready", icon: "wifi" },
  { key: "imagestudio", cat: "Media", name: "Image Studio", desc: "이미지 리사이즈와 포맷 변환 도구 자리입니다.", status: "Labs", icon: "image-plus" },
  { key: "pdf", cat: "Document", name: "Secure PDF", desc: "PDF 암호화 보관, 복호화, 병합, 페이지 추출을 로컬에서 처리합니다.", status: "Ready", icon: "file-lock-2" },
  { key: "diff", cat: "Developer", name: "Diff Expert", desc: "텍스트 차이 비교와 변경 요약을 위한 도구입니다.", status: "Labs", icon: "git-compare" },
  { key: "rename", cat: "Files", name: "File Renamer", desc: "파일명 일괄 변경 규칙을 테스트하는 도구입니다.", status: "Labs", icon: "files" },
  { key: "textcleaner", cat: "Text Utility", name: "Text Cleaner", desc: "공백, 줄바꿈, 특수문자를 정리하는 실제 구현 도구입니다.", status: "Ready", icon: "sparkles" },
  { key: "todo", cat: "Personal Ops", name: "Todo List", desc: "작업 목록과 체크리스트를 관리하는 도구입니다.", status: "Labs", icon: "list-checks" },
  { key: "work", cat: "Time & Holiday", name: "Work Manager", desc: "근무일, 휴일, 연차 시뮬레이션을 위한 슬롯입니다.", status: "Labs", icon: "calendar-range" },
  { key: "tax", cat: "Finance", name: "Year-end Tax", desc: "연말정산 계산과 시나리오 비교 도구 자리입니다.", status: "Labs", icon: "coins" },
  { key: "lunch", cat: "Dining", name: "Lunch Guide", desc: "잠실 근처 점심 후보와 랜덤 추천을 연결할 수 있습니다.", status: "Labs", icon: "map-pin" },
];

const readyToolKeys = new Set(["netcheck", "pdf", "textcleaner"]);
const visibleTools = labTools.filter((tool) => readyToolKeys.has(tool.key));

const policyTools = policies.map((policy) => ({
  key: policy.key,
  cat: "Policy",
  name: policy.title,
  desc: policy.desc,
  status: "Planned",
  icon: policy.icon,
}));

const menuVisibilityKey = "opsHubMenuVisibility";
const dashboardConfigKey = "opsHubDashboardConfig";
const configurableMenuItems = [...officialTools, ...labTools, ...policyTools];
const settingsSections = [
  { key: "settings-menu", name: "Show Menu", desc: "사이드바 메뉴 표시 여부를 관리합니다.", icon: "list-filter" },
];

const defaultDashboardConfig = {
  channelLabel: "IT Comm.",
  channelName: "#ops-clone",
  channelCopy: "원본 포털의 정보 구조를 분석해 재구현한 포트폴리오 클론입니다.",
  statusLabel: "Demo Status",
  statusIcon: "☀️",
  statusValue: "24°",
  statusCopy: "정적 데이터 기반 홈 위젯",
  menuTitle: "Today Menu",
  menuItems: [
    { label: "한식", value: "제육 정식" },
    { label: "양식", value: "치킨 샐러드" },
    { label: "간편", value: "샌드위치" },
  ],
  roomTitle: "Meeting Room Status",
  roomItems: [
    { label: "Total", value: "12" },
    { label: "Free", value: "7" },
    { label: "Busy", value: "5" },
  ],
};

const allTools = [...officialTools, ...labTools, ...policyTools];

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

function getMenuVisibility() {
  const defaults = Object.fromEntries(configurableMenuItems.map((item) => [item.key, readyToolKeys.has(item.key)]));
  try {
    return { ...defaults, ...JSON.parse(localStorage.getItem(menuVisibilityKey) || "{}") };
  } catch {
    return defaults;
  }
}

function saveMenuVisibility(visibility) {
  localStorage.setItem(menuVisibilityKey, JSON.stringify(visibility));
}

function normalizeDashboardItems(items, defaults) {
  return defaults.map((fallback, index) => ({
    label: String(items?.[index]?.label || fallback.label),
    value: String(items?.[index]?.value || fallback.value),
  }));
}

function getDashboardConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(dashboardConfigKey) || "{}");
    return {
      ...defaultDashboardConfig,
      ...saved,
      menuItems: normalizeDashboardItems(saved.menuItems, defaultDashboardConfig.menuItems),
      roomItems: normalizeDashboardItems(saved.roomItems, defaultDashboardConfig.roomItems),
    };
  } catch {
    return defaultDashboardConfig;
  }
}

function saveDashboardConfig(config) {
  localStorage.setItem(dashboardConfigKey, JSON.stringify(config));
}

function menuButton(item) {
  return `
    <button class="nav-item" type="button" data-route="${item.key}">
      ${icon(item.icon)}<span>${item.name}</span>
    </button>
  `;
}

function renderSidebarTools() {
  const menu = document.querySelector("#toolMenu");
  if (!menu) return;

  const visibility = getMenuVisibility();
  const officialVisible = officialTools.filter((item) => visibility[item.key]);
  const labVisible = labTools.filter((item) => visibility[item.key]);
  const policyVisible = policyTools.filter((item) => visibility[item.key]);
  const sections = [];

  if (officialVisible.length) {
    sections.push(`<p class="nav-section muted-section">Official Support</p>${officialVisible.map(menuButton).join("")}`);
  }
  if (labVisible.length) {
    sections.push(`<p class="nav-section muted-section">Tools</p>${labVisible.map(menuButton).join("")}`);
  }
  if (policyVisible.length) {
    sections.push(`<p class="nav-section muted-section">Policies</p>${policyVisible.map(menuButton).join("")}`);
  }

  menu.innerHTML = sections.join("");
  refreshIcons();
}

function renderSettingsMenu() {
  const menu = document.querySelector("#settingsMenu");
  if (!menu) return;

  menu.innerHTML = settingsSections.map((section) => `
    <button type="button" data-route="${section.key}">
      ${icon(section.icon)}<span>${section.name}</span>
    </button>
  `).join("");
  refreshIcons();
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
  if (!menu) return;
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
  const dashboard = getDashboardConfig();
  content.innerHTML = `
    <div class="view">
      <div class="section-heading dashboard-heading">
        <h3>Dashboard</h3>
        <button class="secondary-button compact-button" type="button" id="editDashboardButton">${icon("pencil")} 수정</button>
      </div>
      <section class="hero-grid">
        <article class="hero-card primary">
          <div class="card-label">${icon("hash")} ${escapeHtml(dashboard.channelLabel)}</div>
          <h3 class="hero-title">${escapeHtml(dashboard.channelName)}</h3>
          <p class="hero-copy">${escapeHtml(dashboard.channelCopy)}</p>
        </article>
        <article class="hero-card weather">
          <div class="card-label">${icon("cloud-sun")} ${escapeHtml(dashboard.statusLabel)}</div>
          <div class="weather-row">
            <span class="weather-icon">${escapeHtml(dashboard.statusIcon)}</span>
            <div>
              <div class="weather-temp">${escapeHtml(dashboard.statusValue)}</div>
              <p class="hero-copy">${escapeHtml(dashboard.statusCopy)}</p>
            </div>
          </div>
        </article>
        <article class="hero-card meal">
          <div class="card-label">${icon("utensils")} ${escapeHtml(dashboard.menuTitle)}</div>
          <div class="meal-grid">
            ${dashboard.menuItems.map((item) => `<div class="mini-box"><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.value)}</span></div>`).join("")}
          </div>
        </article>
        <article class="hero-card rooms">
          <div class="card-label">${icon("layout-grid")} ${escapeHtml(dashboard.roomTitle)}</div>
          <div class="room-grid">
            ${dashboard.roomItems.map((item) => `<div class="mini-box"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></div>`).join("")}
          </div>
        </article>
      </section>
      <section class="dashboard-editor" id="dashboardEditor" hidden>
        <form class="dashboard-form" id="dashboardForm">
          <div class="form-group wide">
            <label for="dashboardChannelLabel">Channel Label</label>
            <input id="dashboardChannelLabel" name="channelLabel" type="text" value="${escapeHtml(dashboard.channelLabel)}">
          </div>
          <div class="form-group">
            <label for="dashboardChannelName">Channel Name</label>
            <input id="dashboardChannelName" name="channelName" type="text" value="${escapeHtml(dashboard.channelName)}">
          </div>
          <div class="form-group wide">
            <label for="dashboardChannelCopy">Channel Copy</label>
            <input id="dashboardChannelCopy" name="channelCopy" type="text" value="${escapeHtml(dashboard.channelCopy)}">
          </div>
          <div class="form-group">
            <label for="dashboardStatusLabel">Status Label</label>
            <input id="dashboardStatusLabel" name="statusLabel" type="text" value="${escapeHtml(dashboard.statusLabel)}">
          </div>
          <div class="form-group">
            <label for="dashboardStatusIcon">Status Icon</label>
            <input id="dashboardStatusIcon" name="statusIcon" type="text" maxlength="4" value="${escapeHtml(dashboard.statusIcon)}">
          </div>
          <div class="form-group">
            <label for="dashboardStatusValue">Status Value</label>
            <input id="dashboardStatusValue" name="statusValue" type="text" value="${escapeHtml(dashboard.statusValue)}">
          </div>
          <div class="form-group wide">
            <label for="dashboardStatusCopy">Status Copy</label>
            <input id="dashboardStatusCopy" name="statusCopy" type="text" value="${escapeHtml(dashboard.statusCopy)}">
          </div>
          <div class="form-group">
            <label for="dashboardMenuTitle">Menu Title</label>
            <input id="dashboardMenuTitle" name="menuTitle" type="text" value="${escapeHtml(dashboard.menuTitle)}">
          </div>
          ${dashboard.menuItems.map((item, index) => `
            <div class="form-group">
              <label for="dashboardMenuLabel${index}">Menu ${index + 1} Label</label>
              <input id="dashboardMenuLabel${index}" name="menuLabel${index}" type="text" value="${escapeHtml(item.label)}">
            </div>
            <div class="form-group">
              <label for="dashboardMenuValue${index}">Menu ${index + 1} Value</label>
              <input id="dashboardMenuValue${index}" name="menuValue${index}" type="text" value="${escapeHtml(item.value)}">
            </div>
          `).join("")}
          <div class="form-group">
            <label for="dashboardRoomTitle">Room Title</label>
            <input id="dashboardRoomTitle" name="roomTitle" type="text" value="${escapeHtml(dashboard.roomTitle)}">
          </div>
          ${dashboard.roomItems.map((item, index) => `
            <div class="form-group">
              <label for="dashboardRoomValue${index}">Room ${index + 1} Value</label>
              <input id="dashboardRoomValue${index}" name="roomValue${index}" type="text" value="${escapeHtml(item.value)}">
            </div>
            <div class="form-group">
              <label for="dashboardRoomLabel${index}">Room ${index + 1} Label</label>
              <input id="dashboardRoomLabel${index}" name="roomLabel${index}" type="text" value="${escapeHtml(item.label)}">
            </div>
          `).join("")}
          <div class="button-row dashboard-form-actions">
            <button class="primary-button" type="submit">${icon("save")} 저장</button>
            <button class="secondary-button" type="button" id="resetDashboardButton">${icon("rotate-ccw")} 기본값</button>
            <button class="secondary-button" type="button" id="cancelDashboardButton">취소</button>
          </div>
        </form>
      </section>

      <div class="section-heading"><h3>Available Tools</h3><span>Ready</span></div>
      <section class="tool-grid">${visibleTools.map(card).join("")}</section>
    </div>
  `;
  bindDashboardEditor();
  refreshIcons();
}

function bindDashboardEditor() {
  const editor = document.querySelector("#dashboardEditor");
  const form = document.querySelector("#dashboardForm");
  const editButton = document.querySelector("#editDashboardButton");
  const cancelButton = document.querySelector("#cancelDashboardButton");
  const resetButton = document.querySelector("#resetDashboardButton");
  if (!editor || !form || !editButton) return;

  editButton.addEventListener("click", () => {
    editor.hidden = !editor.hidden;
    editButton.innerHTML = editor.hidden ? `${icon("pencil")} 수정` : `${icon("x")} 닫기`;
    refreshIcons();
  });

  cancelButton.addEventListener("click", () => {
    editor.hidden = true;
    editButton.innerHTML = `${icon("pencil")} 수정`;
    refreshIcons();
  });

  resetButton.addEventListener("click", () => {
    localStorage.removeItem(dashboardConfigKey);
    renderHome();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const config = {
      channelLabel: data.get("channelLabel"),
      channelName: data.get("channelName"),
      channelCopy: data.get("channelCopy"),
      statusLabel: data.get("statusLabel"),
      statusIcon: data.get("statusIcon"),
      statusValue: data.get("statusValue"),
      statusCopy: data.get("statusCopy"),
      menuTitle: data.get("menuTitle"),
      menuItems: defaultDashboardConfig.menuItems.map((_, index) => ({
        label: data.get(`menuLabel${index}`),
        value: data.get(`menuValue${index}`),
      })),
      roomTitle: data.get("roomTitle"),
      roomItems: defaultDashboardConfig.roomItems.map((_, index) => ({
        label: data.get(`roomLabel${index}`),
        value: data.get(`roomValue${index}`),
      })),
    };
    saveDashboardConfig(config);
    renderHome();
  });
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

function renderSettingsMenuSettings() {
  viewTitle.textContent = "SETTINGS";
  content.className = "content custom-scrollbar";
  const visibility = getMenuVisibility();
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>Show Menu</h3>
          <p>사이드바에 표시할 메뉴를 선택합니다.</p>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <section class="settings-panel">
          <div class="settings-list">
            ${configurableMenuItems.map((item) => `
              <label class="settings-row">
                <input type="checkbox" data-menu-toggle="${item.key}" ${visibility[item.key] ? "checked" : ""}>
                <span class="settings-icon">${icon(item.icon)}</span>
                <span class="settings-copy">
                  <strong>${item.name}</strong>
                  <small>${item.cat} · ${item.status}</small>
                </span>
                <span class="toggle-track" aria-hidden="true"></span>
              </label>
            `).join("")}
          </div>
          <div class="button-row">
            <button class="secondary-button" type="button" id="showReadyMenus">Ready만 표시</button>
            <button class="secondary-button" type="button" id="showAllMenus">전체 표시</button>
            <button class="danger-button" type="button" id="hideAllMenus">전체 숨김</button>
          </div>
        </section>
      </div>
    </section>
  `;
  bindSettings();
  refreshIcons();
}

function renderSettingsHome() {
  viewTitle.textContent = "SETTINGS";
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>Settings</h3>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <section class="tool-grid">${settingsSections.map((section) => `
          <article class="tool-card">
            <div class="tool-card-top">
              <span class="tool-category">Settings</span>
              <span class="tool-status">Config</span>
            </div>
            <h4>${section.name}</h4>
            <p>${section.desc}</p>
            <button type="button" data-open="${section.key}">열기</button>
          </article>
        `).join("")}</section>
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

function renderSecurePdf() {
  viewTitle.textContent = "SECURE PDF";
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>Secure PDF</h3>
          <p>PDF 파일을 브라우저 안에서 암호화 보관하거나, 여러 PDF를 병합하고 필요한 페이지만 추출합니다.</p>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <div class="tab-bar" role="tablist" aria-label="Secure PDF tools">
          <button class="tab-button active" type="button" data-pdf-tab="protect">Protect</button>
          <button class="tab-button" type="button" data-pdf-tab="unlock">Unlock</button>
          <button class="tab-button" type="button" data-pdf-tab="merge">Merge</button>
          <button class="tab-button" type="button" data-pdf-tab="extract">Extract</button>
        </div>

        <div class="pdf-tab-panel active" id="protectPdfPanel">
          <section class="pdf-layout">
            <div class="pdf-drop-card">
              <label for="protectPdfFile">PDF File</label>
              <input id="protectPdfFile" type="file" accept="application/pdf,.pdf">
              <div class="pdf-file-info" id="protectPdfInfo">선택된 PDF가 없습니다.</div>
            </div>
            <aside class="control-card">
              <h4>Encryption</h4>
              <div class="field-list">
                <label>
                  <span>Password</span>
                  <input id="protectPassword" type="password" autocomplete="new-password" placeholder="보관용 비밀번호">
                </label>
                <label>
                  <span>Confirm</span>
                  <input id="protectPasswordConfirm" type="password" autocomplete="new-password" placeholder="한 번 더 입력">
                </label>
              </div>
              <div class="button-row">
                <button class="primary-button" type="button" id="encryptPdfButton">${icon("lock")} 암호화 다운로드</button>
              </div>
              <p class="helper-copy">결과 파일은 .securepdf 형식입니다. Unlock 탭에서 같은 비밀번호로 원본 PDF를 복원합니다.</p>
            </aside>
          </section>
        </div>

        <div class="pdf-tab-panel" id="unlockPdfPanel">
          <section class="pdf-layout">
            <div class="pdf-drop-card">
              <label for="unlockPdfFile">Secure PDF File</label>
              <input id="unlockPdfFile" type="file" accept=".securepdf,application/octet-stream">
              <div class="pdf-file-info" id="unlockPdfInfo">선택된 암호화 파일이 없습니다.</div>
            </div>
            <aside class="control-card">
              <h4>Decryption</h4>
              <div class="field-list">
                <label>
                  <span>Password</span>
                  <input id="unlockPassword" type="password" autocomplete="current-password" placeholder="암호화할 때 사용한 비밀번호">
                </label>
              </div>
              <div class="button-row">
                <button class="primary-button" type="button" id="decryptPdfButton">${icon("unlock-keyhole")} PDF 복원</button>
              </div>
            </aside>
          </section>
        </div>

        <div class="pdf-tab-panel" id="mergePdfPanel">
          <section class="pdf-layout">
            <div class="pdf-drop-card">
              <label for="mergePdfFiles">PDF Files</label>
              <input id="mergePdfFiles" type="file" accept="application/pdf,.pdf" multiple>
              <div class="pdf-file-info" id="mergePdfInfo">병합할 PDF를 순서대로 선택하세요.</div>
            </div>
            <aside class="control-card">
              <h4>Merge</h4>
              <div class="field-list">
                <label>
                  <span>Output name</span>
                  <input id="mergePdfName" type="text" value="merged.pdf">
                </label>
              </div>
              <div class="button-row">
                <button class="primary-button" type="button" id="mergePdfButton">${icon("files")} 병합 다운로드</button>
              </div>
            </aside>
          </section>
        </div>

        <div class="pdf-tab-panel" id="extractPdfPanel">
          <section class="pdf-layout">
            <div class="pdf-drop-card">
              <label for="extractPdfFile">PDF File</label>
              <input id="extractPdfFile" type="file" accept="application/pdf,.pdf">
              <div class="pdf-file-info" id="extractPdfInfo">페이지를 추출할 PDF를 선택하세요.</div>
            </div>
            <aside class="control-card">
              <h4>Extract Pages</h4>
              <div class="field-list">
                <label>
                  <span>Pages</span>
                  <input id="extractPdfPages" type="text" placeholder="예: 1-3, 7, 10">
                </label>
                <label>
                  <span>Output name</span>
                  <input id="extractPdfName" type="text" value="extracted.pdf">
                </label>
              </div>
              <div class="button-row">
                <button class="primary-button" type="button" id="extractPdfButton">${icon("scissors")} 추출 다운로드</button>
              </div>
            </aside>
          </section>
        </div>

        <div class="result-list" id="pdfResults">
          ${resultRow("warn", "로컬 처리 준비됨", "파일은 서버로 업로드되지 않고 현재 브라우저 세션 안에서만 처리됩니다.")}
        </div>
      </div>
    </section>
  `;
  bindSecurePdf();
  refreshIcons();
}

function getPdfLib() {
  if (!window.PDFLib?.PDFDocument) {
    throw new Error("PDF 엔진을 불러오지 못했습니다. 네트워크 연결 후 새로고침하세요.");
  }
  return window.PDFLib;
}

function fileSummary(files) {
  const list = [...files];
  if (!list.length) return "선택된 파일이 없습니다.";
  return list.map((file, index) => `${index + 1}. ${file.name} (${formatBytes(file.size)})`).join("\n");
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "--";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function setPdfResult(status, title, detail, meta = "") {
  const results = document.querySelector("#pdfResults");
  if (results) results.innerHTML = resultRow(status, title, detail, meta);
}

function downloadBlob(filename, blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadTextFile(filename, text, type = "text/plain") {
  downloadBlob(filename, new Blob([text], { type }));
}

function normalizePdfName(name, fallback) {
  const cleaned = (name || fallback).trim() || fallback;
  return cleaned.toLowerCase().endsWith(".pdf") ? cleaned : `${cleaned}.pdf`;
}

function secureNameFromPdf(file) {
  return file.name.replace(/\.pdf$/i, "") + ".securepdf";
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

function base64ToBytes(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

async function derivePdfKey(password, salt) {
  const material = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: 210000, hash: "SHA-256" },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

async function encryptPdfFile(file, password) {
  if (!crypto.subtle) throw new Error("이 브라우저에서 WebCrypto를 사용할 수 없습니다.");
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await derivePdfKey(password, salt);
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    await file.arrayBuffer(),
  );
  return JSON.stringify({
    format: "ops-secure-pdf",
    version: 1,
    algorithm: "AES-GCM",
    kdf: "PBKDF2-SHA256",
    iterations: 210000,
    originalName: file.name,
    mime: file.type || "application/pdf",
    salt: bytesToBase64(salt),
    iv: bytesToBase64(iv),
    data: bytesToBase64(new Uint8Array(encrypted)),
  });
}

async function decryptSecurePdfFile(file, password) {
  if (!crypto.subtle) throw new Error("이 브라우저에서 WebCrypto를 사용할 수 없습니다.");
  let payload;
  try {
    payload = JSON.parse(await file.text());
  } catch {
    throw new Error("지원하지 않는 Secure PDF 파일입니다.");
  }
  if (payload.format !== "ops-secure-pdf" || !payload.salt || !payload.iv || !payload.data) {
    throw new Error("지원하지 않는 Secure PDF 파일입니다.");
  }
  const key = await derivePdfKey(password, base64ToBytes(payload.salt));
  try {
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: base64ToBytes(payload.iv) },
      key,
      base64ToBytes(payload.data),
    );
    return {
      bytes: decrypted,
      name: normalizePdfName(payload.originalName || "restored.pdf", "restored.pdf"),
    };
  } catch {
    throw new Error("비밀번호가 맞지 않거나 파일이 손상되었습니다.");
  }
}

function parsePageSelection(value, pageCount) {
  const pages = new Set();
  const tokens = value.split(",").map((item) => item.trim()).filter(Boolean);
  if (!tokens.length) throw new Error("추출할 페이지를 입력하세요.");

  tokens.forEach((token) => {
    const match = token.match(/^(\d+)(?:\s*-\s*(\d+))?$/);
    if (!match) throw new Error(`페이지 형식 오류: ${token}`);
    const start = Number(match[1]);
    const end = Number(match[2] || match[1]);
    if (start < 1 || end < 1 || start > end || end > pageCount) {
      throw new Error(`페이지 범위가 문서 범위를 벗어났습니다: ${token}`);
    }
    for (let page = start; page <= end; page += 1) pages.add(page - 1);
  });

  return [...pages];
}

async function mergePdfFiles(files) {
  const { PDFDocument } = getPdfLib();
  const merged = await PDFDocument.create();
  for (const file of files) {
    const source = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });
    const copiedPages = await merged.copyPages(source, source.getPageIndices());
    copiedPages.forEach((page) => merged.addPage(page));
  }
  return merged.save();
}

async function extractPdfPages(file, selection) {
  const { PDFDocument } = getPdfLib();
  const source = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });
  const pageIndexes = parsePageSelection(selection, source.getPageCount());
  const output = await PDFDocument.create();
  const copiedPages = await output.copyPages(source, pageIndexes);
  copiedPages.forEach((page) => output.addPage(page));
  return {
    bytes: await output.save(),
    count: pageIndexes.length,
    total: source.getPageCount(),
  };
}

function bindSecurePdf() {
  document.querySelectorAll("[data-pdf-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-pdf-tab]").forEach((tab) => tab.classList.toggle("active", tab === button));
      document.querySelectorAll(".pdf-tab-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.id === `${button.dataset.pdfTab}PdfPanel`);
      });
    });
  });

  const protectFile = document.querySelector("#protectPdfFile");
  const unlockFile = document.querySelector("#unlockPdfFile");
  const mergeFiles = document.querySelector("#mergePdfFiles");
  const extractFile = document.querySelector("#extractPdfFile");

  protectFile.addEventListener("change", () => { document.querySelector("#protectPdfInfo").textContent = fileSummary(protectFile.files); });
  unlockFile.addEventListener("change", () => { document.querySelector("#unlockPdfInfo").textContent = fileSummary(unlockFile.files); });
  mergeFiles.addEventListener("change", () => { document.querySelector("#mergePdfInfo").textContent = fileSummary(mergeFiles.files); });
  extractFile.addEventListener("change", () => { document.querySelector("#extractPdfInfo").textContent = fileSummary(extractFile.files); });

  document.querySelector("#encryptPdfButton").addEventListener("click", async () => {
    const button = document.querySelector("#encryptPdfButton");
    const file = protectFile.files[0];
    const password = document.querySelector("#protectPassword").value;
    const confirm = document.querySelector("#protectPasswordConfirm").value;
    if (!file) return setPdfResult("warn", "PDF 없음", "암호화할 PDF 파일을 선택하세요.");
    if (password.length < 8) return setPdfResult("warn", "비밀번호 부족", "8자 이상의 비밀번호를 입력하세요.");
    if (password !== confirm) return setPdfResult("warn", "비밀번호 불일치", "Password와 Confirm 값이 다릅니다.");

    button.disabled = true;
    setPdfResult("warn", "암호화 중", `${file.name} 파일을 암호화하고 있습니다.`);
    try {
      const encrypted = await encryptPdfFile(file, password);
      downloadBlob(secureNameFromPdf(file), new Blob([encrypted], { type: "application/octet-stream" }));
      setPdfResult("ok", "암호화 완료", ".securepdf 파일을 다운로드했습니다.", file.name);
    } catch (error) {
      setPdfResult("fail", "암호화 실패", error.message);
    } finally {
      button.disabled = false;
    }
  });

  document.querySelector("#decryptPdfButton").addEventListener("click", async () => {
    const button = document.querySelector("#decryptPdfButton");
    const file = unlockFile.files[0];
    const password = document.querySelector("#unlockPassword").value;
    if (!file) return setPdfResult("warn", "파일 없음", "복원할 .securepdf 파일을 선택하세요.");
    if (!password) return setPdfResult("warn", "비밀번호 없음", "비밀번호를 입력하세요.");

    button.disabled = true;
    setPdfResult("warn", "복호화 중", `${file.name} 파일을 복원하고 있습니다.`);
    try {
      const restored = await decryptSecurePdfFile(file, password);
      downloadBlob(restored.name, new Blob([restored.bytes], { type: "application/pdf" }));
      setPdfResult("ok", "복원 완료", "원본 PDF를 다운로드했습니다.", restored.name);
    } catch (error) {
      setPdfResult("fail", "복호화 실패", error.message);
    } finally {
      button.disabled = false;
    }
  });

  document.querySelector("#mergePdfButton").addEventListener("click", async () => {
    const button = document.querySelector("#mergePdfButton");
    const files = [...mergeFiles.files];
    if (files.length < 2) return setPdfResult("warn", "PDF 부족", "병합할 PDF를 2개 이상 선택하세요.");

    button.disabled = true;
    setPdfResult("warn", "병합 중", `${files.length}개 PDF를 순서대로 합치고 있습니다.`);
    try {
      const bytes = await mergePdfFiles(files);
      const name = normalizePdfName(document.querySelector("#mergePdfName").value, "merged.pdf");
      downloadBlob(name, new Blob([bytes], { type: "application/pdf" }));
      setPdfResult("ok", "병합 완료", `${files.length}개 PDF를 하나로 합쳤습니다.`, name);
    } catch (error) {
      setPdfResult("fail", "병합 실패", error.message);
    } finally {
      button.disabled = false;
    }
  });

  document.querySelector("#extractPdfButton").addEventListener("click", async () => {
    const button = document.querySelector("#extractPdfButton");
    const file = extractFile.files[0];
    const selection = document.querySelector("#extractPdfPages").value;
    if (!file) return setPdfResult("warn", "PDF 없음", "페이지를 추출할 PDF 파일을 선택하세요.");

    button.disabled = true;
    setPdfResult("warn", "추출 중", `${file.name}에서 선택한 페이지를 복사하고 있습니다.`);
    try {
      const result = await extractPdfPages(file, selection);
      const name = normalizePdfName(document.querySelector("#extractPdfName").value, "extracted.pdf");
      downloadBlob(name, new Blob([result.bytes], { type: "application/pdf" }));
      setPdfResult("ok", "추출 완료", `${result.total}페이지 중 ${result.count}페이지를 추출했습니다.`, name);
    } catch (error) {
      setPdfResult("fail", "추출 실패", error.message);
    } finally {
      button.disabled = false;
    }
  });
}

function bindSettings() {
  const writeVisibility = (next) => {
    saveMenuVisibility(next);
    renderSidebarTools();
    setActive("settings-menu");
  };

  document.querySelectorAll("[data-menu-toggle]").forEach((toggle) => {
    toggle.addEventListener("change", () => {
      const visibility = getMenuVisibility();
      visibility[toggle.dataset.menuToggle] = toggle.checked;
      writeVisibility(visibility);
    });
  });

  document.querySelector("#showReadyMenus").addEventListener("click", () => {
    const visibility = Object.fromEntries(configurableMenuItems.map((item) => [item.key, readyToolKeys.has(item.key)]));
    writeVisibility(visibility);
    renderSettingsMenuSettings();
  });

  document.querySelector("#showAllMenus").addEventListener("click", () => {
    const visibility = Object.fromEntries(configurableMenuItems.map((item) => [item.key, true]));
    writeVisibility(visibility);
    renderSettingsMenuSettings();
  });

  document.querySelector("#hideAllMenus").addEventListener("click", () => {
    const visibility = Object.fromEntries(configurableMenuItems.map((item) => [item.key, false]));
    writeVisibility(visibility);
    renderSettingsMenuSettings();
  });
}

function renderNetCheck() {
  viewTitle.textContent = "NET CHECK";
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>Net Check</h3>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <div class="tab-bar" role="tablist" aria-label="Net Check tools">
          <button class="tab-button active" type="button" data-net-tab="speed">Net Check</button>
          <button class="tab-button" type="button" data-net-tab="connection">Connection Detail</button>
          <button class="tab-button" type="button" data-net-tab="logs">Log Analyzer</button>
        </div>

        <div class="net-tab-panel active" id="speedPanel">
          <section class="download-chart-card" aria-label="Download speed chart">
            <div class="chart-head">
              <div>
                <strong>Download Throughput</strong>
                <small>Mbps over test samples</small>
              </div>
              <span id="downloadChartPeak">Peak -- Mbps</span>
            </div>
            <div class="download-chart">
              <svg id="downloadChart" viewBox="0 0 760 240" preserveAspectRatio="none" role="img" aria-label="Download Mbps trend"></svg>
            </div>
          </section>

          <section class="speed-hero">
            <div class="speed-readout">
              <div class="speed-label">Download Speed</div>
              <div class="speed-value"><strong id="downloadSpeed">--</strong><span>Mbps</span></div>
              <div class="speed-state" id="speedState">준비됨</div>
            </div>
            <div class="speed-actions">
              <button class="primary-button" type="button" id="runSpeedTest">${icon("play")} 테스트 시작</button>
              <button class="secondary-button" type="button" id="copySpeedReport">${icon("copy")} 결과 복사</button>
            </div>
          <div class="speed-progress" aria-label="Speed test progress">
            <span id="speedProgress"></span>
          </div>
        </section>

          <section class="speed-metrics">
            <article class="speed-metric">
              <span>Upload</span>
              <strong id="uploadSpeed">--</strong>
              <small>Mbps</small>
            </article>
            <article class="speed-metric">
              <span>Latency</span>
              <strong id="idleLatency">--</strong>
              <small>ms unloaded</small>
            </article>
            <article class="speed-metric">
              <span>Loaded Latency</span>
              <strong id="loadedLatency">--</strong>
              <small>ms during transfer</small>
            </article>
            <article class="speed-metric">
              <span>Test Server</span>
              <strong id="serverColo">Not tested</strong>
              <small id="serverLocation">Cloudflare endpoint</small>
            </article>
          </section>

          <div class="result-list" id="speedTimeline"></div>
        </div>

        <div class="net-tab-panel" id="connectionPanel">
          <section class="net-card">
            <div class="net-card-head">
              <div>
                <h4>Connection Detail</h4>
              </div>
              <button class="primary-button compact-button" type="button" id="runConnectionCheck">URL 체크</button>
            </div>

            <div class="target-list">
              <label for="targetUrls">Target URLs</label>
              <textarea id="targetUrls" spellcheck="false" placeholder="https://www.google.com&#10;https://intranet.example.com"></textarea>
            </div>

            <div class="net-summary-grid" id="connectionSummary">
              <div class="stat-box"><strong id="onlineState">--</strong><span>Online</span></div>
              <div class="stat-box"><strong id="browserType">--</strong><span>Network Type</span></div>
              <div class="stat-box"><strong id="browserDownlink">--</strong><span>Browser Hint</span></div>
              <div class="stat-box"><strong id="clientRegion">--</strong><span>Client Region</span></div>
            </div>

            <div class="result-list" id="connectionResults"></div>
          </section>
        </div>

        <div class="net-tab-panel" id="logsPanel">
          <section class="net-card">
            <div class="net-card-head">
              <div>
                <h4>Log Analyzer</h4>
              </div>
              <button class="secondary-button compact-button" type="button" id="sampleNetLog">샘플</button>
            </div>

            <div class="script-box">
              <div>
                <strong>진단 파일 생성</strong>
                <p>macOS/Linux는 파일을 직접 실행하지 말고 명령 복사 후 Terminal에 붙여넣으세요. 결과 파일 내용을 아래에 붙여넣으면 됩니다.</p>
              </div>
              <div class="button-row">
                <button class="secondary-button" type="button" id="downloadWinDiag">${icon("download")} Windows BAT</button>
                <button class="secondary-button" type="button" id="downloadUnixDiag">${icon("download")} macOS/Linux SH</button>
                <button class="secondary-button" type="button" id="copyDiagCommand">${icon("copy")} 명령 복사</button>
              </div>
            </div>

            <div class="target-list">
              <label for="netLogInput">Diagnostic Log</label>
              <textarea id="netLogInput" spellcheck="false" placeholder="ping 8.8.8.8, traceroute, nslookup, ipconfig/ifconfig 결과를 붙여넣으세요."></textarea>
            </div>

            <div class="button-row net-actions">
              <button class="primary-button" type="button" id="analyzeNetLog">분석하기</button>
              <button class="secondary-button" type="button" id="copyNetReport">리포트 복사</button>
              <button class="danger-button" type="button" id="clearNetLog">비우기</button>
            </div>

            <div class="analysis-panel" id="netAnalysis">
              <div class="empty-state">${icon("activity")}<span>진단 로그를 붙여넣고 분석을 실행하세요.</span></div>
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
  bindNetCheck();
  refreshIcons();
}

function classifyResult(status) {
  if (status === "ok") return "정상";
  if (status === "warn") return "주의";
  return "장애";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function resultRow(status, title, detail, meta = "") {
  return `
    <article class="result-row ${status}">
      <span class="result-status">${classifyResult(status)}</span>
      <div>
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(detail)}</p>
        ${meta ? `<small>${escapeHtml(meta)}</small>` : ""}
      </div>
    </article>
  `;
}

function getTargetUrls() {
  const raw = document.querySelector("#targetUrls")?.value || "";
  return raw.split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => (/^https?:\/\//i.test(line) ? line : `https://${line}`));
}

async function timedUrlCheck(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 7000);
  const started = performance.now();
  try {
    const response = await fetch(url, {
      cache: "no-store",
      mode: "no-cors",
      method: "HEAD",
      signal: controller.signal,
    });
    return {
      ok: response.type === "opaque" || response.ok,
      status: response.type === "opaque" ? "reachable" : response.status,
      ms: Math.round(performance.now() - started),
      error: "",
    };
  } catch (error) {
    return {
      ok: false,
      status: "failed",
      ms: Math.round(performance.now() - started),
      error: error.name === "AbortError" ? "timeout" : error.message,
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function runConnectionCheck() {
  const button = document.querySelector("#runConnectionCheck");
  const timeline = document.querySelector("#connectionResults");
  const urls = getTargetUrls();
  const rows = [];

  button.disabled = true;
  button.textContent = "체크 중";
  updateConnectionInfo();

  if (!urls.length) {
    timeline.innerHTML = resultRow("warn", "URL 없음", "확인할 URL을 한 줄에 하나씩 입력하세요.");
    button.disabled = false;
    button.textContent = "URL 체크";
    return;
  }

  for (const url of urls) {
    const result = await timedUrlCheck(url);
    rows.push(resultRow(
      result.ok ? "ok" : "fail",
      url,
      result.ok ? `${result.ms} ms에 브라우저 네트워크 도달 확인.` : `요청 실패: ${result.error}`,
      `status: ${result.status}`,
    ));
    timeline.innerHTML = rows.join("");
  }

  button.disabled = false;
  button.textContent = "URL 체크";
}

const speedState = {
  latestReport: "",
  running: false,
};

const speedEndpoint = "https://speed.cloudflare.com";

function formatMbps(value) {
  if (!Number.isFinite(value)) return "--";
  if (value >= 100) return String(Math.round(value));
  if (value >= 10) return value.toFixed(1);
  return value.toFixed(2);
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function setSpeedProgress(percent, state) {
  const progress = document.querySelector("#speedProgress");
  const stateNode = document.querySelector("#speedState");
  if (progress) progress.style.width = `${Math.max(0, Math.min(100, percent))}%`;
  if (stateNode) stateNode.textContent = state;
}

function renderDownloadChart(samples = []) {
  const chart = document.querySelector("#downloadChart");
  const peakNode = document.querySelector("#downloadChartPeak");
  if (!chart || !peakNode) return;

  const width = 760;
  const height = 240;
  const left = 62;
  const right = 28;
  const top = 22;
  const bottom = 38;
  const peak = samples.length ? Math.max(...samples) : 0;
  const latest = samples.length ? samples[samples.length - 1] : 0;
  const avg = samples.length ? samples.reduce((sum, value) => sum + value, 0) / samples.length : 0;
  peakNode.textContent = `Peak ${formatMbps(peak)} Mbps`;
  const niceMax = peak > 0 ? Math.max(10, Math.ceil((peak * 1.16) / 10) * 10) : 100;
  const ticks = [1, 0.8, 0.6, 0.4, 0.2, 0];

  const yFor = (value) => top + (1 - value / niceMax) * (height - top - bottom);
  const xFor = (index) => {
    if (samples.length <= 1) return left;
    return left + (index / (samples.length - 1)) * (width - left - right);
  };

  const grid = ticks.map((ratio) => {
    const value = niceMax * ratio;
    const y = yFor(value);
    return `
      <line class="chart-grid" x1="${left}" y1="${y.toFixed(1)}" x2="${width - right}" y2="${y.toFixed(1)}"></line>
      <text class="chart-label" x="${left - 10}" y="${(y + 4).toFixed(1)}" text-anchor="end">${Math.round(value)}</text>
    `;
  }).join("");
  const axis = `
    <defs>
      <linearGradient id="downloadAreaGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(23, 105, 224, 0.24)"></stop>
        <stop offset="100%" stop-color="rgba(23, 105, 224, 0.02)"></stop>
      </linearGradient>
      <filter id="chartGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.4" result="blur"></feGaussianBlur>
        <feMerge>
          <feMergeNode in="blur"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
    <line class="chart-axis" x1="${left}" y1="${top}" x2="${left}" y2="${height - bottom}"></line>
    <line class="chart-axis" x1="${left}" y1="${height - bottom}" x2="${width - right}" y2="${height - bottom}"></line>
    <text class="chart-unit" x="${left - 44}" y="${top - 7}">Mbps</text>
  `;

  if (!samples.length) {
    chart.innerHTML = `
      ${grid}
      ${axis}
      <text class="chart-empty" x="${(left + width - right) / 2}" y="${height / 2}" text-anchor="middle">Run download test</text>
    `;
    return;
  }

  const points = samples.map((value, index) => {
    const x = xFor(index);
    const y = yFor(value);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  const areaPoints = `${left},${height - bottom} ${points} ${xFor(samples.length - 1).toFixed(1)},${height - bottom}`;
  const dots = samples.map((value, index) => {
    const x = xFor(index);
    const y = yFor(value);
    const major = index === 0 || index === samples.length - 1 || value === peak;
    return `<circle class="${major ? "chart-dot major" : "chart-dot"}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${major ? 4.5 : 2.6}"></circle>`;
  }).join("");
  const latestX = xFor(samples.length - 1);
  const latestY = yFor(latest);
  const avgY = yFor(avg);
  const sampleLabels = `
    <text class="chart-x-label" x="${left}" y="${height - 10}" text-anchor="start">1</text>
    <text class="chart-x-label" x="${width - right}" y="${height - 10}" text-anchor="end">${samples.length}</text>
  `;

  chart.innerHTML = `
    ${grid}
    ${axis}
    <polygon class="chart-area" points="${areaPoints}"></polygon>
    <line class="chart-average" x1="${left}" y1="${avgY.toFixed(1)}" x2="${width - right}" y2="${avgY.toFixed(1)}"></line>
    <text class="chart-average-label" x="${width - right}" y="${(avgY - 6).toFixed(1)}" text-anchor="end">avg ${formatMbps(avg)}</text>
    <polyline class="chart-line" points="${points}"></polyline>
    ${dots}
    <line class="chart-current" x1="${latestX.toFixed(1)}" y1="${top}" x2="${latestX.toFixed(1)}" y2="${height - bottom}"></line>
    <text class="chart-current-label" x="${Math.max(left + 50, latestX - 8).toFixed(1)}" y="${Math.max(top + 16, latestY - 10).toFixed(1)}" text-anchor="end">${formatMbps(latest)} Mbps</text>
    ${sampleLabels}
  `;
}

function readServerMeta(response) {
  return {
    colo: response.headers.get("cf-meta-colo") || response.headers.get("colo") || "",
    country: response.headers.get("cf-meta-country") || response.headers.get("country") || "",
    city: response.headers.get("cf-meta-city") || response.headers.get("city") || "",
    asn: response.headers.get("cf-meta-asn") || response.headers.get("asn") || "",
    ip: response.headers.get("cf-meta-ip") || "",
  };
}

function mergeServerMeta(...metas) {
  return metas.reduce((merged, meta = {}) => ({
    colo: merged.colo || (meta.colo === "--" ? "" : meta.colo) || "",
    city: merged.city || meta.city || "",
    country: merged.country || meta.country || "",
    asn: merged.asn || meta.asn || "",
    ip: merged.ip || meta.ip || "",
  }), {});
}

function parseTraceMeta(text) {
  const values = Object.fromEntries(text
    .trim()
    .split(/\r?\n/)
    .map((line) => line.split("="))
    .filter((parts) => parts.length >= 2)
    .map(([key, ...rest]) => [key.trim(), rest.join("=").trim()]));

  return {
    colo: values.colo || "",
    country: values.loc || "",
    city: "",
    asn: values.asn || "",
    ip: values.ip || "",
  };
}

async function fetchServerMeta() {
  try {
    const response = await fetch(`${speedEndpoint}/meta?r=${Date.now()}`, {
      cache: "no-store",
      mode: "cors",
    });
    if (response.ok) {
      const meta = await response.json();
      return {
        colo: meta.colo || "",
        country: meta.country || meta.loc || "",
        city: meta.city || "",
        asn: meta.asn || "",
        ip: meta.clientIp || meta.ip || "",
      };
    }
  } catch {
    // Fall through to the trace endpoint, which is available on most Cloudflare hosts.
  }

  try {
    const response = await fetch(`${speedEndpoint}/cdn-cgi/trace?r=${Date.now()}`, {
      cache: "no-store",
      mode: "cors",
    });
    if (!response.ok) return {};
    return parseTraceMeta(await response.text());
  } catch {
    return {};
  }
}

async function timedSpeedFetch(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), options.timeout || 12000);
  const started = performance.now();
  const method = options.method || "GET";

  try {
    const response = await fetch(url, {
      cache: "no-store",
      mode: "cors",
      method,
      body: options.body,
      headers: options.headers,
      signal: controller.signal,
    });
    if (options.readBody !== false) await response.arrayBuffer();
    return {
      ok: response.ok,
      status: response.status,
      ms: Math.round(performance.now() - started),
      meta: readServerMeta(response),
      error: "",
    };
  } catch (error) {
    return {
      ok: false,
      status: "failed",
      ms: Math.round(performance.now() - started),
      error: error.name === "AbortError" ? `${method} timeout` : `${method} ${error.message}`,
    };
  } finally {
    clearTimeout(timeout);
  }
}

function updateConnectionInfo(meta = {}) {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  setText("#onlineState", navigator.onLine ? "Yes" : "No");
  if (connection) {
    setText("#browserType", connection.effectiveType || "unknown");
    setText("#browserDownlink", Number.isFinite(connection.downlink) ? `${connection.downlink} Mbps` : "--");
  } else {
    setText("#browserType", "n/a");
    setText("#browserDownlink", "n/a");
  }
  setText("#clientRegion", [meta.city, meta.country].filter(Boolean).join(", ") || "--");
  setText("#serverColo", meta.colo || "Not tested");
  setText("#serverLocation", [meta.city, meta.country].filter(Boolean).join(", ") || "Cloudflare speed endpoint");
}

function formatServerLine(meta = {}) {
  const server = meta.colo && meta.colo !== "--" ? meta.colo : "";
  const location = [meta.city, meta.country].filter(Boolean).join(", ");
  return `${server || "Unknown"}${location ? ` ${location}` : ""}`;
}

function displayedServerLine() {
  const server = document.querySelector("#serverColo")?.textContent.trim() || "";
  const location = document.querySelector("#serverLocation")?.textContent.trim() || "";
  const normalizedServer = server && !["--", "Checking", "Not tested"].includes(server) ? server : "Unknown";
  const normalizedLocation = location && location !== "Cloudflare speed endpoint" && location !== "Cloudflare endpoint" ? ` ${location}` : "";
  return `${normalizedServer}${normalizedLocation}`;
}

async function measureLatency(rounds = 5) {
  const samples = [];
  let meta = {};
  for (let index = 0; index < rounds; index += 1) {
    const result = await timedSpeedFetch(`${speedEndpoint}/__down?bytes=0&r=${Date.now()}-${index}`, { readBody: true, timeout: 6000 });
    if (result.ok) {
      samples.push(result.ms);
      meta = result.meta;
    }
  }
  samples.sort((a, b) => a - b);
  return {
    latency: samples.length ? Math.round(samples[Math.floor(samples.length / 2)]) : null,
    meta,
  };
}

async function measureDownload(onProgress) {
  const sizes = [
    250000, 350000, 500000, 650000, 800000,
    1000000, 1200000, 1500000, 1800000, 2200000,
    2600000, 3000000, 3600000, 4200000, 5000000,
    6000000, 7000000, 8500000, 10000000, 12000000,
  ];
  const speeds = [];
  let meta = {};
  for (let index = 0; index < sizes.length; index += 1) {
    const bytes = sizes[index];
    const result = await timedSpeedFetch(`${speedEndpoint}/__down?bytes=${bytes}&r=${Date.now()}-${index}`, { timeout: 18000 });
    if (!result.ok) throw new Error(result.error || `download failed ${result.status}`);
    meta = result.meta;
    const mbps = (bytes * 8) / (result.ms / 1000) / 1000000;
    speeds.push(mbps);
    onProgress(mbps, Math.round(((index + 1) / sizes.length) * 100), [...speeds]);
  }
  return {
    mbps: Math.max(...speeds),
    meta,
  };
}

async function measureUpload(onProgress) {
  const sizes = [100000, 250000, 500000, 1000000, 2000000];
  const speeds = [];
  let meta = {};
  for (let index = 0; index < sizes.length; index += 1) {
    const bytes = sizes[index];
    const body = new Blob([new Uint8Array(bytes)]);
    const result = await timedSpeedFetch(`${speedEndpoint}/__up?r=${Date.now()}-${index}`, {
      method: "POST",
      body,
      readBody: false,
      timeout: 18000,
    });
    if (!result.ok) throw new Error(result.error || `upload failed ${result.status}`);
    meta = result.meta;
    const mbps = (bytes * 8) / (result.ms / 1000) / 1000000;
    speeds.push(mbps);
    onProgress(mbps, Math.round(((index + 1) / sizes.length) * 100));
  }
  return {
    mbps: Math.max(...speeds),
    meta,
  };
}

async function runSpeedTest() {
  if (speedState.running) return;
  speedState.running = true;

  const button = document.querySelector("#runSpeedTest");
  const timeline = document.querySelector("#speedTimeline");
  const rows = [];
  const startedAt = new Date();

  speedState.latestReport = "";
  button.disabled = true;
  setSpeedProgress(4, "레이턴시 측정 중");
  setText("#downloadSpeed", "--");
  setText("#uploadSpeed", "--");
  setText("#idleLatency", "--");
  setText("#loadedLatency", "--");
  setText("#serverColo", "Checking");
  setText("#serverLocation", "Cloudflare endpoint");
  renderDownloadChart([]);
  timeline.innerHTML = resultRow("warn", "속도 테스트 시작", "Cloudflare speed endpoint로 latency, download, upload를 순서대로 측정합니다.");

  try {
    updateConnectionInfo();

    const idle = await measureLatency(5);
    setText("#idleLatency", idle.latency === null ? "--" : String(idle.latency));
    updateConnectionInfo(idle.meta);
    rows.push(resultRow("ok", "Idle latency 측정", idle.latency === null ? "측정 실패" : `${idle.latency} ms`, "트래픽이 거의 없는 상태의 왕복 시간입니다."));
    timeline.innerHTML = rows.join("");
    setSpeedProgress(18, "다운로드 측정 중");

    const downloadStart = performance.now();
    const loadedLatencyPromise = measureLatency(4);
    const download = await measureDownload((mbps, percent, samples) => {
      setText("#downloadSpeed", formatMbps(mbps));
      renderDownloadChart(samples);
      setSpeedProgress(18 + percent * 0.45, "다운로드 측정 중");
    });
    const loaded = await loadedLatencyPromise;
    setText("#downloadSpeed", formatMbps(download.mbps));
    setText("#loadedLatency", loaded.latency === null ? "--" : String(loaded.latency));
    updateConnectionInfo(download.meta);
    rows.push(resultRow("ok", "Download 측정", `${formatMbps(download.mbps)} Mbps`, `${Math.round(performance.now() - downloadStart)} ms 동안 단계별 파일을 내려받았습니다.`));
    rows.push(resultRow("ok", "Loaded latency 측정", loaded.latency === null ? "측정 실패" : `${loaded.latency} ms`, "다운로드 중 동시에 측정한 지연입니다."));
    timeline.innerHTML = rows.join("");
    setSpeedProgress(68, "업로드 측정 중");

    let upload = { mbps: null, meta: {} };
    let uploadError = "";
    try {
      upload = await measureUpload((mbps, percent) => {
        setText("#uploadSpeed", formatMbps(mbps));
        setSpeedProgress(68 + percent * 0.28, "업로드 측정 중");
      });
      setText("#uploadSpeed", formatMbps(upload.mbps));
      updateConnectionInfo(upload.meta.colo ? upload.meta : download.meta);
      rows.push(resultRow("ok", "Upload 측정", `${formatMbps(upload.mbps)} Mbps`, "브라우저에서 테스트 endpoint로 바이너리 payload를 전송했습니다."));
    } catch (error) {
      uploadError = error.message || "upload failed";
      setText("#uploadSpeed", "Fail");
      updateConnectionInfo(download.meta);
      rows.push(resultRow("fail", "Upload 측정 실패", uploadError, "다운로드/레이턴시는 유효합니다. 회사망, VPN, 브라우저 보안 정책이 POST 업로드를 막을 수 있습니다."));
    }

    const traceMeta = await fetchServerMeta();
    const serverMeta = mergeServerMeta(download.meta, upload.meta, idle.meta, loaded.meta, traceMeta);
    updateConnectionInfo(serverMeta);

    const completedAt = new Date();
    const reportLines = [
      "Net Check speed report",
      `Time: ${completedAt.toLocaleString()}`,
      `Download: ${formatMbps(download.mbps)} Mbps`,
      `Upload: ${upload.mbps === null ? `failed (${uploadError})` : `${formatMbps(upload.mbps)} Mbps`}`,
      `Latency: ${idle.latency ?? "--"} ms`,
      `Loaded latency: ${loaded.latency ?? "--"} ms`,
      `Server: ${formatServerLine(serverMeta)}`,
      `Browser online: ${navigator.onLine ? "yes" : "no"}`,
      `Duration: ${Math.round((completedAt - startedAt) / 1000)}s`,
    ];
    speedState.latestReport = reportLines.join("\n");
    rows.push(resultRow(uploadError ? "warn" : "ok", "테스트 완료", uploadError ? "업로드를 제외한 결과를 저장했습니다." : "결과 복사 버튼으로 헬프데스크 공유용 리포트를 복사할 수 있습니다."));
    timeline.innerHTML = rows.join("");
    setSpeedProgress(100, "완료");
  } catch (error) {
    rows.push(resultRow("fail", "속도 테스트 실패", error.message || "알 수 없는 오류", "회사망, VPN, 브라우저 보안 정책, 테스트 endpoint 차단 여부를 확인하세요."));
    timeline.innerHTML = rows.join("");
    setSpeedProgress(100, "실패");
  } finally {
    button.disabled = false;
    speedState.running = false;
  }
}

function extractFirstMatch(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match;
  }
  return null;
}

function analyzeNetworkLog(text) {
  const findings = [];
  const recommendations = [];

  const packetLossMatch = extractFirstMatch(text, [
    /(\d+(?:\.\d+)?)%\s*packet loss/i,
    /lost\s*=\s*\d+\s*\((\d+(?:\.\d+)?)%\s*loss\)/i,
    /손실\s*=\s*\d+.*?\((\d+(?:\.\d+)?)%\s*손실\)/i,
  ]);
  const avgMatch = extractFirstMatch(text, [
    /(?:avg|average|평균)\s*[=/]\s*(\d+(?:\.\d+)?)\s*ms/i,
    /평균\s*=\s*(\d+(?:\.\d+)?)ms/i,
  ]);
  const dnsFailure = /(can't find|server failed|nxdomain|dns request timed out|temporary failure in name resolution|name or service not known|알 수 없는 호스트|호스트를 찾을 수)/i.test(text);
  const timeout = /(request timed out|요청 시간이 만료|operation timed out|\*\s+\*\s+\*)/i.test(text);
  const unreachable = /(destination host unreachable|network is unreachable|no route to host|일반 오류|대상 호스트에 연결할 수)/i.test(text);
  const vpnHint = /(vpn|ssl vpn|globalprotect|forticlient|anyconnect|wireguard|tailscale)/i.test(text);
  const gatewayHint = /(default gateway|기본 게이트웨이|router|gateway)/i.test(text);
  const privateIp = /\b(10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[0-1])\.\d+\.\d+|192\.168\.\d+\.\d+)\b/.test(text);
  const apipa = /\b169\.254\.\d+\.\d+\b/.test(text);

  if (!text.trim()) {
    return {
      score: "대기",
      rows: [resultRow("warn", "입력 없음", "ping, traceroute, nslookup, ipconfig/ifconfig 결과를 붙여넣으세요.")],
      report: "Net Check report\n- 입력 없음",
    };
  }

  if (packetLossMatch) {
    const loss = Number(packetLossMatch[1]);
    if (loss === 0) {
      findings.push(resultRow("ok", "패킷로스 0%", "ping 결과에서 패킷 손실은 보이지 않습니다."));
    } else if (loss < 5) {
      findings.push(resultRow("warn", `패킷로스 ${loss}%`, "간헐적 품질 저하 가능성이 있습니다. Wi-Fi, VPN, 중간망 상태를 확인하세요."));
      recommendations.push("패킷로스가 낮지만 존재합니다. 유선/다른 AP/VPN off 상태로 재측정하세요.");
    } else {
      findings.push(resultRow("fail", `패킷로스 ${loss}%`, "사용자가 체감할 수 있는 네트워크 장애 수준입니다."));
      recommendations.push("패킷로스가 큽니다. 로컬 Wi-Fi, 게이트웨이, VPN, ISP 순서로 분리 확인하세요.");
    }
  }

  if (avgMatch) {
    const avg = Number(avgMatch[1]);
    if (avg < 80) findings.push(resultRow("ok", `평균 지연 ${avg} ms`, "일반 업무 트래픽 기준 양호합니다."));
    else if (avg < 250) findings.push(resultRow("warn", `평균 지연 ${avg} ms`, "화상회의나 원격 접속에서 지연을 느낄 수 있습니다."));
    else {
      findings.push(resultRow("fail", `평균 지연 ${avg} ms`, "실시간 업무에 부적합한 지연입니다."));
      recommendations.push("높은 RTT입니다. VPN 경유 여부, 해외 회선, 무선 신호를 확인하세요.");
    }
  }

  if (dnsFailure) {
    findings.push(resultRow("fail", "DNS 실패 단서", "도메인 이름을 IP로 바꾸는 단계에서 실패한 로그가 보입니다."));
    recommendations.push("DNS 서버 설정, VPN DNS push, 사내 도메인 suffix 설정을 확인하세요.");
  }
  if (timeout) {
    findings.push(resultRow("warn", "타임아웃 단서", "응답 없는 hop 또는 대상 timeout이 보입니다."));
    recommendations.push("traceroute timeout은 방화벽 정책일 수 있습니다. 마지막 도달 hop과 대상 서비스 상태를 같이 보세요.");
  }
  if (unreachable) {
    findings.push(resultRow("fail", "라우팅 실패 단서", "대상 호스트 또는 네트워크로 가는 경로가 없다는 로그가 보입니다."));
    recommendations.push("기본 게이트웨이, 라우팅 테이블, VPN split tunnel 정책을 확인하세요.");
  }
  if (apipa) {
    findings.push(resultRow("fail", "자가 할당 IP 감지", "169.254.x.x 주소는 DHCP에서 정상 IP를 받지 못했을 때 자주 나타납니다."));
    recommendations.push("DHCP 갱신, 케이블/AP 변경, IP 충돌 여부를 확인하세요.");
  }
  if (privateIp) findings.push(resultRow("ok", "사설 IP 감지", "로컬 네트워크 대역 IP가 보입니다."));
  if (gatewayHint) findings.push(resultRow("ok", "게이트웨이 정보 있음", "기본 게이트웨이 또는 라우터 정보가 포함되어 있습니다."));
  if (vpnHint) {
    findings.push(resultRow("warn", "VPN 관련 로그", "VPN 클라이언트 또는 SSL VPN 단서가 있습니다."));
    recommendations.push("VPN 연결 전/후 같은 대상에 대해 ping, DNS, URL 체크를 비교하세요.");
  }

  if (!findings.length) {
    findings.push(resultRow("warn", "판단 단서 부족", "표준 ping/traceroute/nslookup 패턴이 적습니다. 원본 명령 결과를 더 붙여넣으세요."));
  }

  const score = findings.some((item) => item.includes("class=\"result-row fail")) ? "장애 의심"
    : findings.some((item) => item.includes("class=\"result-row warn")) ? "주의"
    : "정상";
  const summaryLines = recommendations.length ? recommendations : ["현재 로그에서는 치명적 단서가 적습니다. 재현 시간, 대상 URL, VPN 여부를 같이 기록하세요."];

  return {
    score,
    rows: [
      `<div class="analysis-score"><strong>${score}</strong><span>Analysis Result</span></div>`,
      ...findings,
      `<div class="recommend-box"><strong>Next Actions</strong><ul>${summaryLines.map((line) => `<li>${line}</li>`).join("")}</ul></div>`,
    ],
    report: [
      "Net Check report",
      `Result: ${score}`,
      "",
      "Findings:",
      ...findings.map((row) => row.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()).filter(Boolean).map((line) => `- ${line}`),
      "",
      "Next actions:",
      ...summaryLines.map((line) => `- ${line}`),
    ].join("\n"),
  };
}

function diagnosticScript(type) {
  if (type === "windows") {
    return [
      "@echo off",
      "set OUT=%USERPROFILE%\\Desktop\\netcheck-log.txt",
      "echo NET CHECK DIAGNOSTIC > \"%OUT%\"",
      "echo DATE %DATE% %TIME% >> \"%OUT%\"",
      "echo. >> \"%OUT%\"",
      "echo === IPCONFIG === >> \"%OUT%\"",
      "ipconfig /all >> \"%OUT%\"",
      "echo. >> \"%OUT%\"",
      "echo === PING CLOUDFLARE DNS === >> \"%OUT%\"",
      "ping 1.1.1.1 >> \"%OUT%\"",
      "echo. >> \"%OUT%\"",
      "echo === PING GOOGLE DNS === >> \"%OUT%\"",
      "ping 8.8.8.8 >> \"%OUT%\"",
      "echo. >> \"%OUT%\"",
      "echo === DNS LOOKUP === >> \"%OUT%\"",
      "nslookup google.com >> \"%OUT%\"",
      "echo. >> \"%OUT%\"",
      "echo === TRACE === >> \"%OUT%\"",
      "tracert 1.1.1.1 >> \"%OUT%\"",
      "echo Created %OUT%",
      "pause",
    ].join("\r\n");
  }

  return [
    "#!/bin/sh",
    "DESKTOP=\"$HOME/Desktop\"",
    "[ -d \"$DESKTOP\" ] || DESKTOP=\"$HOME\"",
    "OUT=\"$DESKTOP/netcheck-log.txt\"",
    "touch \"$OUT\" 2>/dev/null || OUT=\"/tmp/netcheck-log.txt\"",
    "echo 'NET CHECK DIAGNOSTIC' > \"$OUT\"",
    "date >> \"$OUT\"",
    "echo '' >> \"$OUT\"",
    "echo '=== IFCONFIG ===' >> \"$OUT\"",
    "(ifconfig || ip addr) >> \"$OUT\" 2>&1",
    "echo '' >> \"$OUT\"",
    "echo '=== ROUTE ===' >> \"$OUT\"",
    "(netstat -rn || ip route) >> \"$OUT\" 2>&1",
    "echo '' >> \"$OUT\"",
    "echo '=== PING CLOUDFLARE DNS ===' >> \"$OUT\"",
    "ping -c 4 1.1.1.1 >> \"$OUT\" 2>&1",
    "echo '' >> \"$OUT\"",
    "echo '=== PING GOOGLE DNS ===' >> \"$OUT\"",
    "ping -c 4 8.8.8.8 >> \"$OUT\" 2>&1",
    "echo '' >> \"$OUT\"",
    "echo '=== DNS LOOKUP ===' >> \"$OUT\"",
    "(nslookup google.com || dig google.com) >> \"$OUT\" 2>&1",
    "echo '' >> \"$OUT\"",
    "echo '=== TRACE ===' >> \"$OUT\"",
    "(traceroute 1.1.1.1 || tracepath 1.1.1.1) >> \"$OUT\" 2>&1",
    "echo \"Created $OUT\"",
  ].join("\n");
}

function bindNetCheck() {
  const logInput = document.querySelector("#netLogInput");
  const analysis = document.querySelector("#netAnalysis");
  const copyButton = document.querySelector("#copyNetReport");
  const copySpeedButton = document.querySelector("#copySpeedReport");
  let latestReport = "";

  updateConnectionInfo();
  renderDownloadChart([]);
  document.querySelector("#targetUrls").value = `${location.origin}\nhttps://www.google.com`;
  document.querySelector("#runSpeedTest").addEventListener("click", runSpeedTest);
  document.querySelector("#runConnectionCheck").addEventListener("click", runConnectionCheck);

  document.querySelectorAll("[data-net-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll("[data-net-tab]").forEach((item) => item.classList.toggle("active", item === tab));
      document.querySelector("#speedPanel").classList.toggle("active", tab.dataset.netTab === "speed");
      document.querySelector("#connectionPanel").classList.toggle("active", tab.dataset.netTab === "connection");
      document.querySelector("#logsPanel").classList.toggle("active", tab.dataset.netTab === "logs");
    });
  });

  document.querySelector("#downloadWinDiag").addEventListener("click", () => {
    downloadTextFile("netcheck-diagnostic.bat", diagnosticScript("windows"), "application/bat");
  });

  document.querySelector("#downloadUnixDiag").addEventListener("click", () => {
    downloadTextFile("netcheck-diagnostic.sh", diagnosticScript("unix"), "text/x-shellscript");
  });

  document.querySelector("#copyDiagCommand").addEventListener("click", async () => {
    const command = "sh ~/Downloads/netcheck-diagnostic.sh; cat ~/Desktop/netcheck-log.txt 2>/dev/null || cat ~/netcheck-log.txt 2>/dev/null || cat /tmp/netcheck-log.txt";
    try {
      await navigator.clipboard.writeText(command);
      document.querySelector("#copyDiagCommand").textContent = "복사됨";
      setTimeout(() => { document.querySelector("#copyDiagCommand").innerHTML = `${icon("copy")} 명령 복사`; refreshIcons(); }, 1100);
    } catch {
      document.querySelector("#copyDiagCommand").textContent = "복사 실패";
    }
  });

  copySpeedButton.addEventListener("click", async () => {
    if (!speedState.latestReport) {
      speedState.latestReport = [
        "Net Check speed report",
        `Download: ${document.querySelector("#downloadSpeed").textContent} Mbps`,
        `Upload: ${document.querySelector("#uploadSpeed").textContent} Mbps`,
        `Latency: ${document.querySelector("#idleLatency").textContent} ms`,
        `Loaded latency: ${document.querySelector("#loadedLatency").textContent} ms`,
        `Server: ${displayedServerLine()}`,
      ].join("\n");
    }
    try {
      await navigator.clipboard.writeText(speedState.latestReport);
      copySpeedButton.textContent = "복사됨";
      setTimeout(() => { copySpeedButton.innerHTML = `${icon("copy")} 결과 복사`; refreshIcons(); }, 1100);
    } catch {
      copySpeedButton.textContent = "복사 실패";
      setTimeout(() => { copySpeedButton.innerHTML = `${icon("copy")} 결과 복사`; refreshIcons(); }, 1100);
    }
  });

  document.querySelector("#sampleNetLog").addEventListener("click", () => {
    logInput.value = [
      "ping 8.8.8.8",
      "Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),",
      "Approximate round trip times in milli-seconds:",
      "Minimum = 18ms, Maximum = 31ms, Average = 24ms",
      "",
      "nslookup intranet.company.local",
      "DNS request timed out.",
      "",
      "tracert intranet.company.local",
      "  1    2 ms    1 ms    1 ms  192.168.0.1",
      "  2    *       *       *     Request timed out.",
      "VPN: SSL VPN connected",
    ].join("\n");
    logInput.focus();
  });

  document.querySelector("#analyzeNetLog").addEventListener("click", () => {
    const result = analyzeNetworkLog(logInput.value);
    latestReport = result.report;
    analysis.innerHTML = result.rows.join("");
  });

  copyButton.addEventListener("click", async () => {
    if (!latestReport) {
      const result = analyzeNetworkLog(logInput.value);
      latestReport = result.report;
      analysis.innerHTML = result.rows.join("");
    }
    try {
      await navigator.clipboard.writeText(latestReport);
      copyButton.textContent = "복사됨";
      setTimeout(() => { copyButton.textContent = "리포트 복사"; }, 1100);
    } catch {
      logInput.select();
      document.execCommand("copy");
    }
  });

  document.querySelector("#clearNetLog").addEventListener("click", () => {
    logInput.value = "";
    latestReport = "";
    analysis.innerHTML = `<div class="empty-state">${icon("activity")}<span>진단 로그를 붙여넣고 분석을 실행하세요.</span></div>`;
    refreshIcons();
    logInput.focus();
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

  if (route === "netcheck") {
    renderNetCheck();
    return;
  }

  if (route === "pdf") {
    renderSecurePdf();
    return;
  }

  if (route === "settings") {
    renderSettingsHome();
    return;
  }

  if (route === "settings-menu") {
    renderSettingsMenuSettings();
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

const policyToggle = document.querySelector("#policyToggle");
if (policyToggle) {
  policyToggle.addEventListener("click", () => {
    const menu = document.querySelector("#policyMenu");
    menu.classList.toggle("open");
    policyToggle.classList.toggle("closed", !menu.classList.contains("open"));
  });
}

document.querySelector("#settingsToggle").addEventListener("click", () => {
  const menu = document.querySelector("#settingsMenu");
  const button = document.querySelector("#settingsToggle");
  menu.classList.toggle("open");
  button.classList.toggle("closed", !menu.classList.contains("open"));
  if (menu.classList.contains("open")) openRoute("settings");
});

document.querySelector("#sidebarButton").addEventListener("click", () => {
  sidebar.classList.toggle("mobile-open");
  overlay.classList.toggle("show", sidebar.classList.contains("mobile-open"));
});

overlay.addEventListener("click", closeMobileSidebar);
document.querySelector("#refreshButton").addEventListener("click", () => openRoute(document.querySelector("[data-route].active")?.dataset.route || "home"));
document.querySelector("#versionButton").addEventListener("click", () => openRoute("textcleaner"));

renderSidebarTools();
renderPolicyMenu();
renderSettingsMenu();
renderHome();
refreshIcons();
