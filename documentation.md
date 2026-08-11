# Coffee Brew Log Documentation

## Overview
Coffee Brew Log is a full-stack app for tracking brew entries. The frontend is in `frontend/` and the backend is in `backend/`.

## Folder structure
- `backend/` - Express + Sequelize backend
- `frontend/` - React + Vite frontend
- `.env.example` - example environment variables
- `Documentation.md` - setup instructions
- `deployment.md` - deployment notes

## Prerequisites
- Node.js installed
- MySQL installed and running
- Git

## Backend setup
1. Open terminal:
   ```powershell
   cd "C:\Users\ndumi\full-stack-developer-bootcamp-anelisavundisa1-maker\coffee brew log\backend"
   npm install
   ```
2. Create `.env` from `.env.example`.
3. Start backend:
   ```powershell
   node server.js
   ```
4. Backend should run on:
   `http://localhost:5000`

## Frontend setup
1. Open terminal:
   ```powershell
   cd "C:\Users\ndumi\full-stack-developer-bootcamp-anelisavundisa1-maker\coffee brew log\frontend"
   npm install
   npm run dev
   ```
2. Open the URL shown by Vite, e.g.:
   `http://localhost:5174/`

## Environment variables
Create `backend/.env` with:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=coffee_brews
DB_PORT=3306
```

If you use frontend environment variables later, add `VITE_API_URL=http://localhost:5000`.

## API
The backend exposes CRUD endpoints for brews:
- `GET /api/brews`
- `POST /api/brews`
- `PUT /api/brews/:id`
- `DELETE /api/brews/:id`

## Features
- add new brew
- list brews
- filter by method
- edit brew
- delete brew
- form validation for required fields

## Troubleshooting
- If `npm run dev` fails, make sure `frontend/package.json` has `"dev": "vite"` in scripts.
- If port `5173` is busy, Vite will use another port.
- If backend fails, check `backend/.env` and MySQL connection.
