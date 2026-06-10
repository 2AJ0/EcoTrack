# EcoTrack - Energy Tracking Dashboard Skeleton

This repository contains a full-stack starter structure for an Energy Tracking Dashboard:

- **frontend/**: React + Vite + Tailwind CSS dashboard UI skeleton
- **backend/**: Node.js + Express REST API serving mock energy consumption data

## Prerequisites

- Node.js 18+
- npm 9+

## Setup and Run

### 1) Backend

```bash
cd backend
npm install
npm start
```

Backend runs on `http://localhost:4000` by default.

Available endpoints:

- `GET /api/health`
- `GET /api/energy-consumption`

Example response (`/api/energy-consumption`):

```json
{
  "unit": "kWh",
  "data": [
    { "timestamp": "2026-06-06T00:00:00Z", "kWh": 34.2 }
  ]
}
```

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` by default.

### 3) Production build (frontend)

```bash
cd frontend
npm run build
```
