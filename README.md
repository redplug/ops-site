# Ops Portfolio Hub

포트폴리오용 IT Ops 포털 클론 프로젝트입니다. 원본 사이트의 정보 구조를 참고해 좌측 사이드바, 홈 대시보드, 도구 실행 화면을 정적 웹앱으로 재구현했습니다.

현재 목표는 모든 기능을 한 번에 복제하는 것이 아니라, 먼저 확장 가능한 포털 shell을 만들고 이후 도구를 하나씩 실제 기능으로 교체하는 것입니다.

## Current Status

구현 완료:

- Ops 포털 레이아웃
- 좌측 사이드바 네비게이션
- Official Support / Unofficial Tools 메뉴 구조
- Policy Navigator 하위 메뉴
- 홈 대시보드 카드
- 도구별 placeholder 화면
- 실제 동작하는 `Text Cleaner` 도구
- Docker + Nginx 정적 배포
- GitHub Actions 기반 서버 자동 배포

아직 구현 전:

- 각 official tool의 실제 업무 로직
- File Renamer, Diff Expert, Secure PDF 등 Labs 도구
- Traefik 도메인 라우팅
- 서버 API 또는 데이터 저장소 연동

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Lucide icons via CDN
- Google Fonts via CDN
- Nginx container for production
- Docker Compose on Linux server
- GitHub Actions for CI/CD

프레임워크를 쓰지 않은 이유는 첫 버전의 목적이 포털 구조와 기능 슬롯을 빠르게 검증하는 것이기 때문입니다. 기능이 많아지고 상태 관리가 복잡해지면 React/Vite로 이전할 수 있습니다.

## Project Structure

```text
.
├── index.html                  # 앱 shell과 기본 DOM 구조
├── styles.css                  # 전체 레이아웃, 반응형, 도구 UI 스타일
├── app.js                      # 라우팅, 메뉴 데이터, 화면 렌더링, Text Cleaner 로직
├── Dockerfile                  # Nginx 정적 사이트 이미지
├── nginx.conf                  # 정적 파일 serving 설정
├── compose.prod.yml            # 서버 배포용 Docker Compose
├── .github/workflows/deploy.yml # GitHub Actions 배포 파이프라인
├── .dockerignore
├── .gitignore
└── AGENTS.md                   # Codex/gstack 작업 지침
```

## Implementation Model

현재 앱은 SPA처럼 동작하지만 빌드 도구는 없습니다.

`index.html`은 고정 shell만 담당합니다.

`app.js`가 다음을 담당합니다.

- 메뉴 데이터 정의
- sidebar route 처리
- 홈 화면 렌더링
- placeholder tool 화면 렌더링
- Text Cleaner 화면과 동작 구현

새 도구를 추가할 때는 보통 `app.js`에서 다음 영역을 수정합니다.

- `officialTools`
- `labTools`
- `policies`
- `openRoute()`
- 새 도구 전용 `renderXxx()` 함수

간단한 도구는 `renderPlaceholder()`를 실제 구현 함수로 바꾸는 방식으로 진행합니다.

## Local Development

로컬 미리보기:

```bash
python3 -m http.server 4173
```

브라우저에서 엽니다.

```text
http://127.0.0.1:4173/
```

JavaScript 문법 확인:

```bash
node --check app.js
```

현재는 빌드 단계가 없기 때문에 저장 후 브라우저 새로고침으로 확인합니다.

## Pair Development Workflow

둘이 같이 개발할 때는 `main`에 직접 작업하지 않고 브랜치를 나눕니다.

```bash
git checkout main
git pull
git checkout -b feature/text-cleaner-v2
```

작업 후:

```bash
node --check app.js
git status
git add .
git commit -m "feat: improve text cleaner"
git push -u origin feature/text-cleaner-v2
```

GitHub에서 PR을 만들고 리뷰 후 `main`에 merge합니다.

`main`에 push 또는 merge되면 GitHub Actions가 자동으로 서버에 배포합니다.

## Commit Convention

권장 prefix:

- `feat:` 새 기능
- `fix:` 버그 수정
- `docs:` 문서 수정
- `style:` CSS/UI 조정
- `refactor:` 동작 변화 없는 구조 개선
- `chore:` 설정, 배포, 기타 작업

예시:

```bash
git commit -m "feat: add file renamer placeholder"
git commit -m "fix: keep sidebar usable on mobile"
git commit -m "docs: document deployment workflow"
```

## Deployment

배포 방식:

```text
GitHub private repo
→ GitHub Actions
→ SSH upload to Linux server
→ docker compose build/up
→ Nginx container serves static files
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

현재는 Traefik 연결 전이므로 직접 접속은 다음 형태입니다.

```text
http://SERVER_IP:8080/
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

배포 성공 여부는 GitHub Actions run에서 확인합니다.

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

Traefik 연결은 추후 진행합니다. 그때는 `compose.prod.yml`에 labels를 추가하거나, 기존 Traefik 네트워크에 `ops-site` 서비스를 붙이는 방식으로 진행하면 됩니다.

## Adding A New Tool

예: `File Renamer`를 실제 기능으로 구현하는 경우

1. `app.js`의 `labTools`에서 `rename` 항목 확인
2. `renderFileRenamer()` 함수 추가
3. `openRoute()`에 `route === "rename"` 분기 추가
4. 필요한 스타일을 `styles.css`에 추가
5. `node --check app.js` 실행
6. PR 생성

기능 구현 기준:

- 첫 화면에서 사용법 설명을 길게 쓰지 않습니다.
- 포트폴리오에서 바로 시연 가능한 입력/출력 예시를 둡니다.
- 모바일에서 텍스트와 버튼이 깨지지 않아야 합니다.
- 서버가 필요 없는 기능은 우선 브라우저 단독 구현으로 갑니다.
- 파일 처리, API 호출, 인증이 필요한 기능은 별도 설계 후 붙입니다.

## Current Repository

Private repository:

```text
https://github.com/redplug/ops-site
```

Default branch:

```text
main
```
