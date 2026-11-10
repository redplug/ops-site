# Ops Hub

IT 운영 업무를 한 화면에서 실행하는 웹 포털입니다. 대시보드, 공식 IT 메뉴, 개발자/유틸리티 도구, 설정 화면을 Vanilla JavaScript SPA로 제공하고, Settings 값은 Node.js 서버의 데이터 볼륨에 저장합니다. 빌드 도구와 npm 의존성 없이 `node`만으로 실행합니다.

데모: https://ops-site.flgram.com/

## Quick Start

Docker와 Docker Compose가 설치된 환경에서 실행합니다.

```bash
git clone https://github.com/redplug/ops-site.git
cd ops-site
cp .env.example .env        # ADMIN_PASSWORD 값을 8자 이상으로 설정
docker compose up -d
```

브라우저에서 `http://localhost:8080`을 엽니다. 포트를 바꾸려면 `.env`의 `APP_PORT`를 수정합니다.

Docker 없이 실행하려면 Node.js 20 이상에서:

```bash
PORT=4173 DATA_DIR=.local-data node server.js
```

`http://127.0.0.1:4173`을 엽니다. 테스트는 `node --test`로 실행합니다.

환경 변수:

| 변수 | 기본값 | 설명 |
| --- | --- | --- |
| `APP_PORT` | `8080` | Docker에서 호스트에 여는 포트 (`.env`) |
| `ADMIN_PASSWORD` | 없음 | 설정 시 서버 기동 때 관리자 비밀번호로 저장. 8자 이상 |
| `COOKIE_SECURE` | 없음 | `true`면 세션 쿠키에 항상 `Secure` 부착 |
| `PORT` | `8080` | 서버가 listen하는 포트 (Docker 이미지는 기본값 8080으로 설정) |
| `DATA_DIR` | `./data` | Settings 저장 파일(`settings.json`) 위치. Docker에서는 `/app/data` (볼륨) |

## 내 조직용으로 바꾸기

대부분의 조직 고유 내용은 `config/site.config.js` 한 파일에 있습니다. 수정 후 브라우저를 새로고침하면 반영됩니다. 이 파일을 지워도 앱은 기본값으로 실행됩니다.

| 섹션 | 바꿀 수 있는 내용 |
| --- | --- |
| `brand` | 사이드바 제목(`name`), 설명(`tagline`), 로고 아이콘(`mark`), 하단 문구, 버전 표시, 이메일 서명 로고 글자와 문구 |
| `dashboard` | 채널 카드 문구, 날씨 지역 이름과 좌표, 공지 제목/본문(`notice`), 퀵링크 목록(`quickLinks`) |
| `signature` | 이메일 서명 생성기의 기본 이름, 이메일, 부서 |
| `directory` | 시스템 디렉터리(Microsoft Entra ID, Google Workspace, Slack)의 기본 연동 정보 |
| `onboarding` | 신규 입사자 셋업 단계(`phases`)와 권한 매트릭스(`accessRows`) |
| `policies` | Policy Navigator 아래 정책 목록. 각 항목의 `title`, `desc`, `icon`, `summary`, `steps`, `links`, `contact` |

`policies`의 `key`는 바꾸지 마세요. 딥링크 주소(`#policy-…`)로 쓰입니다. 현재 정책 본문은 샘플입니다.

## 보안 주의

- **`ADMIN_PASSWORD`를 설정하세요.** 설정하지 않으면 처음 Settings에 접속한 사람이 관리자 비밀번호를 정합니다. 설정하면 서버 기동 시 미리 저장되어 선점할 수 없습니다. 최소 8자입니다.
- **HTTPS 리버스 프록시 뒤에서 운영하는 것을 권장합니다.** 프록시가 `X-Forwarded-Proto: https` 헤더를 보내면 세션 쿠키에 `Secure`가 자동으로 붙습니다. 프록시 없이 http 내부망에서 쓸 때는 `COOKIE_SECURE`를 비워 두세요. `COOKIE_SECURE=true`로 두면 항상 `Secure`가 붙어 http에서는 브라우저가 쿠키를 저장하지 않습니다.
- 비밀번호 검증 실패가 IP 기준 5회 누적되면 60초 동안 로그인 시도를 막습니다. 프록시 뒤에서는 모든 사용자가 같은 IP로 보이므로 한 사람의 실패가 다른 사람을 막을 수 있습니다.
- 로그인 세션은 서버 메모리에 있습니다(유효 12시간). 서버나 컨테이너를 재시작하면 모든 사용자가 다시 로그인해야 합니다.
- 비밀번호 원문은 저장하지 않습니다(PBKDF2-SHA-256 해시). Entra client secret은 서버 저장소에만 있고 브라우저나 API 응답으로 내보내지 않습니다.
- 도구(JWT 디코더, Hash, PDF, 이미지 등)는 입력값을 브라우저 안에서만 처리합니다. 네트워크 도구(Network Check)는 아래 외부 서비스로 요청을 보냅니다.

## 외부 통신 목록

| 대상 | 언제 | 보내는 것 |
| --- | --- | --- |
| `api.open-meteo.com`, `geocoding-api.open-meteo.com` | 대시보드 날씨 카드 | 설정된 좌표/지역 검색어 |
| `photon.komoot.io` | 날씨 지역 검색 | 입력한 지역 이름 |
| `speed.cloudflare.com` | Network Check 실행 시 | 속도 측정 요청 |
| `login.microsoftonline.com`, `graph.microsoft.com` | Settings > Integration에서 Entra 동기화 실행 시 (서버가 호출) | Client Credentials 토큰 요청, 사용자/그룹 수 조회 |

Lucide 아이콘, pdf-lib, 폰트는 외부 CDN이 아니라 `vendor/`와 시스템 폰트를 사용하므로 폐쇄망에서도 동작합니다.

## 도구 목록

Official 메뉴와 Labs 도구는 `app.js`의 `officialTools`, `labTools` 배열에서 정의합니다.

| 도구 | 구분 | key | 설명 |
| --- | --- | --- | --- |
| Policy Navigator | Official | `policy` | 정책 목록과 항목별 절차 |
| Signature Creator | Official | `signature` | 공식 이메일 서명 생성 |
| System Directory | Official | `directory` | Slack, Google Workspace, Entra ID 연동 현황과 바로가기 |
| IT Onboarding Guide | Official | `onboarding` | 신규 입사자 IT 환경 셋업 체크리스트 |
| Text Cleaner | Labs | `textcleaner` | 공백, 줄바꿈, 특수문자 정리 |
| Network Check | Labs | `netcheck` | 다운로드, 업로드, 레이턴시 측정 |
| Image Studio | Labs | `imagestudio` | 리사이즈, 크롭, 포맷 변환 |
| Secure PDF | Labs | `pdf` | PDF 암호화, 복호화, 병합, 페이지 추출 |
| Diff Expert | Labs | `diff` | 텍스트 차이 비교 |
| JSON Formatter | Labs | `json` | JSON 검증, 정렬, 압축 |
| Base64 Codec | Labs | `base64` | Base64와 URL-safe Base64 인코딩/디코딩 |
| UUID Generator | Labs | `uuid` | UUID v4 단일/일괄 생성 |
| URL Codec | Labs | `urlcodec` | URL, 쿼리 문자열 인코딩/디코딩 |
| JWT Decoder | Labs | `jwt` | JWT header/payload 디코딩 (서명 검증 안 함) |
| Hash Generator | Labs | `hash` | SHA 해시 생성과 비교 |
| Regex Tester | Labs | `regex` | 정규식 실시간 테스트 |
| Timestamp Converter | Labs | `timestamp` | Unix timestamp와 날짜/시간 변환 |
| Cron Parser | Labs | `cron` | 5-field cron 해석과 다음 실행 시각 |
| Password Generator | Labs | `password` | 암호학적 랜덤 비밀번호 생성 |
| Color Converter | Labs | `color` | HEX, RGB, HSL 변환 |
| Subnet Calculator | Labs | `subnet` | IPv4 CIDR 계산 |

## 새 도구 추가법

1. `app.js`의 `officialTools` 또는 `labTools` 배열에 항목을 추가합니다. `key`, `cat`, `name`, `desc`, `status`, `icon`(Lucide 아이콘 이름)을 적습니다. 사이드바에 자동으로 나타나고 Settings > Show Menu에서 켜고 끌 수 있습니다.
2. 같은 파일에 `renderXxx()` 함수를 작성합니다. 기존 도구(예: `renderSubnetCalculator`)의 구조를 따르면 됩니다.
3. `app.js` 하단의 `routes` 맵에 `key: renderXxx`를 등록합니다.
4. 필요한 스타일은 `styles.css`에 추가합니다.
5. `node --check app.js`와 `node --test`로 확인합니다.

## 배포

`.github/workflows/deploy.yml`은 `main` 브랜치 push마다 SSH로 서버에 올리고 `docker compose -f compose.yml up -d --build`를 실행합니다. 이 워크플로는 `redplug/ops-site` 저장소에서만 실행되도록 `if: github.repository == 'redplug/ops-site'` 조건이 걸려 있습니다. 포크해서 쓸 때는 다음을 설정하세요.

- 워크플로의 `if:` 줄을 자신의 저장소 이름으로 바꾸거나 제거합니다.
- GitHub Actions에 `production` environment를 만들고 아래 secret과 variable을 등록합니다.

| 이름 | 종류 | 설명 |
| --- | --- | --- |
| `SSH_HOST` | secret | 서버 IP 또는 호스트명 |
| `SSH_USER` | secret | 배포용 SSH 사용자 |
| `SSH_PORT` | secret | SSH 포트 (기본 22) |
| `SSH_PRIVATE_KEY` | secret | 서버 접속용 private key 전체 내용 |
| `DEPLOY_PATH` | secret | 서버 배포 경로 (기본 `/opt/ops-site`) |
| `APP_PORT` | variable | 외부 노출 포트 (기본 8080) |

서버에는 Docker와 Docker Compose plugin이 필요합니다. 컨테이너 이름은 `ops-site`, 데이터는 `ops-site-data` 볼륨에 저장됩니다. 서버에서 직접 확인하려면:

```bash
docker ps --filter name=ops-site
curl -I http://127.0.0.1:8080/
```

`main`에 push하면 `ci.yml`이 문법 검사와 `node --test`를 실행합니다.

## License

MIT License. 자세한 내용은 [LICENSE](LICENSE)를 참고하세요.

## Microsoft Entra ID Client Credentials

System Directory의 Entra ID 연동은 서버의 Client Credentials 흐름을 사용합니다. Azure Portal의 App registration에서 client secret을 만들고 Microsoft Graph Application permissions에 관리자 동의를 부여해야 합니다.

필수 설정:

- Application (client) ID
- Tenant ID
- Client secret
- Graph scopes: 기본값 `https://graph.microsoft.com/.default`

`Directory.Read.All`, `Application.Read.All`, `Device.Read.All` Application permissions는 사용자/그룹/애플리케이션/디바이스 수 조회에 필요하며 tenant 관리자 동의가 필요합니다. access token은 서버 메모리에서만 사용하고 저장하지 않으며, 동기화 결과만 서버 저장소에 기록합니다.
