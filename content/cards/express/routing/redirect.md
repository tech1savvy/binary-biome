---
id: redirect
aliases: []
tags: []
noteId: 1777823468597
---

## res.redirect() Method

Use `res.redirect([status], path)` in route handlers to send a redirect response. The method accepts an optional HTTP status code (defaults to 302 Found) followed by the target path, which can be relative, absolute, or a full URL.

## Path Types

- Relative paths append to the current URL (e.g., `res.redirect('user')` from `/home` goes to `/home/user`).
- Root-relative paths start with `/` (e.g., `res.redirect('/user')`).
- Full URLs redirect externally (e.g., `res.redirect('https://example.com')`).

## Basic Route Example

```javascript
app.get("/", (req, res) => {
  res.redirect("/user"); // Redirects root to /user
});
```

Accessing `/` redirects to `/user`.

## Status Codes

Specify status explicitly for permanent redirects: `res.redirect(301, '/new-path')`. Common codes include 301 (Moved Permanently) and 302 (Found).
