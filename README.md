# Ops Portfolio Hub

포트폴리오용 IT Ops 포털 클론입니다. 첫 버전은 정적 shell clone과 실제 동작하는 Text Cleaner 도구를 포함합니다.

## Local Preview

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Production Deploy

배포 방식은 GitHub private repo + GitHub Actions + Linux server + Docker Compose입니다.

Server prerequisites:

```bash
sudo apt-get update
sudo apt-get install -y docker.io docker-compose-plugin
sudo usermod -aG docker $USER
mkdir -p /opt/ops-site
```

GitHub repository secrets:

| Secret | Example |
| --- | --- |
| `SSH_HOST` | `example.com` |
| `SSH_USER` | `deploy` |
| `SSH_PORT` | `22` |
| `SSH_PRIVATE_KEY` | private key for the deploy user |
| `DEPLOY_PATH` | `/opt/ops-site` |

GitHub repository variable:

| Variable | Example |
| --- | --- |
| `APP_PORT` | `8080` |

On every push to `main`, `.github/workflows/deploy.yml` uploads the static app to the server and runs:

```bash
docker compose -f compose.prod.yml up -d --build --remove-orphans
```

The app will listen on `http://SERVER_IP:APP_PORT/` unless a reverse proxy maps a domain to that port.
