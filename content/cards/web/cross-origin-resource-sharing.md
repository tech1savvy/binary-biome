---
id: cross-origin-resource-sharing
aliases: []
tags: []
noteId: 1777823483972
---

## What CORS is

CORS is an HTTP-based mechanism that lets a browser call resources (APIs, fonts, etc.) from a different origin (scheme, host, or port) than the one that served the main page. It works by having the server send specific headers that tell the browser which origins, methods, and headers are allowed for cross-origin requests.

---

- The browser enforces the same-origin policy, which blocks most cross-origin reads by default; CORS is an opt-in relaxation of that policy.
- For “simple” requests (like a GET with certain headers), the browser just sends the request and then checks the CORS headers in the response (for example, an allow-origin header that matches the caller).
- For non-simple requests (custom headers, non-GET/POST/HEAD, etc.), the browser first issues a preflight OPTIONS request describing the intended method and headers, and only proceeds if the server’s response explicitly allows them.

## Why it exists

CORS allows front-end code to consume third-party or separate backend APIs safely, without disabling the browser’s security model. It gives the server granular control over which sites can use its resources, which methods they can use, and whether credentials (cookies, auth headers) may be included.

