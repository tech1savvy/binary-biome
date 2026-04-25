---
title: "Projects"
tags: []
date: 2026-04-25
---

### GitOps Kubernetes Platform on AWS

![AWS](https://img.shields.io/badge/AWS-FF9900?style=plastic&logo=amazonaws&logoColor=white) ![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=plastic&logo=kubernetes&logoColor=white) ![Nix](https://img.shields.io/badge/Nix-5277C3?style=plastic&logo=nix&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=plastic&logo=githubactions&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=plastic&logo=docker&logoColor=white) ![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=plastic&logo=prometheus&logoColor=white) ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=plastic&logo=grafana&logoColor=white)

*Feb 2026 - Present*

Personal declarative Kubernetes platform for DevOps practice and app hosting.

- Provisioned a **K3s** Kubernetes cluster on **AWS** using **NixOS** declarative infrastructure (Flakes + deploy-rs)
- CI/CD pipelines via GitHub Actions with OIDC-based AWS authentication
- Secrets management using **SOPS + Age** encryption
- Observability stack with **Prometheus**, **Grafana**, and custom alerts
- GitOps infrastructure with reproducible rebuilds in under 10 mins

[<i class="bi bi-github"></i> github.com/tech1savvy/homelab](https://github.com/tech1savvy/homelab)

---

### Pokedex CLI

![Go](https://img.shields.io/badge/Go-00ADD8?style=plastic&logo=go&logoColor=white)

*Feb 2026*

CLI client to explore and interact with Pokemon data from the PokeAPI.

- Custom REPL supporting commands: map, explore, catch, and pokedex
- Thread-safe in-memory cache using mutex-based concurrency control
- Background goroutine with scheduled cleanup timer for automatic cache invalidation

[<i class="bi bi-github"></i> github.com/tech1savvy/pokedex-go-cli](https://github.com/tech1savvy/pokedex-go-cli)

---

### Asteroids: Retro Arcade Game

![Python](https://img.shields.io/badge/Python-3776AB?style=plastic&logo=python&logoColor=white) ![Pygame](https://img.shields.io/badge/Pygame-3C髑?style=plastic&logoColor=white)

*Jan - Feb 2026*

Recreated the classic Asteroids arcade game using Python and Pygame.

- OOPs design with inheritance for managing player, projectile, and asteroid interactions
- Core game mechanics: collision detection, asteroid spawning, and procedural splitting

[<i class="bi bi-github"></i> github.com/tech1savvy/asteroids](https://github.com/tech1savvy/asteroids)

---

### Key-Sensei: Touch Typing Test Platform

![React](https://img.shields.io/badge/React-61DAFB?style=plastic&logo=react&logoColor=black) ![Express](https://img.shields.io/badge/Express-000000?style=plastic&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=plastic&logo=mongodb&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?style=plastic&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=plastic&logo=githubactions&logoColor=white)

*Nov - Dec 2025*

Built a touch-typing web platform using React and ExpressJS.

- Real-time validation, animated cursor, visual keyboard, and pub-sub event architecture
- RESTful API with **JWT auth**, MongoDB persistence
- Docker containerization with GitHub Actions CI/CD
- Deployed to production: [keysensei.tech1savvy.me](https://keysensei.tech1savvy.me)

[<i class="bi bi-github"></i> github.com/tech1savvy/key-sensei](https://github.com/tech1savvy/key-sensei)