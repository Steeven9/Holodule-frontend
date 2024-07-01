# Holodule-frontend

[![](https://img.shields.io/github/license/steeven9/Holodule-frontend)](/LICENSE)
[![C/C++ CI](https://github.com/steeven9/Holodule-frontend/actions/workflows/docker-image.yml/badge.svg)](https://github.com/steeven9/Holodule-frontend/actions/workflows/docker-image.yml)
![](https://img.shields.io/tokei/lines/github/steeven9/Holodule-frontend)

## ℹ️ Description

This is an alternate frontend for <https://schedule.hololive.tv>

The frontend is exposed at <https://holo.soulsbros.ch>.

404 and 500 error logos by [SAWARATSUKI](https://github.com/SAWARATSUKI/KawaiiLogos)

### Dependencies

None

## 🏡 Local development

### ⚙️ Prerequisites

- Node.js v20
- Yarn package manager

### 🔧 Installation

```bash
# install dependencies
yarn install
```

### 🚀 Run locally

```bash
# start frontend
yarn dev
```

Then open your browser and head to <http://localhost:3000>

### Run in Docker

```bash
docker run steeven9/holodule-frontend -p 3000:3000
```
