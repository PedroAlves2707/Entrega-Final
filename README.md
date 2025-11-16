# Extensão Pomodoro Dos Crias – Pomodoro + Frases

PWA derivado da extensão de Pomodoro, com backend próprio de frases, containerização com Docker Compose e CI no GitHub Actions.

## Arquitetura

- `apps/web`: PWA (HTML/JS/CSS vanilla) servido via Nginx em produção.
- `apps/api`: API Node/Express com endpoint `/api/quote`.
- `docker-compose.yml`: orquestra `web` + `api`.

## Como rodar localmente

