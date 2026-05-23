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
  { key: "directory", cat: "System Index", name: "System Directory", desc: "Slack, Google Workspace, Microsoft Entra ID 연동 현황을 안내합니다.", status: "Official", icon: "library" },
  { key: "meeting", cat: "Facility Mgmt", name: "Meeting Room", desc: "회의실 예약 현황 확인과 간편 예약 지원 도구입니다.", status: "Official", icon: "calendar" },
  { key: "cable", cat: "Network Mgmt", name: "Cable Seat Locator", desc: "선번호, 자리, 네트워크 장비 정보를 연결해 검색합니다.", status: "Official", icon: "scan-search" },
  { key: "onboarding", cat: "New Employee", name: "IT Onboarding Guide", desc: "신규 입사자 IT 환경 셋업 체크리스트입니다.", status: "Official", icon: "user-plus" },
];

const labTools = [
  { key: "netcheck", cat: "Network", name: "Network Check", desc: "다운로드, 업로드, 레이턴시, 테스트 서버 정보를 측정합니다.", status: "Ready", icon: "wifi" },
  { key: "imagestudio", cat: "Media", name: "Image Studio", desc: "이미지 리사이즈, 크롭, 포맷 변환을 브라우저에서 처리합니다.", status: "Ready", icon: "image-plus" },
  { key: "pdf", cat: "Document", name: "Secure PDF", desc: "PDF 암호화 보관, 복호화, 병합, 페이지 추출을 로컬에서 처리합니다.", status: "Ready", icon: "file-lock-2" },
  { key: "diff", cat: "Developer", name: "Diff Expert", desc: "텍스트 차이 비교와 변경 요약을 위한 도구입니다.", status: "Ready", icon: "git-compare" },
  { key: "rename", cat: "Files", name: "File Renamer", desc: "파일명 일괄 변경 규칙을 테스트하는 도구입니다.", status: "Labs", icon: "files" },
  { key: "textcleaner", cat: "Text Utility", name: "Text Cleaner", desc: "공백, 줄바꿈, 특수문자를 정리하는 실제 구현 도구입니다.", status: "Ready", icon: "sparkles" },
  { key: "todo", cat: "Personal Ops", name: "Todo List", desc: "작업 목록과 체크리스트를 관리하는 도구입니다.", status: "Labs", icon: "list-checks" },
  { key: "work", cat: "Time & Holiday", name: "Work Manager", desc: "근무일, 휴일, 연차 시뮬레이션을 위한 슬롯입니다.", status: "Labs", icon: "calendar-range" },
  { key: "tax", cat: "Finance", name: "Year-end Tax", desc: "연말정산 계산과 시나리오 비교 도구 자리입니다.", status: "Labs", icon: "coins" },
  { key: "lunch", cat: "Dining", name: "Lunch Guide", desc: "잠실 근처 점심 후보와 랜덤 추천을 연결할 수 있습니다.", status: "Labs", icon: "map-pin" },
];

const readyToolKeys = new Set(["directory", "signature", "netcheck", "imagestudio", "pdf", "diff", "textcleaner"]);
const visibleTools = [...officialTools, ...labTools].filter((tool) => readyToolKeys.has(tool.key));

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
const systemDirectoryConfigKey = "opsHubSystemDirectoryConfig";
const systemDirectoryRuntimeKey = "opsHubSystemDirectoryRuntime";
const entraReturnRouteKey = "opsHubEntraReturnRoute";
const sidebarCollapsedKey = "opsHubSidebarCollapsed";
const settingsPasswordKey = "opsHubSettingsPassword";
let settingsUnlocked = false;
const configurableMenuItems = [...officialTools, ...labTools, ...policyTools];
const settingsSections = [
  { key: "settings-menu", name: "Show Menu", desc: "사이드바 메뉴 표시 여부를 관리합니다.", icon: "list-filter" },
  { key: "settings-integrations", name: "Integration Settings", desc: "Slack, Google Workspace, Microsoft Entra ID 연동 설정을 관리합니다.", icon: "plug" },
  { key: "settings-security", name: "Security Settings", desc: "Settings 진입 비밀번호를 변경합니다.", icon: "lock-keyhole" },
];
let currentRoute = "home";

const defaultDashboardConfig = {
  channelLabel: "IT Comm.",
  channelName: "#ops-hub",
  channelCopy: "IT 운영 업무와 개인 유틸리티를 한곳에서 실행하는 포트폴리오 포털입니다.",
  weatherLabel: "Weather",
  weatherLocation: "서울특별시",
  weatherLatitude: 37.5665,
  weatherLongitude: 126.978,
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

const systemDirectoryDefaults = {
  entra: {
    tenantName: "테스트 Entra ID",
    tenantId: "organizations",
    clientId: "",
    scopes: "User.Read Directory.Read.All",
    primaryDomain: "contoso.onmicrosoft.com",
    adminAccount: "admin@contoso.onmicrosoft.com",
    owner: "IT Operations",
    note: "현재 테스트 우선 연동 대상입니다. 실제 tenant ID와 관리자 계정으로 교체하세요.",
  },
  google: {
    domain: "company.com",
    adminAccount: "admin@company.com",
    owner: "IT Operations",
    note: "Google Workspace 도입 시 도메인과 관리자 계정을 입력하세요.",
  },
  slack: {
    workspaceName: "company",
    workspaceUrl: "https://company.slack.com",
    adminAccount: "owner@company.com",
    owner: "IT Operations",
    note: "Slack workspace URL 확정 후 관리자 링크가 활성화됩니다.",
  },
};

const systemDirectoryRuntimeDefaults = {
  entra: { connectionStatus: "not_configured", accountCount: 0, groupCount: 0, syncedAt: "", accountName: "", accountUsername: "", error: "" },
  google: { connectionStatus: "not_configured", accountCount: 0, groupCount: 0, syncedAt: "" },
  slack: { connectionStatus: "not_configured", accountCount: 0, groupCount: 0, syncedAt: "" },
};

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

function getSettingsPasswordRecord() {
  try {
    return JSON.parse(localStorage.getItem(settingsPasswordKey) || "null");
  } catch {
    return null;
  }
}

function randomHex(length = 16) {
  const bytes = new Uint8Array(length);
  if (window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(bytes);
  } else {
    bytes.forEach((_, index) => { bytes[index] = Math.floor(Math.random() * 256); });
  }
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function sha256Hex(value) {
  if (!window.crypto?.subtle) {
    let hash = 0;
    for (let index = 0; index < value.length; index += 1) {
      hash = ((hash << 5) - hash) + value.charCodeAt(index);
      hash |= 0;
    }
    return `fallback-${Math.abs(hash).toString(16)}`;
  }
  const bytes = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function hashSettingsPassword(password, salt = randomHex()) {
  return {
    salt,
    hash: await sha256Hex(`${salt}:${password}`),
  };
}

async function verifySettingsPassword(password) {
  const record = getSettingsPasswordRecord();
  if (!record?.salt || !record?.hash) return false;
  const next = await hashSettingsPassword(password, record.salt);
  return next.hash === record.hash;
}

async function saveSettingsPassword(password) {
  localStorage.setItem(settingsPasswordKey, JSON.stringify(await hashSettingsPassword(password)));
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
    const previousChannelName = ["#ops", "-", "cl", "one"].join("");
    const oldSourceTerms = [["원", "본 포", "털"].join(""), ["재", "구", "현"].join(""), ["클", "론"].join("")];
    if (saved.channelName === previousChannelName) {
      saved.channelName = defaultDashboardConfig.channelName;
    }
    if (oldSourceTerms.some((term) => String(saved.channelCopy || "").includes(term))) {
      saved.channelCopy = defaultDashboardConfig.channelCopy;
    }
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

function getDashboardWeatherConfig(dashboard) {
  return {
    label: dashboard.weatherLabel || dashboard.statusLabel || defaultDashboardConfig.weatherLabel,
    location: dashboard.weatherLocation || "서울특별시",
    latitude: Number(dashboard.weatherLatitude) || defaultDashboardConfig.weatherLatitude,
    longitude: Number(dashboard.weatherLongitude) || defaultDashboardConfig.weatherLongitude,
  };
}

function saveDashboardConfig(config) {
  localStorage.setItem(dashboardConfigKey, JSON.stringify(config));
}

function weatherCodeMeta(code, isDay = true) {
  const value = Number(code);
  if (value === 0) return { label: "맑음", icon: isDay ? "sun" : "moon" };
  if ([1, 2].includes(value)) return { label: "구름 조금", icon: isDay ? "cloud-sun" : "cloud-moon" };
  if (value === 3) return { label: "흐림", icon: "cloud" };
  if ([45, 48].includes(value)) return { label: "안개", icon: "cloud-fog" };
  if ([51, 53, 55, 56, 57].includes(value)) return { label: "이슬비", icon: "cloud-drizzle" };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(value)) return { label: "비", icon: "cloud-rain" };
  if ([71, 73, 75, 77, 85, 86].includes(value)) return { label: "눈", icon: "cloud-snow" };
  if ([95, 96, 99].includes(value)) return { label: "뇌우", icon: "cloud-lightning" };
  return { label: "날씨", icon: "cloud-sun" };
}

function formatTemperature(value) {
  return Number.isFinite(Number(value)) ? `${Math.round(Number(value))}°` : "--";
}

function renderWeatherCard(dashboard) {
  const weather = getDashboardWeatherConfig(dashboard);
  return `
    <article class="hero-card weather" id="weatherCard">
      <div class="card-label">${icon("map-pin")} ${escapeHtml(weather.label)}</div>
      <div class="weather-row">
        <span class="weather-condition-icon" id="weatherConditionIcon">${icon("cloud-sun")}</span>
        <div>
          <div class="weather-temp" id="weatherTemp">--°</div>
          <p class="hero-copy" id="weatherSummary">날씨 정보를 불러오는 중입니다.</p>
        </div>
      </div>
      <div class="weather-location" id="weatherLocation">${escapeHtml(weather.location)}</div>
      <div class="weather-detail-grid">
        <div><strong id="weatherHighLow">-- / --</strong><span>최고 / 최저</span></div>
        <div><strong id="weatherRain">--</strong><span>비</span></div>
        <div><strong id="weatherSnow">--</strong><span>눈</span></div>
      </div>
    </article>
  `;
}

function setWeatherCardState(state) {
  const iconNode = document.querySelector("#weatherConditionIcon");
  if (!iconNode) return;
  iconNode.innerHTML = icon(state.icon || "cloud-sun");
  setText("#weatherTemp", state.temperature || "--°");
  setText("#weatherSummary", state.summary || "날씨 정보를 불러오지 못했습니다.");
  setText("#weatherLocation", state.location || "");
  setText("#weatherHighLow", state.highLow || "-- / --");
  setText("#weatherRain", state.rain || "--");
  setText("#weatherSnow", state.snow || "--");
  refreshIcons();
}

function buildWeatherUrl(latitude, longitude) {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current: "temperature_2m,weather_code,precipitation,rain,snowfall,is_day",
    daily: "temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    forecast_days: "1",
    timezone: "auto",
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

async function geocodeWithOpenMeteo(query) {
  const params = new URLSearchParams({
    name: query,
    count: "1",
    language: "ko",
    format: "json",
  });
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${params.toString()}`);
  if (!response.ok) throw new Error("위치 검색에 실패했습니다.");
  const data = await response.json();
  const place = data.results?.[0];
  if (!place) throw new Error("해당 위치를 찾지 못했습니다.");
  return {
    location: [place.name, place.admin1, place.country_code].filter(Boolean).join(", "),
    latitude: place.latitude,
    longitude: place.longitude,
  };
}

async function geocodeWithPhoton(query) {
  const params = new URLSearchParams({
    q: query,
    limit: "1",
  });
  const response = await fetch(`https://photon.komoot.io/api/?${params.toString()}`);
  if (!response.ok) throw new Error("주소 검색에 실패했습니다.");
  const data = await response.json();
  const place = data.features?.[0];
  if (!place) throw new Error("해당 주소를 찾지 못했습니다.");
  const [longitude, latitude] = place.geometry.coordinates;
  const properties = place.properties || {};
  return {
    location: [properties.name, properties.city || properties.county, properties.countrycode].filter(Boolean).join(", "),
    latitude,
    longitude,
  };
}

async function geocodeWeatherLocation(query) {
  try {
    return await geocodeWithPhoton(query);
  } catch {
    return geocodeWithOpenMeteo(query);
  }
}

async function loadDashboardWeather() {
  const dashboard = getDashboardConfig();
  let weather = getDashboardWeatherConfig(dashboard);
  try {
    if (!Number.isFinite(weather.latitude) || !Number.isFinite(weather.longitude)) {
      weather = { ...weather, ...(await geocodeWeatherLocation(weather.location)) };
    }
    const response = await fetch(buildWeatherUrl(weather.latitude, weather.longitude));
    if (!response.ok) throw new Error("날씨 정보를 불러오지 못했습니다.");
    const data = await response.json();
    const current = data.current || {};
    const daily = data.daily || {};
    const meta = weatherCodeMeta(current.weather_code, current.is_day !== 0);
    const rain = Number(current.rain || current.precipitation || 0);
    const snow = Number(current.snowfall || 0);
    const precipitationChance = daily.precipitation_probability_max?.[0];

    setWeatherCardState({
      icon: meta.icon,
      temperature: formatTemperature(current.temperature_2m),
      summary: `${meta.label}${Number.isFinite(Number(precipitationChance)) ? ` · 강수확률 ${precipitationChance}%` : ""}`,
      location: weather.location,
      highLow: `${formatTemperature(daily.temperature_2m_max?.[0])} / ${formatTemperature(daily.temperature_2m_min?.[0])}`,
      rain: `${rain.toFixed(1)}mm`,
      snow: `${snow.toFixed(1)}cm`,
    });
  } catch (error) {
    setWeatherCardState({
      icon: "cloud-alert",
      temperature: "--°",
      summary: error.message,
      location: weather.location,
      highLow: "-- / --",
      rain: "--",
      snow: "--",
    });
  }
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

function closeMobileSidebar() {
  sidebar.classList.remove("mobile-open");
  overlay.classList.remove("show");
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 760px)").matches;
}

function setSidebarCollapsed(collapsed, persist = true) {
  sidebar.classList.toggle("collapsed", collapsed);
  if (persist) localStorage.setItem(sidebarCollapsedKey, JSON.stringify(collapsed));
  const button = document.querySelector("#sidebarButton");
  if (button) {
    const mobile = isMobileViewport();
    button.innerHTML = icon(mobile ? "menu" : (collapsed ? "panel-left-open" : "panel-left-close"));
    button.setAttribute("aria-label", mobile ? "Open sidebar menu" : (collapsed ? "Expand sidebar" : "Collapse sidebar"));
  }
  refreshIcons();
}

function restoreSidebarState() {
  if (isMobileViewport()) {
    setSidebarCollapsed(false, false);
    return;
  }
  try {
    setSidebarCollapsed(JSON.parse(localStorage.getItem(sidebarCollapsedKey) || "false"));
  } catch {
    setSidebarCollapsed(false);
  }
}

function setActive(route) {
  document.querySelectorAll("[data-route], .subnav button").forEach((item) => {
    const isSettingsButton = item.id === "settingsToggle" && String(route).startsWith("settings");
    item.classList.toggle("active", item.dataset.route === route || isSettingsButton);
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
        ${renderWeatherCard(dashboard)}
        <article class="hero-card meal">
          <span class="future-badge">향후 연동 필요</span>
          <div class="card-topline">
            <div class="card-label">${icon("utensils")} ${escapeHtml(dashboard.menuTitle)}</div>
          </div>
          <div class="meal-grid">
            ${dashboard.menuItems.map((item) => `<div class="mini-box"><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.value)}</span></div>`).join("")}
          </div>
        </article>
        <article class="hero-card rooms">
          <span class="future-badge">향후 연동 필요</span>
          <div class="card-topline">
            <div class="card-label">${icon("layout-grid")} ${escapeHtml(dashboard.roomTitle)}</div>
          </div>
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
            <label for="dashboardWeatherLabel">Weather Label</label>
            <input id="dashboardWeatherLabel" name="weatherLabel" type="text" value="${escapeHtml(getDashboardWeatherConfig(dashboard).label)}">
          </div>
          <div class="form-group wide">
            <label for="dashboardWeatherLocation">Weather Location</label>
            <input id="dashboardWeatherLocation" name="weatherLocation" type="text" placeholder="예: 서울특별시, 잠실역, New York" value="${escapeHtml(getDashboardWeatherConfig(dashboard).location)}">
          </div>
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
  loadDashboardWeather();
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
    void saveDashboardFromForm(form);
  });
}

async function saveDashboardFromForm(form) {
  const data = new FormData(form);
  const previous = getDashboardConfig();
  const previousWeather = getDashboardWeatherConfig(previous);
  const locationInput = String(data.get("weatherLocation") || "").trim() || defaultDashboardConfig.weatherLocation;
  let weatherPlace = {
    location: previousWeather.location,
    latitude: previousWeather.latitude,
    longitude: previousWeather.longitude,
  };

  if (locationInput !== previousWeather.location) {
    try {
      weatherPlace = await geocodeWeatherLocation(locationInput);
    } catch (error) {
      window.alert(error.message);
      return;
    }
  }

  const config = {
    channelLabel: data.get("channelLabel"),
    channelName: data.get("channelName"),
    channelCopy: data.get("channelCopy"),
    weatherLabel: data.get("weatherLabel"),
    weatherLocation: weatherPlace.location,
    weatherLatitude: weatherPlace.latitude,
    weatherLongitude: weatherPlace.longitude,
    menuTitle: previous.menuTitle,
    menuItems: previous.menuItems,
    roomTitle: previous.roomTitle,
    roomItems: previous.roomItems,
  };
  saveDashboardConfig(config);
  renderHome();
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
            <p>이 화면은 포트폴리오 포털의 확장 지점입니다. 다음 단계에서 실제 폼, 계산기, 파일 처리, API 연동으로 교체합니다.</p>
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

function renderSettingsAuth(targetRoute = "settings") {
  const hasPassword = Boolean(getSettingsPasswordRecord()?.hash);
  viewTitle.textContent = hasPassword ? "SETTINGS LOCKED" : "SETTINGS SETUP";
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>${hasPassword ? "Settings Password" : "Initial Settings Password"}</h3>
          <p>${hasPassword ? "Settings 메뉴로 진입하려면 비밀번호를 입력하세요." : "처음 Settings에 진입하기 전에 사용할 비밀번호를 설정하세요."}</p>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <section class="settings-panel security-panel">
          <form class="security-form" id="settingsAuthForm">
            <input type="hidden" name="targetRoute" value="${escapeHtml(targetRoute)}">
            ${hasPassword ? `
              <div class="form-group wide">
                <label for="settingsPasswordInput">Password</label>
                <input id="settingsPasswordInput" name="password" type="password" autocomplete="current-password" required autofocus>
              </div>
            ` : `
              <div class="form-group">
                <label for="settingsNewPasswordInput">New Password</label>
                <input id="settingsNewPasswordInput" name="password" type="password" autocomplete="new-password" minlength="4" required autofocus>
              </div>
              <div class="form-group">
                <label for="settingsConfirmPasswordInput">Confirm Password</label>
                <input id="settingsConfirmPasswordInput" name="confirmPassword" type="password" autocomplete="new-password" minlength="4" required>
              </div>
            `}
            <div class="button-row security-actions">
              <button class="primary-button" type="submit">${icon(hasPassword ? "unlock" : "key-round")} ${hasPassword ? "진입" : "비밀번호 설정"}</button>
            </div>
            <div class="result-list" id="settingsAuthResult"></div>
          </form>
        </section>
      </div>
    </section>
  `;
  document.querySelector("#settingsAuthForm").addEventListener("submit", (event) => {
    event.preventDefault();
    void handleSettingsAuthSubmit(event.currentTarget, hasPassword);
  });
  refreshIcons();
}

async function handleSettingsAuthSubmit(form, hasPassword) {
  const result = document.querySelector("#settingsAuthResult");
  const data = new FormData(form);
  const password = String(data.get("password") || "");
  const targetRoute = String(data.get("targetRoute") || "settings");

  if (!password.trim()) {
    result.innerHTML = resultRow("warn", "비밀번호 필요", "Settings 진입 비밀번호를 입력하세요.");
    return;
  }

  if (!hasPassword) {
    const confirmPassword = String(data.get("confirmPassword") || "");
    if (password.length < 4) {
      result.innerHTML = resultRow("warn", "비밀번호 짧음", "비밀번호는 4자 이상으로 설정하세요.");
      return;
    }
    if (password !== confirmPassword) {
      result.innerHTML = resultRow("fail", "확인 불일치", "새 비밀번호와 확인 입력이 다릅니다.");
      return;
    }
    await saveSettingsPassword(password);
    settingsUnlocked = true;
    openSettingsRoute(targetRoute);
    return;
  }

  if (!(await verifySettingsPassword(password))) {
    result.innerHTML = resultRow("fail", "진입 실패", "비밀번호가 일치하지 않습니다.");
    return;
  }

  settingsUnlocked = true;
  openSettingsRoute(targetRoute);
}

function renderSettingsSecurity() {
  viewTitle.textContent = "SETTINGS";
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>Security Settings</h3>
          <p>Settings 진입 비밀번호를 변경합니다.</p>
        </div>
        <button class="secondary-button" type="button" data-open="settings">Settings</button>
      </div>
      <div class="tool-body">
        <section class="settings-panel security-panel">
          <form class="security-form" id="settingsPasswordForm">
            <div class="form-group wide">
              <label for="currentSettingsPassword">Current Password</label>
              <input id="currentSettingsPassword" name="currentPassword" type="password" autocomplete="current-password" required>
            </div>
            <div class="form-group">
              <label for="newSettingsPassword">New Password</label>
              <input id="newSettingsPassword" name="newPassword" type="password" autocomplete="new-password" minlength="4" required>
            </div>
            <div class="form-group">
              <label for="confirmSettingsPassword">Confirm New Password</label>
              <input id="confirmSettingsPassword" name="confirmPassword" type="password" autocomplete="new-password" minlength="4" required>
            </div>
            <div class="button-row security-actions">
              <button class="primary-button" type="submit">${icon("save")} 변경 저장</button>
              <button class="secondary-button" type="button" id="lockSettingsButton">${icon("lock")} 잠금</button>
            </div>
            <div class="result-list" id="settingsSecurityResult"></div>
          </form>
        </section>
      </div>
    </section>
  `;
  document.querySelector("#settingsPasswordForm").addEventListener("submit", (event) => {
    event.preventDefault();
    void handleSettingsPasswordChange(event.currentTarget);
  });
  document.querySelector("#lockSettingsButton").addEventListener("click", () => {
    settingsUnlocked = false;
    renderSettingsAuth("settings");
  });
  refreshIcons();
}

async function handleSettingsPasswordChange(form) {
  const result = document.querySelector("#settingsSecurityResult");
  const data = new FormData(form);
  const currentPassword = String(data.get("currentPassword") || "");
  const newPassword = String(data.get("newPassword") || "");
  const confirmPassword = String(data.get("confirmPassword") || "");

  if (!(await verifySettingsPassword(currentPassword))) {
    result.innerHTML = resultRow("fail", "변경 실패", "현재 비밀번호가 일치하지 않습니다.");
    return;
  }
  if (newPassword.length < 4) {
    result.innerHTML = resultRow("warn", "비밀번호 짧음", "새 비밀번호는 4자 이상으로 설정하세요.");
    return;
  }
  if (newPassword !== confirmPassword) {
    result.innerHTML = resultRow("fail", "확인 불일치", "새 비밀번호와 확인 입력이 다릅니다.");
    return;
  }

  await saveSettingsPassword(newPassword);
  form.reset();
  result.innerHTML = resultRow("ok", "변경 완료", "다음 Settings 잠금 해제부터 새 비밀번호를 사용합니다.");
}

function openSettingsRoute(route = "settings") {
  if (!settingsUnlocked || !getSettingsPasswordRecord()?.hash) {
    renderSettingsAuth(route);
    return;
  }

  if (route === "settings-menu") {
    renderSettingsMenuSettings();
    return;
  }
  if (route === "settings-integrations") {
    renderIntegrationSettings();
    return;
  }
  if (route === "settings-security") {
    renderSettingsSecurity();
    return;
  }
  renderSettingsHome();
}

function normalizeUrl(value, fallback = "") {
  const raw = String(value || "").trim();
  if (!raw) return fallback;
  return /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
}

function getSystemDirectoryConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(systemDirectoryConfigKey) || "{}");
    return {
      entra: { ...systemDirectoryDefaults.entra, ...(saved.entra || {}) },
      google: { ...systemDirectoryDefaults.google, ...(saved.google || {}) },
      slack: { ...systemDirectoryDefaults.slack, ...(saved.slack || {}) },
    };
  } catch {
    return JSON.parse(JSON.stringify(systemDirectoryDefaults));
  }
}

function getSystemDirectoryRuntime() {
  try {
    const saved = JSON.parse(localStorage.getItem(systemDirectoryRuntimeKey) || "{}");
    return {
      entra: { ...systemDirectoryRuntimeDefaults.entra, ...(saved.entra || {}) },
      google: { ...systemDirectoryRuntimeDefaults.google, ...(saved.google || {}) },
      slack: { ...systemDirectoryRuntimeDefaults.slack, ...(saved.slack || {}) },
    };
  } catch {
    return JSON.parse(JSON.stringify(systemDirectoryRuntimeDefaults));
  }
}

function saveSystemDirectoryConfig(config) {
  localStorage.setItem(systemDirectoryConfigKey, JSON.stringify(config));
}

function saveSystemDirectoryRuntime(runtime) {
  localStorage.setItem(systemDirectoryRuntimeKey, JSON.stringify(runtime));
}

function updateEntraRuntime(nextValues) {
  const runtime = getSystemDirectoryRuntime();
  runtime.entra = {
    ...systemDirectoryRuntimeDefaults.entra,
    ...runtime.entra,
    ...nextValues,
  };
  saveSystemDirectoryRuntime(runtime);
  return runtime.entra;
}

function getEntraRedirectUri() {
  return `${window.location.origin}${window.location.pathname}`;
}

function normalizeEntraScopes(value) {
  const scopes = String(value || "")
    .split(/[\s,]+/)
    .map((scope) => scope.trim())
    .filter(Boolean);
  return scopes.length ? Array.from(new Set(scopes)) : ["User.Read"];
}

function createEntraMsalApp(config = getSystemDirectoryConfig()) {
  const clientId = String(config.entra.clientId || "").trim();
  if (!clientId) {
    throw new Error("Entra 애플리케이션 Client ID를 먼저 입력하세요.");
  }
  if (!window.msal?.PublicClientApplication) {
    throw new Error("MSAL Browser 라이브러리를 불러오지 못했습니다.");
  }

  const tenantId = String(config.entra.tenantId || "organizations").trim() || "organizations";
  return new window.msal.PublicClientApplication({
    auth: {
      clientId,
      authority: `https://login.microsoftonline.com/${encodeURIComponent(tenantId)}`,
      redirectUri: getEntraRedirectUri(),
      navigateToLoginRequestUrl: false,
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: false,
    },
  });
}

async function initializeMsalApp(msalApp) {
  if (typeof msalApp.initialize === "function") {
    await msalApp.initialize();
  }
  return msalApp;
}

function getActiveEntraAccount(msalApp) {
  const active = msalApp.getActiveAccount?.();
  if (active) return active;
  const accounts = msalApp.getAllAccounts();
  if (accounts.length > 0) {
    msalApp.setActiveAccount(accounts[0]);
    return accounts[0];
  }
  return null;
}

function graphHeaders(accessToken, countRequest = false) {
  const headers = { Authorization: `Bearer ${accessToken}` };
  if (countRequest) headers.ConsistencyLevel = "eventual";
  return headers;
}

async function fetchGraphJson(accessToken, path, countRequest = false) {
  const response = await fetch(`https://graph.microsoft.com/v1.0/${path}`, {
    headers: graphHeaders(accessToken, countRequest),
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = payload?.error?.message || `Microsoft Graph 요청 실패 (${response.status})`;
    throw new Error(message);
  }
  return payload;
}

async function fetchGraphCount(accessToken, resource) {
  const payload = await fetchGraphJson(accessToken, `${resource}?$top=1&$count=true`, true);
  return Number.parseInt(payload["@odata.count"], 10) || 0;
}

function renderCurrentRoute() {
  openRoute(currentRoute || "home");
}

async function syncEntraDirectory({ interactive = false, msalApp = null, account = null } = {}) {
  const config = getSystemDirectoryConfig();
  const app = msalApp || await initializeMsalApp(createEntraMsalApp(config));
  const scopes = normalizeEntraScopes(config.entra.scopes);
  const activeAccount = account || getActiveEntraAccount(app);

  if (!activeAccount) {
    if (interactive) {
      sessionStorage.setItem(entraReturnRouteKey, "directory");
      await app.loginRedirect({ scopes });
      return null;
    }
    updateEntraRuntime({ connectionStatus: "not_configured", error: "로그인된 Entra 계정이 없습니다." });
    return null;
  }

  app.setActiveAccount(activeAccount);
  updateEntraRuntime({ connectionStatus: "testing", error: "" });

  let tokenResponse;
  try {
    tokenResponse = await app.acquireTokenSilent({ scopes, account: activeAccount });
  } catch (error) {
    const interactionError = window.msal?.InteractionRequiredAuthError;
    const needsInteraction = interactionError
      ? error instanceof interactionError
      : /interaction_required|login_required|consent_required/i.test(`${error.errorCode || ""} ${error.message || ""}`);
    if (interactive && needsInteraction) {
      sessionStorage.setItem(entraReturnRouteKey, "directory");
      await app.acquireTokenRedirect({ scopes, account: activeAccount });
      return null;
    }
    throw error;
  }

  const accessToken = tokenResponse.accessToken;
  const [profile, accountCount, groupCount] = await Promise.all([
    fetchGraphJson(accessToken, "me?$select=displayName,userPrincipalName"),
    fetchGraphCount(accessToken, "users"),
    fetchGraphCount(accessToken, "groups"),
  ]);

  return updateEntraRuntime({
    connectionStatus: "connected",
    accountCount,
    groupCount,
    syncedAt: new Date().toISOString(),
    accountName: profile.displayName || activeAccount.name || "",
    accountUsername: profile.userPrincipalName || activeAccount.username || "",
    error: "",
  });
}

async function connectEntraDirectory() {
  const config = getSystemDirectoryConfig();
  const app = await initializeMsalApp(createEntraMsalApp(config));
  sessionStorage.setItem(entraReturnRouteKey, "directory");
  await app.loginRedirect({ scopes: normalizeEntraScopes(config.entra.scopes) });
}

async function disconnectEntraDirectory() {
  const config = getSystemDirectoryConfig();
  updateEntraRuntime(systemDirectoryRuntimeDefaults.entra);
  if (!String(config.entra.clientId || "").trim() || !window.msal?.PublicClientApplication) {
    renderCurrentRoute();
    return;
  }

  const app = await initializeMsalApp(createEntraMsalApp(config));
  const account = getActiveEntraAccount(app);
  if (!account) {
    renderCurrentRoute();
    return;
  }
  await app.logoutRedirect({ account, postLogoutRedirectUri: getEntraRedirectUri() });
}

async function handleEntraRedirect() {
  const config = getSystemDirectoryConfig();
  if (!String(config.entra.clientId || "").trim() || !window.msal?.PublicClientApplication) return;

  try {
    const app = await initializeMsalApp(createEntraMsalApp(config));
    const result = await app.handleRedirectPromise();
    if (!result?.account) return;

    app.setActiveAccount(result.account);
    await syncEntraDirectory({ msalApp: app, account: result.account });
    const nextRoute = sessionStorage.getItem(entraReturnRouteKey) || "directory";
    sessionStorage.removeItem(entraReturnRouteKey);
    openRoute(nextRoute);
  } catch (error) {
    updateEntraRuntime({
      connectionStatus: "error",
      error: error.message || "Entra OAuth 처리 중 오류가 발생했습니다.",
    });
    openRoute("directory");
  }
}

function externalLink(href, label, iconName = "external-link") {
  return `
    <a class="directory-link" href="${escapeHtml(href)}" target="_blank" rel="noreferrer">
      ${icon(iconName)}<span>${escapeHtml(label)}</span>
    </a>
  `;
}

function hasIntegratedEvidence(entry) {
  return entry.enabled && entry.status === "connected" && (Number.parseInt(entry.accountCount, 10) || 0) > 0;
}

function integrationStatusMeta(status, enabled, accountCount = "0") {
  if (!enabled) return { label: "없음", className: "none", detail: "미연동" };
  if (status === "connected" && (Number.parseInt(accountCount, 10) || 0) <= 0) {
    return { label: "없음", className: "none", detail: "연동 정보 없음" };
  }
  const statusMap = {
    connected: { label: "정상", className: "ok", detail: "연동됨" },
    testing: { label: "테스트", className: "warn", detail: "검증 중" },
    error: { label: "오류", className: "fail", detail: "확인 필요" },
    not_configured: { label: "없음", className: "none", detail: "연동 설정 없음" },
  };
  return statusMap[status] || statusMap.not_configured;
}

function displayCount(value, enabled) {
  if (!enabled) return "없음";
  const count = Number.parseInt(value, 10);
  return Number.isFinite(count) && count > 0 ? count.toLocaleString("ko-KR") : "없음";
}

function formatSyncTime(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString("ko-KR", { dateStyle: "short", timeStyle: "short" });
}

function buildSystemEntries(config) {
  const runtime = getSystemDirectoryRuntime();
  const workspaceUrl = normalizeUrl(config.slack.workspaceUrl);
  const slackBase = workspaceUrl.replace(/\/+$/, "");
  const googleDomain = String(config.google.domain || "").trim();
  return [
    {
      key: "entra",
      icon: "key-round",
      name: "Microsoft Entra ID",
      label: "Identity / SSO",
      enabled: runtime.entra.connectionStatus !== "not_configured",
      status: runtime.entra.connectionStatus,
      accountCount: runtime.entra.accountCount,
      groupCount: runtime.entra.groupCount,
      details: [
        ["Tenant", config.entra.tenantName],
        ["Last sync", formatSyncTime(runtime.entra.syncedAt)],
      ],
      links: [
        ["Entra 관리자 센터", "https://entra.microsoft.com/", "shield-check"],
        ["Microsoft 계정 정보", "https://myaccount.microsoft.com/", "user-cog"],
        ["My Apps", "https://myapps.microsoft.com/", "panel-top"],
      ],
    },
    {
      key: "google",
      icon: "mail",
      name: "Google Workspace",
      label: "Mail / Drive / Calendar",
      enabled: runtime.google.connectionStatus !== "not_configured",
      status: runtime.google.connectionStatus,
      accountCount: runtime.google.accountCount,
      groupCount: runtime.google.groupCount,
      details: [
        ["Domain", googleDomain],
      ],
      links: [
        ["Google Admin console", "https://admin.google.com/", "settings"],
        ["Google 계정 정보", "https://myaccount.google.com/", "user-cog"],
        ["Gmail 도메인", googleDomain ? `https://mail.google.com/a/${encodeURIComponent(googleDomain)}` : "https://mail.google.com/", "mail"],
      ],
    },
    {
      key: "slack",
      icon: "message-square",
      name: "Slack",
      label: "Chat / Workflow",
      enabled: runtime.slack.connectionStatus !== "not_configured",
      status: runtime.slack.connectionStatus,
      accountCount: runtime.slack.accountCount,
      groupCount: runtime.slack.groupCount,
      details: [
        ["Workspace", config.slack.workspaceName],
        ["Workspace URL", workspaceUrl],
      ],
      links: [
        ["Slack workspace", slackBase || "https://slack.com/signin", "message-square"],
        ["Slack 관리자", slackBase ? `${slackBase}/admin` : "https://slack.com/signin", "settings"],
        ["Slack 계정 정보", slackBase ? `${slackBase}/account` : "https://slack.com/signin", "user-cog"],
      ],
    },
  ];
}

function systemEntryCard(entry) {
  const status = integrationStatusMeta(entry.status, entry.enabled, entry.accountCount);
  return `
    <article class="directory-card ${entry.enabled ? "enabled" : "disabled"} ${status.className}">
      <div class="directory-card-head">
        <div class="directory-title">
          <span class="directory-icon">${icon(entry.icon)}</span>
          <div>
            <h4>${escapeHtml(entry.name)}</h4>
            <small>${escapeHtml(entry.label)}</small>
          </div>
        </div>
        <span class="directory-status ${status.className}">${escapeHtml(status.label)}</span>
      </div>
      <div class="directory-health">
        <div>
          <strong>${escapeHtml(status.detail)}</strong>
          <span>연동 상태</span>
        </div>
        <div>
          <strong>${escapeHtml(displayCount(entry.accountCount, entry.enabled))}</strong>
          <span>계정</span>
        </div>
        <div>
          <strong>${escapeHtml(displayCount(entry.groupCount, entry.enabled))}</strong>
          <span>그룹</span>
        </div>
      </div>
      <div class="directory-meta-strip">
        ${entry.details.map(([label, value]) => `
          <div>
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value || "-")}</strong>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function systemSettingsForm(config) {
  const runtime = getSystemDirectoryRuntime();
  const entraStatus = integrationStatusMeta(
    runtime.entra.connectionStatus,
    runtime.entra.connectionStatus !== "not_configured",
    runtime.entra.accountCount,
  );
  return `
    <form class="directory-form" id="systemDirectoryForm">
      <section class="directory-form-section featured">
        <div class="directory-form-title">
          ${icon("key-round")}
          <div>
            <h4>Microsoft Entra ID</h4>
            <p>SPA OAuth 설정으로 로그인하고 Microsoft Graph에서 사용자/그룹 수를 동기화합니다.</p>
          </div>
        </div>
        <div class="directory-field-grid">
          ${directoryInput("entraTenantName", "Tenant name", config.entra.tenantName)}
          ${directoryInput("entraTenantId", "Tenant ID", config.entra.tenantId)}
          ${directoryInput("entraClientId", "Application client ID", config.entra.clientId)}
          ${directoryInput("entraPrimaryDomain", "Primary domain", config.entra.primaryDomain)}
          ${directoryInput("entraAdminAccount", "Admin account", config.entra.adminAccount)}
          ${directoryInput("entraOwner", "Owner", config.entra.owner)}
          ${directoryInput("entraScopes", "Graph scopes", config.entra.scopes, true)}
          ${directoryInput("entraNote", "Note", config.entra.note, true)}
        </div>
        <div class="directory-oauth-panel">
          <div class="directory-oauth-status">
            <span class="directory-status ${entraStatus.className}">${escapeHtml(entraStatus.label)}</span>
            <strong>${escapeHtml(runtime.entra.accountName || runtime.entra.accountUsername || entraStatus.detail)}</strong>
            <small>Signed in: ${escapeHtml(runtime.entra.accountUsername || "-")}</small>
            <small>Redirect URI: ${escapeHtml(getEntraRedirectUri())}</small>
            ${runtime.entra.error ? `<small class="oauth-error">${escapeHtml(runtime.entra.error)}</small>` : ""}
          </div>
          <div class="button-row directory-oauth-actions">
            <button class="primary-button" type="button" id="connectEntraOAuth">${icon("log-in")} Entra 로그인</button>
            <button class="secondary-button" type="button" id="syncEntraOAuth">${icon("refresh-cw")} Graph 동기화</button>
            <button class="danger-button" type="button" id="disconnectEntraOAuth">${icon("log-out")} 연동 해제</button>
          </div>
        </div>
        <div class="directory-links settings-links">
          ${buildSystemEntries(config)[0].links.map(([label, href, iconName]) => externalLink(href, label, iconName)).join("")}
        </div>
      </section>
      <section class="directory-form-section">
        <div class="directory-form-title">
          ${icon("mail")}
          <div>
            <h4>Google Workspace</h4>
            <p>도입 시 domain과 관리자 계정 기준값을 관리합니다.</p>
          </div>
        </div>
        <div class="directory-field-grid">
          ${directoryInput("googleDomain", "Domain", config.google.domain)}
          ${directoryInput("googleAdminAccount", "Admin account", config.google.adminAccount)}
          ${directoryInput("googleOwner", "Owner", config.google.owner)}
          ${directoryInput("googleNote", "Note", config.google.note, true)}
        </div>
        <div class="directory-links settings-links">
          ${buildSystemEntries(config)[1].links.map(([label, href, iconName]) => externalLink(href, label, iconName)).join("")}
        </div>
      </section>
      <section class="directory-form-section">
        <div class="directory-form-title">
          ${icon("message-square")}
          <div>
            <h4>Slack</h4>
            <p>workspace URL을 기준으로 관리자/계정 링크를 연결합니다.</p>
          </div>
        </div>
        <div class="directory-field-grid">
          ${directoryInput("slackWorkspaceName", "Workspace name", config.slack.workspaceName)}
          ${directoryInput("slackWorkspaceUrl", "Workspace URL", config.slack.workspaceUrl)}
          ${directoryInput("slackAdminAccount", "Admin account", config.slack.adminAccount)}
          ${directoryInput("slackOwner", "Owner", config.slack.owner)}
          ${directoryInput("slackNote", "Note", config.slack.note, true)}
        </div>
        <div class="directory-links settings-links">
          ${buildSystemEntries(config)[2].links.map(([label, href, iconName]) => externalLink(href, label, iconName)).join("")}
        </div>
      </section>
      <div class="button-row directory-form-actions">
        <button class="primary-button" type="submit">${icon("save")} 설정 저장</button>
        <button class="secondary-button" type="button" id="resetSystemDirectory">${icon("rotate-ccw")} 기본값</button>
      </div>
    </form>
  `;
}

function directoryInput(name, label, value, wide = false) {
  return `
    <label class="directory-field ${wide ? "wide" : ""}">
      <span>${escapeHtml(label)}</span>
      <input name="${escapeHtml(name)}" type="text" value="${escapeHtml(value)}">
    </label>
  `;
}

function collectSystemDirectoryForm(form) {
  const data = new FormData(form);
  return {
    entra: {
      tenantName: data.get("entraTenantName"),
      tenantId: data.get("entraTenantId"),
      clientId: data.get("entraClientId"),
      scopes: data.get("entraScopes"),
      primaryDomain: data.get("entraPrimaryDomain"),
      adminAccount: data.get("entraAdminAccount"),
      owner: data.get("entraOwner"),
      note: data.get("entraNote"),
    },
    google: {
      domain: data.get("googleDomain"),
      adminAccount: data.get("googleAdminAccount"),
      owner: data.get("googleOwner"),
      note: data.get("googleNote"),
    },
    slack: {
      workspaceName: data.get("slackWorkspaceName"),
      workspaceUrl: data.get("slackWorkspaceUrl"),
      adminAccount: data.get("slackAdminAccount"),
      owner: data.get("slackOwner"),
      note: data.get("slackNote"),
    },
  };
}

function renderSystemDirectory() {
  viewTitle.textContent = "SYSTEM DIRECTORY";
  content.className = "content custom-scrollbar";
  const config = getSystemDirectoryConfig();
  const entries = buildSystemEntries(config);
  const connectedCount = entries.filter(hasIntegratedEvidence).length;
  const configuredCount = entries.filter((entry) => entry.enabled).length;
  const totalAccounts = entries.reduce((sum, entry) => sum + (entry.enabled ? Number.parseInt(entry.accountCount, 10) || 0 : 0), 0);
  const totalGroups = entries.reduce((sum, entry) => sum + (entry.enabled ? Number.parseInt(entry.groupCount, 10) || 0 : 0), 0);
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>System Directory</h3>
          <p>주요 SaaS와 identity 시스템의 연동 현황을 확인합니다.</p>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <section class="directory-summary">
          <article>
            ${icon("shield-check")}
            <strong>${connectedCount} / ${entries.length}</strong>
            <span>정상 연동</span>
          </article>
          <article>
            ${icon("users")}
            <strong>${totalAccounts ? totalAccounts.toLocaleString("ko-KR") : "없음"}</strong>
            <span>전체 계정</span>
          </article>
          <article>
            ${icon("users-round")}
            <strong>${totalGroups ? totalGroups.toLocaleString("ko-KR") : "없음"}</strong>
            <span>전체 그룹 · 설정 ${configuredCount}개</span>
          </article>
        </section>
        <section class="directory-grid">
          ${entries.map(systemEntryCard).join("")}
        </section>
      </div>
    </section>
  `;
  refreshIcons();
}

function renderIntegrationSettings() {
  viewTitle.textContent = "SETTINGS";
  content.className = "content custom-scrollbar";
  const config = getSystemDirectoryConfig();
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>Integration Settings</h3>
          <p>System Directory 연동에 필요한 기준값과 관리자 링크를 관리합니다. 연동 상태, 계정 수, 그룹 수는 연동 결과로 자동 반영됩니다.</p>
        </div>
        <button class="secondary-button" type="button" data-open="settings">Settings</button>
      </div>
      <div class="tool-body">
        ${systemSettingsForm(config)}
      </div>
    </section>
  `;
  bindSystemDirectory();
  refreshIcons();
}

function bindSystemDirectory() {
  const form = document.querySelector("#systemDirectoryForm");
  const resetButton = document.querySelector("#resetSystemDirectory");
  const connectButton = document.querySelector("#connectEntraOAuth");
  const syncButton = document.querySelector("#syncEntraOAuth");
  const disconnectButton = document.querySelector("#disconnectEntraOAuth");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    saveSystemDirectoryConfig(collectSystemDirectoryForm(form));
    renderIntegrationSettings();
  });

  resetButton.addEventListener("click", () => {
    localStorage.removeItem(systemDirectoryConfigKey);
    localStorage.removeItem(systemDirectoryRuntimeKey);
    renderIntegrationSettings();
  });

  connectButton.addEventListener("click", async () => {
    saveSystemDirectoryConfig(collectSystemDirectoryForm(form));
    connectButton.disabled = true;
    connectButton.innerHTML = `${icon("loader-2")} 로그인 이동 중`;
    refreshIcons();
    try {
      await connectEntraDirectory();
    } catch (error) {
      updateEntraRuntime({ connectionStatus: "error", error: error.message || "Entra 로그인 시작 실패" });
      renderIntegrationSettings();
    }
  });

  syncButton.addEventListener("click", async () => {
    saveSystemDirectoryConfig(collectSystemDirectoryForm(form));
    syncButton.disabled = true;
    syncButton.innerHTML = `${icon("loader-2")} 동기화 중`;
    refreshIcons();
    try {
      await syncEntraDirectory({ interactive: true });
      renderIntegrationSettings();
    } catch (error) {
      updateEntraRuntime({ connectionStatus: "error", error: error.message || "Graph 동기화 실패" });
      renderIntegrationSettings();
    }
  });

  disconnectButton.addEventListener("click", async () => {
    saveSystemDirectoryConfig(collectSystemDirectoryForm(form));
    disconnectButton.disabled = true;
    disconnectButton.innerHTML = `${icon("loader-2")} 해제 중`;
    refreshIcons();
    try {
      await disconnectEntraDirectory();
    } catch (error) {
      updateEntraRuntime({ connectionStatus: "error", error: error.message || "Entra 로그아웃 실패" });
      renderIntegrationSettings();
    }
  });
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

const signatureDefaults = {
  name: "홍길동",
  email: "hong.gildong@company.com",
  department: "IT Operations Team",
};

function buildSignatureHtml({ name, email, department }) {
  const cleanName = escapeHtml(name || signatureDefaults.name);
  const rawEmail = String(email || signatureDefaults.email).trim();
  const cleanEmail = escapeHtml(rawEmail);
  const mailtoEmail = escapeHtml(encodeURI(rawEmail));
  const cleanDepartment = escapeHtml(department || signatureDefaults.department);
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:Arial,'Noto Sans KR',sans-serif;color:#171b22;">
      <tr>
        <td style="padding:0 14px 0 0;vertical-align:top;">
          <div style="width:42px;height:42px;border-radius:8px;background:#1769e0;color:#ffffff;font-size:18px;font-weight:700;line-height:42px;text-align:center;">OH</div>
        </td>
        <td style="padding:0;vertical-align:top;border-left:2px solid #dde3ea;padding-left:14px;">
          <div style="font-size:15px;font-weight:700;line-height:1.35;color:#171b22;">${cleanName}</div>
          <div style="font-size:12px;font-weight:600;line-height:1.5;color:#5b6675;">${cleanDepartment}</div>
          <div style="height:7px;line-height:7px;">&nbsp;</div>
          <div style="font-size:12px;line-height:1.5;color:#5b6675;">
            <a href="mailto:${mailtoEmail}" style="color:#1769e0;text-decoration:none;">${cleanEmail}</a>
          </div>
          <div style="font-size:11px;line-height:1.55;color:#8a96a7;">Ops Hub · IT Operations Portfolio</div>
        </td>
      </tr>
    </table>
  `;
}

function getSignatureValues() {
  return {
    name: document.querySelector("#signatureName")?.value.trim() || signatureDefaults.name,
    email: document.querySelector("#signatureEmail")?.value.trim() || signatureDefaults.email,
    department: document.querySelector("#signatureDepartment")?.value.trim() || signatureDefaults.department,
  };
}

function updateSignaturePreview() {
  const preview = document.querySelector("#signaturePreview");
  const htmlOutput = document.querySelector("#signatureHtmlOutput");
  if (!preview || !htmlOutput) return;
  const signatureHtml = buildSignatureHtml(getSignatureValues());
  preview.innerHTML = signatureHtml;
  htmlOutput.value = signatureHtml.trim();
}

async function copySignatureHtml(button) {
  const signatureHtml = buildSignatureHtml(getSignatureValues()).trim();
  const plainText = `${getSignatureValues().name}\n${getSignatureValues().department}\n${getSignatureValues().email}\nOps Hub · IT Operations Portfolio`;

  try {
    if (window.ClipboardItem) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([signatureHtml], { type: "text/html" }),
          "text/plain": new Blob([plainText], { type: "text/plain" }),
        }),
      ]);
    } else {
      await navigator.clipboard.writeText(plainText);
    }
    button.textContent = "복사됨";
    setTimeout(() => { button.innerHTML = `${icon("copy")} 서명 복사`; refreshIcons(); }, 1200);
  } catch {
    const preview = document.querySelector("#signaturePreview");
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(preview);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    button.textContent = "복사됨";
    setTimeout(() => { button.innerHTML = `${icon("copy")} 서명 복사`; refreshIcons(); }, 1200);
  }
}

function renderSignatureCreator() {
  viewTitle.textContent = "SIGNATURE CREATOR";
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>Signature Creator</h3>
          <p>공식 이메일 서명을 만들고 Gmail 설정에 바로 붙여넣을 수 있도록 복사합니다.</p>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <div class="signature-layout">
          <section class="signature-main">
            <div class="signature-section-head">
              <h4>복사해서 사용할 서명</h4>
              <button class="primary-button" type="button" id="copySignatureButton">${icon("copy")} 서명 복사</button>
            </div>
            <div class="signature-preview" id="signaturePreview" aria-label="이메일 서명 미리보기"></div>
            <textarea class="signature-html-output" id="signatureHtmlOutput" readonly spellcheck="false" aria-label="HTML 서명 코드"></textarea>
          </section>

          <aside class="control-card signature-control">
            <h4>서명 정보 수정</h4>
            <div class="signature-form">
              <label class="form-group" for="signatureName">
                <span>이름</span>
                <input id="signatureName" type="text" value="${escapeHtml(signatureDefaults.name)}">
              </label>
              <label class="form-group" for="signatureEmail">
                <span>이메일 주소</span>
                <input id="signatureEmail" type="text" value="${escapeHtml(signatureDefaults.email)}">
              </label>
              <label class="form-group" for="signatureDepartment">
                <span>부서명</span>
                <input id="signatureDepartment" type="text" value="${escapeHtml(signatureDefaults.department)}">
              </label>
            </div>
            <div class="signature-guide">
              <h4>Gmail 적용</h4>
              <ol>
                <li>위 서명 복사 버튼을 누릅니다.</li>
                <li>Gmail 설정 > 모든 설정 보기 > 서명으로 이동합니다.</li>
                <li>새 서명을 만들고 편집 영역에 붙여넣습니다.</li>
                <li>기본 서명으로 지정한 뒤 변경사항 저장을 누릅니다.</li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
  bindSignatureCreator();
  refreshIcons();
}

function bindSignatureCreator() {
  document.querySelectorAll("#signatureName, #signatureEmail, #signatureDepartment").forEach((input) => {
    input.addEventListener("input", updateSignaturePreview);
  });
  document.querySelector("#copySignatureButton").addEventListener("click", (event) => {
    copySignatureHtml(event.currentTarget);
  });
  updateSignaturePreview();
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

function renderDiffExpert() {
  viewTitle.textContent = "DIFF EXPERT";
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>Diff Expert</h3>
          <p>두 텍스트를 라인, 단어, 문자 단위로 비교하고 변경 요약과 unified diff를 생성합니다.</p>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <section class="diff-layout">
          <div class="diff-workspace">
            <div class="diff-input-grid">
              <div class="text-area-card">
                <div class="diff-input-head">
                  <label for="diffLeftInput">Original</label>
                  <label class="diff-file-button" for="diffLeftFile">${icon("paperclip")} 파일 첨부</label>
                  <input id="diffLeftFile" type="file" accept=".txt,.md,.json,.csv,.log,.xml,.html,.css,.js,.jsx,.ts,.tsx,.yml,.yaml,text/*,application/json">
                </div>
                <textarea class="diff-textarea" id="diffLeftInput" spellcheck="false" placeholder="원본 텍스트를 붙여넣으세요."></textarea>
                <small class="diff-file-name" id="diffLeftFileName">파일을 선택하거나 텍스트를 직접 입력하세요.</small>
              </div>
              <div class="text-area-card">
                <div class="diff-input-head">
                  <label for="diffRightInput">Changed</label>
                  <label class="diff-file-button" for="diffRightFile">${icon("paperclip")} 파일 첨부</label>
                  <input id="diffRightFile" type="file" accept=".txt,.md,.json,.csv,.log,.xml,.html,.css,.js,.jsx,.ts,.tsx,.yml,.yaml,text/*,application/json">
                </div>
                <textarea class="diff-textarea" id="diffRightInput" spellcheck="false" placeholder="변경된 텍스트를 붙여넣으세요."></textarea>
                <small class="diff-file-name" id="diffRightFileName">파일을 선택하거나 텍스트를 직접 입력하세요.</small>
              </div>
            </div>

            <div class="diff-output-grid">
              <section class="diff-table-card">
                <div class="diff-card-head">
                  <strong>Side-by-side</strong>
                  <small id="diffSummaryLine">비교할 텍스트를 입력하세요.</small>
                </div>
                <div class="diff-table custom-scrollbar" id="diffTable"></div>
              </section>
              <section class="diff-unified-card">
                <div class="diff-card-head">
                  <strong>Unified diff</strong>
                  <small>복사하거나 .diff 파일로 저장할 수 있습니다.</small>
                </div>
                <pre class="diff-unified custom-scrollbar" id="diffUnified"></pre>
              </section>
            </div>
          </div>

          <aside class="control-card diff-controls">
            <h4>Compare Options</h4>
            <div class="field-list">
              <label>
                <span>Compare by</span>
                <select id="diffMode">
                  <option value="line">Line</option>
                  <option value="word">Word</option>
                  <option value="char">Character</option>
                </select>
              </label>
            </div>
            <div class="option-list">
              <label class="check-row"><input type="checkbox" id="diffIgnoreWhitespace"><span>공백 차이 무시</span></label>
              <label class="check-row"><input type="checkbox" id="diffIgnoreCase"><span>대소문자 차이 무시</span></label>
            </div>

            <div class="stats-grid">
              <div class="stat-box ok"><strong id="diffSameCount">0</strong><span>Same</span></div>
              <div class="stat-box warn"><strong id="diffChangeCount">0</strong><span>Changed</span></div>
              <div class="stat-box ok"><strong id="diffAddCount">0</strong><span>Added</span></div>
              <div class="stat-box fail"><strong id="diffDeleteCount">0</strong><span>Deleted</span></div>
            </div>

            <div class="button-row">
              <button class="primary-button" type="button" id="runDiffButton">${icon("git-compare")} 비교</button>
              <button class="secondary-button" type="button" id="copyDiffButton">${icon("copy")} 복사</button>
              <button class="secondary-button" type="button" id="downloadDiffButton">${icon("download")} 저장</button>
              <button class="danger-button" type="button" id="clearDiffButton">비우기</button>
            </div>
            <div class="result-list" id="diffResults">
              ${resultRow("warn", "로컬 비교 준비됨", "입력한 텍스트는 서버로 전송되지 않습니다.")}
            </div>
          </aside>
        </section>
      </div>
    </section>
  `;
  bindDiffExpert();
  refreshIcons();
}

function tokenizeDiffText(value, mode) {
  const normalized = value.replace(/\r\n?/g, "\n");
  if (!normalized.length) return [];
  if (mode === "char") return Array.from(normalized);
  if (mode === "word") return normalized.match(/\S+|\s+/g) || [];
  return normalized.split("\n");
}

function normalizeDiffToken(token, mode, options) {
  let next = token;
  if (options.ignoreWhitespace) {
    next = mode === "line" ? next.trim().replace(/\s+/g, " ") : next.replace(/\s+/g, "");
  }
  if (options.ignoreCase) next = next.toLocaleLowerCase("ko");
  return next;
}

function diffTokens(leftTokens, rightTokens, mode, options) {
  const leftKeys = leftTokens.map((token) => normalizeDiffToken(token, mode, options));
  const rightKeys = rightTokens.map((token) => normalizeDiffToken(token, mode, options));
  const rows = Array.from({ length: leftKeys.length + 1 }, () => Array(rightKeys.length + 1).fill(0));

  for (let leftIndex = leftKeys.length - 1; leftIndex >= 0; leftIndex -= 1) {
    for (let rightIndex = rightKeys.length - 1; rightIndex >= 0; rightIndex -= 1) {
      rows[leftIndex][rightIndex] = leftKeys[leftIndex] === rightKeys[rightIndex]
        ? rows[leftIndex + 1][rightIndex + 1] + 1
        : Math.max(rows[leftIndex + 1][rightIndex], rows[leftIndex][rightIndex + 1]);
    }
  }

  const ops = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftTokens.length && rightIndex < rightTokens.length) {
    if (leftKeys[leftIndex] === rightKeys[rightIndex]) {
      ops.push({ type: "equal", left: leftTokens[leftIndex], right: rightTokens[rightIndex] });
      leftIndex += 1;
      rightIndex += 1;
    } else if (rows[leftIndex + 1][rightIndex] >= rows[leftIndex][rightIndex + 1]) {
      ops.push({ type: "delete", left: leftTokens[leftIndex], right: "" });
      leftIndex += 1;
    } else {
      ops.push({ type: "insert", left: "", right: rightTokens[rightIndex] });
      rightIndex += 1;
    }
  }
  while (leftIndex < leftTokens.length) {
    ops.push({ type: "delete", left: leftTokens[leftIndex], right: "" });
    leftIndex += 1;
  }
  while (rightIndex < rightTokens.length) {
    ops.push({ type: "insert", left: "", right: rightTokens[rightIndex] });
    rightIndex += 1;
  }

  return ops;
}

function pairDiffRows(ops) {
  const rows = [];
  for (let index = 0; index < ops.length; index += 1) {
    const op = ops[index];
    if (op.type === "delete" && ops[index + 1]?.type === "insert") {
      rows.push({ type: "change", left: op.left, right: ops[index + 1].right });
      index += 1;
    } else if (op.type === "insert" && ops[index + 1]?.type === "delete") {
      rows.push({ type: "change", left: ops[index + 1].left, right: op.right });
      index += 1;
    } else {
      rows.push(op);
    }
  }
  return rows;
}

function visibleDiffToken(token) {
  return token.replace(/\t/g, "    ");
}

function buildUnifiedDiff(ops, mode) {
  const leftName = mode === "line" ? "original" : `original (${mode})`;
  const rightName = mode === "line" ? "changed" : `changed (${mode})`;
  const lines = [`--- ${leftName}`, `+++ ${rightName}`];
  ops.forEach((op) => {
    if (op.type === "equal") lines.push(` ${op.left}`);
    if (op.type === "delete") lines.push(`-${op.left}`);
    if (op.type === "insert") lines.push(`+${op.right}`);
  });
  return lines.join("\n");
}

function analyzeDiff(left, right, mode, options) {
  let leftTokens = tokenizeDiffText(left, mode);
  let rightTokens = tokenizeDiffText(right, mode);
  if (options.ignoreWhitespace && mode !== "line") {
    leftTokens = leftTokens.filter((token) => !/^\s+$/.test(token));
    rightTokens = rightTokens.filter((token) => !/^\s+$/.test(token));
  }
  if (leftTokens.length * rightTokens.length > 900000) {
    throw new Error("비교 대상이 너무 큽니다. 라인 단위로 바꾸거나 텍스트를 나눠서 비교하세요.");
  }

  const ops = diffTokens(leftTokens, rightTokens, mode, options);
  const pairedRows = pairDiffRows(ops);
  const stats = pairedRows.reduce((sum, row) => {
    sum[row.type] = (sum[row.type] || 0) + 1;
    return sum;
  }, { equal: 0, change: 0, insert: 0, delete: 0 });

  return {
    rows: pairedRows,
    unified: buildUnifiedDiff(ops, mode),
    stats,
    leftCount: leftTokens.length,
    rightCount: rightTokens.length,
  };
}

function renderDiffResult(result) {
  const table = document.querySelector("#diffTable");
  const unified = document.querySelector("#diffUnified");
  const rows = result.rows.length ? result.rows : [{ type: "equal", left: "", right: "" }];

  table.innerHTML = `
    <div class="diff-table-header">
      <span>#</span>
      <strong>Original</strong>
      <strong>Changed</strong>
    </div>
    ${rows.map((row, index) => `
    <article class="diff-row ${row.type}">
      <span class="diff-line">${index + 1}</span>
      <pre>${escapeHtml(visibleDiffToken(row.left))}</pre>
      <pre>${escapeHtml(visibleDiffToken(row.right))}</pre>
    </article>
  `).join("")}`;
  unified.textContent = result.unified;
  document.querySelector("#diffSummaryLine").textContent = `${result.leftCount} -> ${result.rightCount} tokens`;
  document.querySelector("#diffSameCount").textContent = String(result.stats.equal || 0);
  document.querySelector("#diffChangeCount").textContent = String(result.stats.change || 0);
  document.querySelector("#diffAddCount").textContent = String(result.stats.insert || 0);
  document.querySelector("#diffDeleteCount").textContent = String(result.stats.delete || 0);
}

function setDiffResult(status, title, detail, meta = "") {
  const results = document.querySelector("#diffResults");
  if (results) results.innerHTML = resultRow(status, title, detail, meta);
}

async function loadDiffTextFile(file, textarea, fileNameNode, sideLabel) {
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    setDiffResult("warn", "파일이 큼", "2MB 이하의 텍스트 파일만 첨부하세요.", file.name);
    return;
  }

  try {
    textarea.value = await file.text();
    fileNameNode.textContent = `${sideLabel}: ${file.name} (${formatBytes(file.size)})`;
    runDiffExpert();
  } catch (error) {
    setDiffResult("fail", "파일 읽기 실패", error.message, file.name);
  }
}

function runDiffExpert() {
  const left = document.querySelector("#diffLeftInput").value;
  const right = document.querySelector("#diffRightInput").value;
  const mode = document.querySelector("#diffMode").value;
  const options = {
    ignoreWhitespace: document.querySelector("#diffIgnoreWhitespace").checked,
    ignoreCase: document.querySelector("#diffIgnoreCase").checked,
  };

  try {
    const result = analyzeDiff(left, right, mode, options);
    const changed = (result.stats.change || 0) + (result.stats.insert || 0) + (result.stats.delete || 0);
    renderDiffResult(result);
    setDiffResult(
      changed ? "warn" : "ok",
      changed ? "차이 발견" : "차이 없음",
      changed ? `${changed}개 변경 블록을 찾았습니다.` : "두 입력이 선택한 옵션 기준으로 같습니다.",
      `mode: ${mode}`,
    );
  } catch (error) {
    setDiffResult("fail", "비교 실패", error.message);
  }
}

function bindDiffExpert() {
  const left = document.querySelector("#diffLeftInput");
  const right = document.querySelector("#diffRightInput");
  const leftFile = document.querySelector("#diffLeftFile");
  const rightFile = document.querySelector("#diffRightFile");
  const mode = document.querySelector("#diffMode");
  const ignoreWhitespace = document.querySelector("#diffIgnoreWhitespace");
  const ignoreCase = document.querySelector("#diffIgnoreCase");
  const copyButton = document.querySelector("#copyDiffButton");

  left.value = [
    "title: IT asset request",
    "owner: infra team",
    "status: draft",
    "items:",
    "- laptop",
    "- monitor",
  ].join("\n");
  right.value = [
    "title: IT asset request",
    "owner: ops platform",
    "status: ready",
    "items:",
    "- laptop",
    "- monitor",
    "- keyboard",
  ].join("\n");

  runDiffExpert();
  document.querySelector("#runDiffButton").addEventListener("click", runDiffExpert);
  leftFile.addEventListener("change", () => {
    loadDiffTextFile(leftFile.files[0], left, document.querySelector("#diffLeftFileName"), "Original");
  });
  rightFile.addEventListener("change", () => {
    loadDiffTextFile(rightFile.files[0], right, document.querySelector("#diffRightFileName"), "Changed");
  });
  [left, right, mode, ignoreWhitespace, ignoreCase].forEach((node) => {
    node.addEventListener("input", runDiffExpert);
    node.addEventListener("change", runDiffExpert);
  });

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(document.querySelector("#diffUnified").textContent);
      copyButton.textContent = "복사됨";
      setTimeout(() => { copyButton.innerHTML = `${icon("copy")} 복사`; refreshIcons(); }, 1100);
    } catch {
      setDiffResult("fail", "복사 실패", "브라우저 클립보드 권한을 확인하세요.");
    }
  });

  document.querySelector("#downloadDiffButton").addEventListener("click", () => {
    downloadTextFile("diff-expert.diff", document.querySelector("#diffUnified").textContent, "text/x-diff");
  });

  document.querySelector("#clearDiffButton").addEventListener("click", () => {
    left.value = "";
    right.value = "";
    leftFile.value = "";
    rightFile.value = "";
    document.querySelector("#diffLeftFileName").textContent = "파일을 선택하거나 텍스트를 직접 입력하세요.";
    document.querySelector("#diffRightFileName").textContent = "파일을 선택하거나 텍스트를 직접 입력하세요.";
    runDiffExpert();
    left.focus();
  });
}

const imageStudioState = {
  file: null,
  image: null,
  sourceUrl: "",
  sourceWidth: 0,
  sourceHeight: 0,
  outputBlob: null,
  outputName: "image-studio.png",
};

function renderImageStudio() {
  viewTitle.textContent = "IMAGE STUDIO";
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>Image Studio</h3>
          <p>이미지를 업로드해 리사이즈, 비율 크롭, 포맷 변환, 품질 조절을 브라우저 안에서 처리합니다.</p>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <section class="image-studio-layout">
          <div class="image-workbench">
            <label class="image-drop-zone" for="imageStudioFile" id="imageDropZone">
              ${icon("upload-cloud")}
              <strong>이미지 선택</strong>
              <span>PNG, JPEG, WebP, GIF 파일을 이 영역에 놓거나 클릭하세요.</span>
              <input id="imageStudioFile" type="file" accept="image/*">
            </label>

            <div class="image-preview-card">
              <div class="image-preview-head">
                <div>
                  <strong id="imagePreviewTitle">Preview</strong>
                  <small id="imagePreviewMeta">선택된 이미지가 없습니다.</small>
                </div>
                <button class="secondary-button compact-button" type="button" id="resetImageStudio">${icon("rotate-ccw")} 초기화</button>
              </div>
              <div class="image-preview-stage" id="imagePreviewStage">
                <div class="empty-state">${icon("image")}<span>이미지를 선택하면 변환 미리보기가 표시됩니다.</span></div>
              </div>
            </div>
          </div>

          <aside class="control-card image-control-card">
            <h4>Transform</h4>
            <div class="field-list">
              <label>
                <span>Preset</span>
                <select id="imagePreset">
                  <option value="custom">Custom</option>
                  <option value="profile">Profile 512 x 512</option>
                  <option value="slack">Slack Emoji 128 x 128</option>
                  <option value="hd">HD 1280 x 720</option>
                  <option value="fullhd">Full HD 1920 x 1080</option>
                </select>
              </label>
              <div class="dimension-grid">
                <label>
                  <span>Width</span>
                  <input id="imageWidth" type="number" min="1" step="1" placeholder="width">
                </label>
                <label>
                  <span>Height</span>
                  <input id="imageHeight" type="number" min="1" step="1" placeholder="height">
                </label>
              </div>
              <label class="check-row image-check-row">
                <input id="lockImageRatio" type="checkbox" checked>
                <span>원본 비율 유지</span>
              </label>
              <label>
                <span>Fit mode</span>
                <select id="imageFitMode">
                  <option value="contain">Contain</option>
                  <option value="cover">Cover / Crop</option>
                  <option value="stretch">Stretch</option>
                </select>
              </label>
              <label>
                <span>Format</span>
                <select id="imageFormat">
                  <option value="image/png">PNG</option>
                  <option value="image/jpeg">JPEG</option>
                  <option value="image/webp">WebP</option>
                </select>
              </label>
              <label>
                <span>Quality <small id="imageQualityValue">92%</small></span>
                <input id="imageQuality" type="range" min="10" max="100" value="92">
              </label>
              <label>
                <span>Background</span>
                <input id="imageBackground" type="color" value="#ffffff">
              </label>
              <label>
                <span>Output name</span>
                <input id="imageOutputName" type="text" value="image-studio.png">
              </label>
            </div>

            <div class="stats-grid image-stats-grid">
              <div class="stat-box"><strong id="imageSourceSize">--</strong><span>Source</span></div>
              <div class="stat-box"><strong id="imageOutputSize">--</strong><span>Output</span></div>
              <div class="stat-box"><strong id="imageOutputPixels">--</strong><span>Pixels</span></div>
              <div class="stat-box"><strong id="imageSavedBytes">--</strong><span>Saved</span></div>
            </div>

            <div class="button-row">
              <button class="primary-button" type="button" id="convertImageButton">${icon("wand-sparkles")} 변환</button>
              <button class="secondary-button" type="button" id="downloadImageButton" disabled>${icon("download")} 다운로드</button>
            </div>
            <p class="helper-copy">GIF는 첫 프레임을 정지 이미지로 변환합니다. PNG 투명도는 PNG/WebP에서 유지되고 JPEG는 배경색으로 합성됩니다.</p>
          </aside>
        </section>

        <div class="result-list" id="imageResults">
          ${resultRow("warn", "로컬 처리 준비됨", "이미지 파일은 서버로 업로드되지 않고 현재 브라우저 세션 안에서만 처리됩니다.")}
        </div>
      </div>
    </section>
  `;
  bindImageStudio();
  refreshIcons();
}

function imageExtensionForMime(type) {
  if (type === "image/jpeg") return "jpg";
  if (type === "image/webp") return "webp";
  return "png";
}

function normalizeImageName(name, type) {
  const ext = imageExtensionForMime(type);
  const base = (name || "image-studio").trim().replace(/\.(png|jpe?g|webp)$/i, "") || "image-studio";
  return `${base}.${ext}`;
}

function setImageResult(status, title, detail, meta = "") {
  const results = document.querySelector("#imageResults");
  if (results) results.innerHTML = resultRow(status, title, detail, meta);
}

function setImageStats(blob = null) {
  const state = imageStudioState;
  setText("#imageSourceSize", state.file ? formatBytes(state.file.size) : "--");
  setText("#imageOutputSize", blob ? formatBytes(blob.size) : "--");
  setText("#imageOutputPixels", state.image ? `${state.sourceWidth} x ${state.sourceHeight}` : "--");
  if (state.file && blob) {
    const saved = state.file.size - blob.size;
    setText("#imageSavedBytes", saved >= 0 ? formatBytes(saved) : `+${formatBytes(Math.abs(saved))}`);
  } else {
    setText("#imageSavedBytes", "--");
  }
}

function applyImagePreset(value) {
  const widthInput = document.querySelector("#imageWidth");
  const heightInput = document.querySelector("#imageHeight");
  const presets = {
    profile: [512, 512, "cover"],
    slack: [128, 128, "cover"],
    hd: [1280, 720, "contain"],
    fullhd: [1920, 1080, "contain"],
  };
  if (!presets[value]) return;
  const [width, height, fit] = presets[value];
  widthInput.value = width;
  heightInput.value = height;
  document.querySelector("#imageFitMode").value = fit;
}

function updateImageOutputName() {
  const input = document.querySelector("#imageOutputName");
  const format = document.querySelector("#imageFormat").value;
  input.value = normalizeImageName(input.value || imageStudioState.file?.name, format);
}

function updateImageQualityLabel() {
  const quality = document.querySelector("#imageQuality")?.value || "92";
  setText("#imageQualityValue", `${quality}%`);
}

function updateImageDimensionFromRatio(changed) {
  if (!document.querySelector("#lockImageRatio")?.checked || !imageStudioState.sourceWidth || !imageStudioState.sourceHeight) return;
  const widthInput = document.querySelector("#imageWidth");
  const heightInput = document.querySelector("#imageHeight");
  const ratio = imageStudioState.sourceWidth / imageStudioState.sourceHeight;
  if (changed === "width") {
    const width = Number(widthInput.value);
    if (width > 0) heightInput.value = String(Math.max(1, Math.round(width / ratio)));
  } else {
    const height = Number(heightInput.value);
    if (height > 0) widthInput.value = String(Math.max(1, Math.round(height * ratio)));
  }
}

function drawImageToCanvas() {
  const state = imageStudioState;
  if (!state.image) throw new Error("변환할 이미지를 먼저 선택하세요.");

  const width = Math.max(1, Math.round(Number(document.querySelector("#imageWidth").value) || state.sourceWidth));
  const height = Math.max(1, Math.round(Number(document.querySelector("#imageHeight").value) || state.sourceHeight));
  const format = document.querySelector("#imageFormat").value;
  const fit = document.querySelector("#imageFitMode").value;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;

  if (format === "image/jpeg") {
    context.fillStyle = document.querySelector("#imageBackground").value || "#ffffff";
    context.fillRect(0, 0, width, height);
  } else {
    context.clearRect(0, 0, width, height);
  }

  let sx = 0;
  let sy = 0;
  let sw = state.sourceWidth;
  let sh = state.sourceHeight;
  let dx = 0;
  let dy = 0;
  let dw = width;
  let dh = height;
  const sourceRatio = state.sourceWidth / state.sourceHeight;
  const outputRatio = width / height;

  if (fit === "contain") {
    if (sourceRatio > outputRatio) {
      dw = width;
      dh = width / sourceRatio;
      dy = (height - dh) / 2;
    } else {
      dh = height;
      dw = height * sourceRatio;
      dx = (width - dw) / 2;
    }
  } else if (fit === "cover") {
    if (sourceRatio > outputRatio) {
      sw = state.sourceHeight * outputRatio;
      sx = (state.sourceWidth - sw) / 2;
    } else {
      sh = state.sourceWidth / outputRatio;
      sy = (state.sourceHeight - sh) / 2;
    }
  }

  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(state.image, sx, sy, sw, sh, dx, dy, dw, dh);
  return { canvas, width, height, format };
}

function canvasToBlob(canvas, format, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("이미지 변환에 실패했습니다."));
    }, format, quality);
  });
}

async function convertImageStudio() {
  const button = document.querySelector("#convertImageButton");
  button.disabled = true;
  try {
    const { canvas, width, height, format } = drawImageToCanvas();
    const quality = Number(document.querySelector("#imageQuality").value) / 100;
    const blob = await canvasToBlob(canvas, format, quality);
    const url = URL.createObjectURL(blob);
    const name = normalizeImageName(document.querySelector("#imageOutputName").value || imageStudioState.file?.name, format);

    if (imageStudioState.sourceUrl) URL.revokeObjectURL(imageStudioState.sourceUrl);
    imageStudioState.sourceUrl = url;
    imageStudioState.outputBlob = blob;
    imageStudioState.outputName = name;
    document.querySelector("#imageOutputName").value = name;
    document.querySelector("#imagePreviewStage").innerHTML = `<img src="${url}" alt="Converted image preview">`;
    document.querySelector("#downloadImageButton").disabled = false;
    setImageStats(blob);
    setText("#imageOutputPixels", `${width} x ${height}`);
    setImageResult("ok", "변환 완료", `${width} x ${height} ${format.replace("image/", "").toUpperCase()} 이미지가 준비되었습니다.`, name);
  } catch (error) {
    setImageResult("fail", "변환 실패", error.message);
  } finally {
    button.disabled = false;
  }
}

async function loadImageStudioFile(file) {
  if (!file || !file.type.startsWith("image/")) {
    setImageResult("warn", "이미지 없음", "PNG, JPEG, WebP, GIF 이미지 파일을 선택하세요.");
    return;
  }

  const image = new Image();
  const url = URL.createObjectURL(file);
  image.onload = async () => {
    if (imageStudioState.sourceUrl) URL.revokeObjectURL(imageStudioState.sourceUrl);
    imageStudioState.file = file;
    imageStudioState.image = image;
    imageStudioState.sourceUrl = url;
    imageStudioState.sourceWidth = image.naturalWidth;
    imageStudioState.sourceHeight = image.naturalHeight;
    imageStudioState.outputBlob = null;
    imageStudioState.outputName = normalizeImageName(file.name, document.querySelector("#imageFormat").value);

    document.querySelector("#imageWidth").value = String(image.naturalWidth);
    document.querySelector("#imageHeight").value = String(image.naturalHeight);
    document.querySelector("#imageOutputName").value = imageStudioState.outputName;
    document.querySelector("#imagePreviewTitle").textContent = file.name;
    document.querySelector("#imagePreviewMeta").textContent = `${image.naturalWidth} x ${image.naturalHeight} · ${formatBytes(file.size)} · ${file.type || "image"}`;
    document.querySelector("#imagePreviewStage").innerHTML = `<img src="${url}" alt="Original image preview">`;
    document.querySelector("#downloadImageButton").disabled = true;
    setImageStats();
    setImageResult("ok", "이미지 로드 완료", "옵션을 조정한 뒤 변환을 실행하세요.", file.name);
    await convertImageStudio();
  };
  image.onerror = () => {
    URL.revokeObjectURL(url);
    setImageResult("fail", "로드 실패", "브라우저가 이 이미지 파일을 읽지 못했습니다.");
  };
  image.src = url;
}

function resetImageStudio() {
  if (imageStudioState.sourceUrl) URL.revokeObjectURL(imageStudioState.sourceUrl);
  Object.assign(imageStudioState, {
    file: null,
    image: null,
    sourceUrl: "",
    sourceWidth: 0,
    sourceHeight: 0,
    outputBlob: null,
    outputName: "image-studio.png",
  });
  document.querySelector("#imageStudioFile").value = "";
  document.querySelector("#imageWidth").value = "";
  document.querySelector("#imageHeight").value = "";
  document.querySelector("#imageOutputName").value = "image-studio.png";
  document.querySelector("#imagePreviewTitle").textContent = "Preview";
  document.querySelector("#imagePreviewMeta").textContent = "선택된 이미지가 없습니다.";
  document.querySelector("#imagePreviewStage").innerHTML = `<div class="empty-state">${icon("image")}<span>이미지를 선택하면 변환 미리보기가 표시됩니다.</span></div>`;
  document.querySelector("#downloadImageButton").disabled = true;
  setImageStats();
  setImageResult("warn", "로컬 처리 준비됨", "이미지 파일은 서버로 업로드되지 않고 현재 브라우저 세션 안에서만 처리됩니다.");
  refreshIcons();
}

function bindImageStudio() {
  const fileInput = document.querySelector("#imageStudioFile");
  const dropZone = document.querySelector("#imageDropZone");
  const convertButton = document.querySelector("#convertImageButton");
  const downloadButton = document.querySelector("#downloadImageButton");

  updateImageQualityLabel();
  fileInput.addEventListener("change", () => loadImageStudioFile(fileInput.files[0]));

  ["dragenter", "dragover"].forEach((eventName) => {
    dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropZone.classList.add("dragging");
    });
  });
  ["dragleave", "drop"].forEach((eventName) => {
    dropZone.addEventListener(eventName, (event) => {
      event.preventDefault();
      dropZone.classList.remove("dragging");
    });
  });
  dropZone.addEventListener("drop", (event) => loadImageStudioFile(event.dataTransfer.files[0]));

  document.querySelector("#imagePreset").addEventListener("change", (event) => {
    applyImagePreset(event.target.value);
    if (imageStudioState.image) convertImageStudio();
  });
  document.querySelector("#imageWidth").addEventListener("input", () => updateImageDimensionFromRatio("width"));
  document.querySelector("#imageHeight").addEventListener("input", () => updateImageDimensionFromRatio("height"));
  document.querySelector("#imageFormat").addEventListener("change", updateImageOutputName);
  document.querySelector("#imageQuality").addEventListener("input", updateImageQualityLabel);
  document.querySelectorAll("#imageFitMode, #imageBackground, #lockImageRatio").forEach((input) => {
    input.addEventListener("change", () => {
      if (imageStudioState.image) convertImageStudio();
    });
  });

  convertButton.addEventListener("click", convertImageStudio);
  downloadButton.addEventListener("click", () => {
    if (!imageStudioState.outputBlob) return setImageResult("warn", "다운로드 없음", "먼저 변환을 실행하세요.");
    downloadBlob(imageStudioState.outputName, imageStudioState.outputBlob);
    setImageResult("ok", "다운로드 시작", "변환된 이미지 파일을 다운로드합니다.", imageStudioState.outputName);
  });
  document.querySelector("#resetImageStudio").addEventListener("click", resetImageStudio);
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
  viewTitle.textContent = "NETWORK CHECK";
  content.className = "content custom-scrollbar";
  content.innerHTML = `
    <section class="tool-panel view">
      <div class="tool-panel-header">
        <div>
          <h3>Network Check</h3>
        </div>
        <button class="secondary-button" type="button" data-open="home">홈으로</button>
      </div>
      <div class="tool-body">
        <div class="tab-bar" role="tablist" aria-label="Network Check tools">
          <button class="tab-button active" type="button" data-net-tab="speed">Network Check</button>
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
              <svg id="downloadChart" role="img" aria-label="Download Mbps trend"></svg>
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
  chartResizeObserver: null,
  downloadSamples: [],
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

  speedState.downloadSamples = [...samples];

  const chartBox = chart.getBoundingClientRect();
  const parentWidth = chart.parentElement?.clientWidth || 0;
  const width = Math.max(320, Math.round(chartBox.width || parentWidth || 760));
  const height = 240;
  chart.setAttribute("width", String(width));
  chart.setAttribute("height", String(height));
  chart.setAttribute("viewBox", `0 0 ${width} ${height}`);
  chart.setAttribute("preserveAspectRatio", "none");

  const left = 56;
  const right = 24;
  const top = 24;
  const bottom = 34;
  const peak = samples.length ? Math.max(...samples) : 0;
  const latest = samples.length ? samples[samples.length - 1] : 0;
  const avg = samples.length ? samples.reduce((sum, value) => sum + value, 0) / samples.length : 0;
  peakNode.textContent = `Peak ${formatMbps(peak)} Mbps`;
  const niceMax = peak > 0 ? Math.max(10, Math.ceil((peak * 1.16) / 10) * 10) : 100;
  const ticks = [1, 0.75, 0.5, 0.25, 0];

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
  const latestX = xFor(samples.length - 1);
  const latestY = yFor(latest);
  const avgY = yFor(avg);
  const peakIndex = samples.indexOf(peak);
  const markerValues = [
    { className: "chart-dot major", x: xFor(peakIndex), y: yFor(peak), r: 4 },
    { className: "chart-dot", x: latestX, y: latestY, r: 3.4 },
  ];
  const dots = markerValues
    .filter((marker, index, list) => index === 0 || marker.x !== list[0].x || marker.y !== list[0].y)
    .map((marker) => `<circle class="${marker.className}" cx="${marker.x.toFixed(1)}" cy="${marker.y.toFixed(1)}" r="${marker.r}"></circle>`)
    .join("");
  const sampleLabels = `
    <text class="chart-x-label" x="${left}" y="${height - 10}" text-anchor="start">1</text>
    <text class="chart-x-label" x="${width - right}" y="${height - 10}" text-anchor="end">${samples.length}</text>
  `;

  chart.innerHTML = `
    ${grid}
    ${axis}
    <polygon class="chart-area" points="${areaPoints}"></polygon>
    <line class="chart-average" x1="${left}" y1="${avgY.toFixed(1)}" x2="${width - right}" y2="${avgY.toFixed(1)}"></line>
    <text class="chart-average-label" x="${width - right}" y="${Math.max(top + 12, avgY - 6).toFixed(1)}" text-anchor="end">avg ${formatMbps(avg)}</text>
    <polyline class="chart-line" points="${points}"></polyline>
    ${dots}
    <text class="chart-current-label" x="${Math.max(left + 58, latestX - 8).toFixed(1)}" y="${Math.max(top + 14, latestY - 10).toFixed(1)}" text-anchor="end">${formatMbps(latest)} Mbps</text>
    ${sampleLabels}
  `;
}

function observeDownloadChartResize() {
  const chart = document.querySelector("#downloadChart");
  if (!chart || !("ResizeObserver" in window)) return;

  if (speedState.chartResizeObserver) {
    speedState.chartResizeObserver.disconnect();
  }

  speedState.chartResizeObserver = new ResizeObserver(() => {
    renderDownloadChart(speedState.downloadSamples);
  });
  speedState.chartResizeObserver.observe(chart);
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
      "Network Check speed report",
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
      report: "Network Check report\n- 입력 없음",
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
      "Network Check report",
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
      "echo NETWORK CHECK DIAGNOSTIC > \"%OUT%\"",
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
    "echo 'NETWORK CHECK DIAGNOSTIC' > \"$OUT\"",
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
  observeDownloadChartResize();
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
        "Network Check speed report",
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
  currentRoute = route || "home";
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

  if (route === "directory") {
    renderSystemDirectory();
    return;
  }

  if (route === "signature") {
    renderSignatureCreator();
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

  if (route === "imagestudio") {
    renderImageStudio();
    return;
  }

  if (route === "diff") {
    renderDiffExpert();
    return;
  }

  if (route === "pdf") {
    renderSecurePdf();
    return;
  }

  if (route === "settings") {
    openSettingsRoute("settings");
    return;
  }

  if (route === "settings-menu") {
    openSettingsRoute("settings-menu");
    return;
  }

  if (route === "settings-integrations") {
    openSettingsRoute("settings-integrations");
    return;
  }

  if (route === "settings-security") {
    openSettingsRoute("settings-security");
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

document.querySelector("#sidebarButton").addEventListener("click", () => {
  if (isMobileViewport()) {
    sidebar.classList.toggle("mobile-open");
    overlay.classList.toggle("show", sidebar.classList.contains("mobile-open"));
    return;
  }
  setSidebarCollapsed(!sidebar.classList.contains("collapsed"));
});

overlay.addEventListener("click", closeMobileSidebar);
window.addEventListener("resize", restoreSidebarState);
document.querySelector("#refreshButton").addEventListener("click", () => openRoute(document.querySelector("[data-route].active")?.dataset.route || "home"));
document.querySelector("#versionButton").addEventListener("click", () => openRoute("textcleaner"));

restoreSidebarState();
renderSidebarTools();
renderPolicyMenu();
renderHome();
refreshIcons();
handleEntraRedirect();
