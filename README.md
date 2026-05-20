# Ops Portfolio Hub

IT 운영 업무를 한 화면에서 시연하고 실행하기 위한 정적 웹 포털입니다. 대시보드, 공식 운영 메뉴, 개인/업무 유틸리티, 설정 화면을 Vanilla JavaScript 기반 SPA 형태로 제공합니다.

현재 사이트는 포트폴리오용으로 동작 가능한 도구를 우선 배치하고, 설정 화면에서 메뉴와 대시보드 값을 관리할 수 있는 구조입니다.

데모 사이트: https://ops-site.flgram.com/

## 주요 기능

- 좌측 사이드바 기반 포털 네비게이션과 접기/펼치기
- 날씨, 공지 채널, 점심 메뉴, 회의실 현황을 보여주는 대시보드
- 하단 `Ops Portfolio` 톱니바퀴 버튼으로 진입하는 Settings
- Settings에서 메뉴 표시 여부, 대시보드 값, 연동 정보를 관리하는 로컬 설정
- 최초 Settings 진입 비밀번호 생성, 이후 비밀번호 검증과 변경
- Slack, Google Workspace, Microsoft Entra ID 연동 정보 관리 화면
- Lucide 아이콘과 반응형 레이아웃
- Docker + Nginx 기반 정적 사이트 배포
- GitHub Actions 기반 서버 자동 배포

## 구현 완료 도구

| 도구 | 구분 | 설명 |
| --- | --- | --- |
| Policy Navigator | Official | 사내 IT 정책 항목과 요청 흐름을 탐색하는 메뉴 |
| System Directory | Official | Slack, Google Workspace, Microsoft Entra ID 연동 현황 관리 |
| Signature Creator | Official | 공식 이메일 서명 생성 |
| Text Cleaner | Labs | 공백, 줄바꿈, 특수문자 정리 |
| Image Studio | Labs | 이미지 리사이즈, 크롭, 포맷 변환 |
| Secure PDF | Labs | PDF 보관 암호화, 복호화, 병합, 페이지 추출 |
| Network Check | Labs | 다운로드, 업로드, 레이턴시 측정 |
| Diff Expert | Labs | 텍스트 차이 비교와 변경 요약 |

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- LocalStorage
- Lucide icons via CDN
- Google Fonts via CDN
- pdf-lib via CDN
- Nginx container for production
- Docker Compose on Linux server
- GitHub Actions for CI/CD

빌드 도구 없이 운영합니다. 저장 후 브라우저 새로고침으로 확인하고, JavaScript 문법은 `node --check app.js`로 검증합니다.

## Project Structure

```text
.
├── index.html                   # 앱 shell과 기본 DOM 구조
├── styles.css                   # 전체 레이아웃, 반응형, 도구 UI 스타일
├── app.js                       # 라우팅, 메뉴 데이터, 화면 렌더링, 도구 로직
├── Dockerfile                   # Nginx 정적 사이트 이미지
├── nginx.conf                   # 정적 파일 serving 설정
├── compose.prod.yml             # 서버 배포용 Docker Compose
├── .github/workflows/deploy.yml # GitHub Actions 배포 파이프라인
├── AGENTS.md                    # Codex/gstack 작업 지침
└── skills-lock.json             # gstack skill lock 파일
```

## App Model

`index.html`은 고정 shell을 제공합니다. 실제 화면 전환과 도구 렌더링은 `app.js`가 담당합니다.

`app.js`의 주요 역할:

- official/lab/policy 메뉴 데이터 정의
- sidebar route 처리
- 홈 대시보드 렌더링
- Settings 화면과 로컬 설정 저장
- 도구별 화면 렌더링
- 브라우저 단독 실행 도구 로직 처리

서버가 필요 없는 도구는 브라우저에서 바로 동작합니다. 설정값과 런타임 상태는 LocalStorage에 저장됩니다.

## Settings

Settings는 사이드바 하단 `Ops Portfolio` 영역의 톱니바퀴 버튼에서 엽니다.

첫 진입 시에는 `Initial Settings Password` 화면에서 로컬 비밀번호를 설정합니다. 이후 Settings 계열 화면에 진입할 때는 같은 브라우저 세션에서 비밀번호 검증을 통과해야 합니다.

Settings에서 제공하는 관리 화면:

- `Show Menu`: 사이드바에 표시할 메뉴를 선택합니다.
- `Integration Settings`: Slack, Google Workspace, Microsoft Entra ID 연결 표시값과 런타임 상태를 관리합니다.
- `Security Settings`: Settings 진입 비밀번호를 변경하거나 다시 잠급니다.

비밀번호는 서버로 전송하지 않으며, 현재 정적 앱 구조에 맞춰 브라우저 LocalStorage에 salt와 hash 형태로 저장합니다. 브라우저/프로필을 바꾸면 별도로 다시 설정해야 합니다.

## Local Development

로컬 미리보기:

```bash
python3 -m http.server 4173
```

브라우저에서 접속:

```text
http://127.0.0.1:4173/
```

JavaScript 문법 확인:

```bash
node --check app.js
```

Docker 이미지 확인:

```bash
docker compose -f compose.prod.yml up -d --build
```

## Development Workflow

기능 작업은 브랜치에서 진행합니다.

```bash
git checkout main
git pull
git checkout -b feature/tool-name
```

작업 후 기본 확인:

```bash
node --check app.js
git status
```

커밋 prefix:

- `feat:` 새 기능
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` CSS/UI 조정
- `refactor:` 동작 변화 없는 구조 개선
- `chore:` 설정, 배포, 기타 작업

## Adding A New Tool

새 도구를 추가할 때는 보통 다음 영역을 수정합니다.

1. `app.js`의 `officialTools` 또는 `labTools`에 메뉴 항목 추가
2. `readyToolKeys`에 실제 노출할 route key 추가
3. 도구 전용 `renderXxx()` 함수 작성
4. `openRoute()`에 route 분기 추가
5. 필요한 스타일을 `styles.css`에 추가
6. `node --check app.js` 실행

구현 기준:

- 첫 화면에 긴 사용 설명을 넣지 않습니다.
- 포트폴리오에서 바로 시연 가능한 입력/출력 상태를 둡니다.
- 모바일에서 텍스트와 버튼이 깨지지 않아야 합니다.
- 서버가 필요 없는 기능은 브라우저 단독 구현을 우선합니다.

## Deployment

배포 흐름:

```text
GitHub private repo
-> GitHub Actions
-> SSH upload to Linux server
-> docker compose build/up
-> Nginx container serves static files
```

Production compose:

```bash
docker compose -f compose.prod.yml up -d --build --remove-orphans
```

컨테이너 이름:

```text
ops-site
```

기본 포트:

```text
8080
```

접속 형태:

```text
https://ops-site.flgram.com/
```

## GitHub Actions Configuration

Workflow:

```text
.github/workflows/deploy.yml
```

필요한 GitHub Actions secrets:

| Secret | Description |
| --- | --- |
| `SSH_HOST` | Linux 서버 IP 또는 호스트명 |
| `SSH_USER` | 배포용 SSH 사용자 |
| `SSH_PORT` | SSH 포트 |
| `SSH_PRIVATE_KEY` | 서버 접속용 private key 전체 내용 |
| `DEPLOY_PATH` | 서버 내 배포 경로, 예: `/opt/ops-site` |

필요한 GitHub Actions variable:

| Variable | Description |
| --- | --- |
| `APP_PORT` | 컨테이너를 외부에 노출할 포트, 기본 `8080` |

서버에서 직접 확인:

```bash
docker ps --filter name=ops-site
curl -I http://127.0.0.1:8080/
```

## Server Notes

서버에는 Docker와 Docker Compose plugin이 필요합니다.

Ubuntu 기준:

```bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose-plugin
sudo usermod -aG docker $USER
mkdir -p /opt/ops-site
```

`usermod` 이후에는 재로그인이 필요합니다.
