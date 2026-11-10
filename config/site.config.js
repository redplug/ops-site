// Ops Hub 조직 설정 파일
// 이 파일만 고치면 사이트 이름, 대시보드 문구, 이메일 서명, 디렉터리 기본값, 온보딩, 정책 목록이 바뀝니다.
// 수정 후 브라우저를 새로고침하세요. 이 파일이 없어도 앱은 기본값으로 실행됩니다.
// 주의: 작은따옴표/큰따옴표, 쉼표(,) 짝을 깨뜨리면 설정이 적용되지 않습니다.

window.OPS_CONFIG = {
  // 브랜드: 사이드바 제목, 하단 문구, 브라우저 탭 제목, 이메일 서명 표기
  brand: {
    name: "Ops Hub", // 사이드바 제목과 브라우저 탭 제목
    tagline: "IT Operations Portal", // 사이드바 제목 아래 짧은 설명
    mark: "terminal", // 사이드바 로고 아이콘 이름 (lucide 아이콘 이름, https://lucide.dev/icons)
    footerTitle: "Ops Hub", // 사이드바 하단 제목
    footerSub: "IT operations portal", // 사이드바 하단 설명
    version: "v1.0", // 우측 상단 버전 표시
    signatureMark: "OH", // 이메일 서명 왼쪽 로고 글자 (2글자 권장)
    signatureFooter: "Ops Hub · IT Operations", // 이메일 서명 맨 아래 문구
  },

  // 대시보드: 첫 화면 카드에 보이는 기본 문구와 날씨 위치
  dashboard: {
    channelLabel: "IT Comm.", // 채널 카드 라벨
    channelName: "#ops-hub", // 채널 이름
    channelCopy: "IT 운영 업무와 개인 유틸리티를 한곳에서 실행하는 포털입니다.", // 채널 카드 설명
    weatherLabel: "Weather", // 날씨 카드 라벨
    weatherLocation: "서울특별시", // 날씨 표시 지역 이름
    weatherLatitude: 37.5665, // 날씨 위치 위도
    weatherLongitude: 126.978, // 날씨 위치 경도
    // 공지: 대시보드 공지 카드. 줄바꿈은 그대로 표시됩니다. 비워두면 카드 내용이 비어 보입니다.
    notice: {
      title: "공지사항", // 공지 카드 제목
      body: "여기에 조직 공지를 적으세요. 예: 이번 주 금요일 17시 이후 사내 VPN 점검이 있습니다.",
    },
    // 퀵링크: 대시보드 바로가기 버튼. label(표시 이름)과 url을 적습니다. 샘플 주소이니 실제 주소로 바꾸세요.
    quickLinks: [
      { label: "Helpdesk", url: "https://example.com/helpdesk" },
      { label: "SSO 포털", url: "https://example.com/sso" },
      { label: "VPN 사용 안내", url: "https://example.com/vpn-guide" },
      { label: "IT 정책 문서", url: "https://example.com/it-policy" },
    ],
  },

  // 이메일 서명 기본값 (서명 생성기 입력칸의 초기값)
  signature: {
    name: "홍길동", // 이름
    email: "hong.gildong@company.com", // 이메일
    department: "IT Operations Team", // 부서
  },

  // 시스템 디렉터리: Microsoft Entra ID, Google Workspace, Slack 연동 기본 정보
  // 실제 값은 설정 화면에서도 바꿀 수 있습니다. 여기는 처음 보이는 기본값입니다.
  directory: {
    entra: {
      tenantName: "테스트 Entra ID", // 테넌트 표시 이름
      tenantId: "", // 테넌트 ID (GUID)
      clientId: "", // 앱 등록 클라이언트 ID
      clientSecretConfigured: false, // 클라이언트 시크릿 설정 여부 (시크릿 값은 여기에 넣지 마세요)
      scopes: "https://graph.microsoft.com/.default", // Graph 권한 범위
      primaryDomain: "contoso.onmicrosoft.com", // 기본 도메인
      adminAccount: "admin@contoso.onmicrosoft.com", // 관리자 계정
      owner: "IT Operations", // 담당 조직
      note: "현재 테스트 우선 연동 대상입니다. 실제 tenant ID와 관리자 계정으로 교체하세요.", // 메모
    },
    google: {
      domain: "company.com", // Google Workspace 도메인
      adminAccount: "admin@company.com", // 관리자 계정
      owner: "IT Operations", // 담당 조직
      note: "Google Workspace 도입 시 도메인과 관리자 계정을 입력하세요.", // 메모
    },
    slack: {
      workspaceName: "company", // 워크스페이스 이름
      workspaceUrl: "https://company.slack.com", // 워크스페이스 주소
      adminAccount: "owner@company.com", // 관리자 계정
      owner: "IT Operations", // 담당 조직
      note: "Slack workspace URL 확정 후 관리자 링크가 활성화됩니다.", // 메모
    },
  },

  // 온보딩 가이드: 신규 입사자 IT 셋업 체크리스트
  onboarding: {
    intro: "일반적인 IT 회사 신입 입사자의 첫 주 환경 셋업 체크리스트 샘플입니다.", // 화면 상단 설명
    // phases: 단계별 일정. title(단계명), owner(담당), goal(목표), items(체크 항목 목록)
    phases: [
      {
        title: "입사 전 D-5 ~ D-1",
        owner: "IT Ops / HR",
        goal: "계정, 장비, 접근 권한을 첫 출근 전에 준비합니다.",
        items: [
          "HR 입사자 정보 확인: 영문명, 개인 연락처, 부서, 직무, 매니저, 입사일",
          "회사 이메일과 Google Workspace 또는 Microsoft 365 기본 계정 생성",
          "Slack, Notion, GitHub, Jira, Confluence 초대 발송",
          "역할별 기본 그룹 지정: All Hands, 부서 채널, 보안 공지, 개발 조직",
          "노트북, 충전기, 모니터, 허브, 보안키 또는 OTP 수령 준비",
          "MDM 등록 대상 장비 확인 및 초기화 이미지 적용",
        ],
      },
      {
        title: "Day 1 오전",
        owner: "IT Ops",
        goal: "업무 시작에 필요한 인증과 장비 사용을 완료합니다.",
        items: [
          "신분 확인 후 노트북과 주변기기 지급, 자산 번호 안내",
          "초기 비밀번호 변경, MFA 등록, 백업 인증 수단 설정",
          "MDM 프로필 설치 상태 확인: 디스크 암호화, 화면 잠금, 패치 정책",
          "Wi-Fi, VPN, 프린터, 회의실 디스플레이 연결 테스트",
          "Slack 프로필, 캘린더 타임존, 이메일 서명 기본값 설정",
          "보안 교육 링크와 피싱 신고 채널 안내",
        ],
      },
      {
        title: "Day 1 오후",
        owner: "Manager / Buddy",
        goal: "팀 업무 도구와 개발 환경의 최소 접근을 검증합니다.",
        items: [
          "팀 Slack 채널, Notion 팀스페이스, Jira 프로젝트 접근 확인",
          "GitHub SSO 인증, 조직 초대 수락, 2FA 활성화 확인",
          "개발자라면 SSH key 또는 GPG key 등록 정책 안내",
          "사내 패키지 저장소, Docker registry, VPN 접근 테스트",
          "권한 누락 항목은 Helpdesk 티켓으로 요청 경로 통일",
          "첫 주 온보딩 일정과 필수 미팅 캘린더 확인",
        ],
      },
      {
        title: "첫 주",
        owner: "Employee / IT Ops",
        goal: "보안 기준과 협업 흐름을 안정화합니다.",
        items: [
          "보안 교육, 개인정보 처리, 오픈소스 라이선스 가이드 수료",
          "비밀번호 관리자 사용법과 secret 저장 금지 원칙 확인",
          "장비 분실/파손, 계정 잠김, 권한 요청 프로세스 숙지",
          "부서별 필수 SaaS 접근 권한 최종 점검",
          "개발/운영 권한은 최소 권한 원칙으로 별도 승인 진행",
          "온보딩 체크리스트 완료 여부를 매니저와 리뷰",
        ],
      },
    ],
    // accessRows: 권한 매트릭스. [영역, 대상 서비스 설명, 담당]
    accessRows: [
      ["기본 계정", "회사 이메일, SSO, MFA, 비밀번호 관리자", "IT Ops"],
      ["커뮤니케이션", "Slack, Google Calendar 또는 Outlook, Zoom/Meet", "IT Ops"],
      ["문서/업무", "Notion, Confluence, Jira, Google Drive", "Manager"],
      ["개발", "GitHub, IDE 라이선스, package registry, staging 접근", "Tech Lead"],
      ["보안", "MDM, EDR, VPN, 보안 교육, 피싱 신고 채널", "Security"],
      ["시설", "출입 카드, 회의실 예약, 프린터, 좌석 안내", "Office"],
    ],
  },

  // 샘플입니다. 조직 기준으로 교체하세요.
  // 정책 목록: 사이드바 Policy Navigator 아래 항목입니다.
  // key는 바꾸지 마세요 (링크 주소로 쓰입니다). title, desc, icon만 조직에 맞게 바꾸세요.
  policies: [
    { key: "policy-helpdesk", icon: "life-buoy", title: "IT 통합 지원", desc: "문의 유형을 고르고 요청서를 정리하는 정책 허브입니다.", summary: "IT 관련 문의 유형을 고르고 요청 내용을 정리해 담당 팀에 전달합니다.", steps: ["문의 유형(계정, 장비, 권한, 기타)을 고릅니다.", "요청 내용과 필요한 날짜를 적습니다.", "담당 팀이 접수 후 티켓 번호를 안내합니다.", "처리 결과는 티켓에서 확인합니다."], links: [], contact: "IT Helpdesk · helpdesk@company.com" },
    { key: "policy-google-drive", icon: "folder-lock", title: "구글 드라이브 생성/권한", desc: "공유 드라이브 생성과 권한 변경 요청 기준을 안내합니다.", summary: "공유 드라이브 생성과 권한 변경은 승인 후 IT 팀이 처리합니다.", steps: ["요청 부서장의 승인을 받습니다.", "드라이브 이름, 목적, 관리자, 필요한 권한을 정리합니다.", "IT 팀이 생성하거나 권한을 변경합니다.", "변경 내역을 요청자에게 공유합니다."], links: [], contact: "IT Helpdesk · helpdesk@company.com" },
    { key: "policy-software", icon: "palette", title: "소프트웨어 라이선스", desc: "상용 소프트웨어 신청, 갱신, 회수 흐름을 정리합니다.", summary: "상용 소프트웨어는 라이선스 수와 용도를 확인한 뒤 신청합니다.", steps: ["필요한 소프트웨어와 사용 목적을 확인합니다.", "기존 보유 라이선스가 있는지 확인합니다.", "구매 요청서를 제출하고 승인을 받습니다.", "설치 후 라이선스 등록 내역을 남기고, 사용 중단 시 회수합니다."], links: [], contact: "IT Helpdesk · helpdesk@company.com" },
    { key: "policy-notion", icon: "notebook-tabs", title: "Notion 신규 공간", desc: "워크스페이스와 팀스페이스 생성 요청을 표준화합니다.", summary: "신규 워크스페이스와 팀스페이스는 명명 규칙에 맞춰 생성합니다.", steps: ["공간 이름, 목적, 책임자를 정합니다.", "기존 공간과 중복되지 않는지 확인합니다.", "IT 팀에 생성을 요청합니다.", "생성 후 멤버 권한을 설정합니다."], links: [], contact: "IT Helpdesk · helpdesk@company.com" },
    { key: "policy-erp", icon: "settings", title: "ERP 계정 생성/권한", desc: "계정 생성, 부서 이동, 승인권자 변경을 추적합니다.", summary: "ERP 계정은 입사, 부서 이동, 퇴사 시점에 맞춰 생성하거나 변경합니다.", steps: ["인사 정보(부서, 직무, 승인권자)를 확인합니다.", "ERP 계정 신청서를 작성하고 승인권자에게 결재를 받습니다.", "IT 팀이 계정을 생성하거나 권한을 변경합니다.", "계정 정보는 본인에게만 전달합니다."], links: [], contact: "IT Helpdesk · helpdesk@company.com" },
    { key: "policy-common-mail", icon: "mail", title: "그룹메일 생성/관리", desc: "그룹메일 생성과 멤버 변경 요청 초안을 만듭니다.", summary: "그룹메일은 목적별로 만들고, 멤버 변경은 관리자가 요청합니다.", steps: ["그룹메일 주소와 용도를 정합니다.", "관리자(소유자)를 한 명 이상 지정합니다.", "IT 팀에 생성 또는 멤버 변경을 요청합니다.", "사용하지 않는 그룹메일은 정기적으로 정리합니다."], links: [], contact: "IT Helpdesk · helpdesk@company.com" },
    { key: "policy-equipment", icon: "mouse-pointer-2", title: "IT 장비 대여", desc: "대여 가능 장비와 반납 체크리스트를 제공합니다.", summary: "대여 장비는 예약 후 수령하고, 반납 시 상태를 확인합니다.", steps: ["대여 가능 장비 목록에서 장비를 고릅니다.", "사용 기간과 목적을 적어 신청합니다.", "수령 시 장비 상태와 구성품을 확인합니다.", "반납 기한 내에 장비와 충전기를 함께 반납합니다."], links: [], contact: "IT Helpdesk · helpdesk@company.com" },
    { key: "policy-resignation", icon: "log-out", title: "자산 반납", desc: "퇴사와 휴직 시 장비, 계정, 권한 회수를 점검합니다.", summary: "퇴사와 휴직 시 장비, 계정, 권한을 순서대로 회수합니다.", steps: ["인사팀에서 퇴사 또는 휴직 일정을 공유받습니다.", "지급 장비와 주변기기를 회수합니다.", "계정과 접근 권한을 비활성화하거나 조정합니다.", "회수 완료 내역을 기록하고 매니저에게 알립니다."], links: [], contact: "IT Helpdesk · helpdesk@company.com" },
    { key: "policy-loss-damage", icon: "hammer", title: "자산 손망실", desc: "파손, 분실, 도난 보고와 후속 처리 기준을 안내합니다.", summary: "파손, 분실, 도난이 생기면 즉시 보고하고 기준에 따라 처리합니다.", steps: ["발생 일시, 장소, 상황을 기록합니다.", "IT 팀에 즉시 보고합니다.", "보안 사고가 의심되면 계정 비밀번호를 바꿉니다.", "처리 기준에 따라 수리, 교체, 변상을 결정합니다."], links: [], contact: "IT Helpdesk · helpdesk@company.com" },
    { key: "policy-device-lifecycle", icon: "laptop", title: "장비 초기화/교체", desc: "초기화, 재배정, 교체 요청의 운영 절차를 정리합니다.", summary: "장비 초기화와 교체는 자산 기록을 갱신한 뒤 진행합니다.", steps: ["교체 또는 재배정 사유를 정리합니다.", "데이터를 백업하고 장비를 초기화합니다.", "자산 대장의 사용자와 상태를 갱신합니다.", "폐기 장비는 데이터 삭제 확인서를 남깁니다."], links: [], contact: "IT Helpdesk · helpdesk@company.com" },
    { key: "policy-ssl-vpn", icon: "globe-2", title: "해외 SSL VPN 신청", desc: "해외 출장자 VPN 신청과 보안 안내를 제공합니다.", summary: "해외 출장자는 출국 전에 VPN 사용을 신청합니다.", steps: ["출장 국가와 기간을 확인합니다.", "VPN 신청서를 출국 3영업일 전까지 제출합니다.", "승인 후 VPN 클라이언트를 설치하고 접속을 테스트합니다.", "귀국 후에는 사용을 중단하고 권한 종료를 요청합니다."], links: [], contact: "IT Helpdesk · helpdesk@company.com" },
  ],
};
