---
id: server-proxy
source: https://github.com/vitejs/vite/blob/main/docs/config/server-options.md
noteId: 1777823483897
---

Which option to use in Vite to redirect dev server requests to a backend and avoid CORS issues?

---

```js
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

- `server.proxy`: Defines request redirection rules.
- `target`: The backend server URL.

---

- **Avoid CORS**: Makes the browser think requests are going to the dev server's port.
- **changeOrigin**: Changes the "origin" header to match the target URL (often required by backends).
- **rewrite**: A function to modify the URL path before sending it to the backend (e.g., stripping the prefix).

**Production Note**: `server.proxy` is only for the dev server.
- **Build**: `npm run build` generates static files served by web servers (Nginx, Apache), where `server.proxy` doesn't exist.
- **Strategies**:
    - **Same Origin**: Host frontend/backend on same domain. Relative paths (`/api`) work automatically.
    - **Different Domains**: Must configure CORS on backend to allow frontend origin.
    - **Env Vars**: Use environment variables (e.g., `VITE_API_URL`) to switch API endpoints.
    - **Reverse Proxy**: Configure Nginx/Apache to proxy `/api` calls in production.