# Coffee Brew Log Documentation

I built a simple coffee brew log app.

It has:
- `backend` folder
- `frontend` folder

## What it does

I can:
- add a brew
- see a list of brews
- filter by brew method
- edit a brew
- delete a brew

## Backend setup

1. Open terminal in `backend`
2. Run:
```
npm install
```

## Backend deployment

1. Use a service like Render or Railway.
2. Set root folder to `backend`.
3. Build command:
   ```
   npm install
   ```
4. Start command:
   ```
   node server.js
   ```
5. Add these environment variables:
   - `DB_HOST`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
   - `DB_PORT`

## The backend should run on:
`http://localhost:5000`

## Frontend setup

1. Open terminal in `frontend`
2. Run:
```
npm install && npm run build
```

## Notes

- If frontend needs backend, set `VITE_API_URL` to the backend URL.
- Create `backend/.env`
- Run:
```
node server.js
```

## Backend .env

I use this in `backend/.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=coffee_brews
DB_PORT=3306
```

Open the browser at the URL Vite shows, for example:
`http://localhost:5174/`

# Deployment Notes

I want to keep this simple.

## Backend

1. Root folder: `backend`
2. Build command:
   ```
   npm install
   ```
3. Publish folder:
   ```
   npm run build
   ```

## If frontend needs backend

Add a variable like:
- `VITE_API_URL=https://your-backend-url`

## My plan

- backend runs on a server
- frontend is built and served as static files
- backend connects to MySQL with the `.env` values

