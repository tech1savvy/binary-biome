---
id: inner-html
noteId: 1777823473572
---

How to get or set the HTML content of an element?

---

Use the `innerHTML` property.

```js
// Get HTML content
let content = element.innerHTML;

// Set HTML content
element.innerHTML = "<p>New content</p>";
```

---

- Includes all HTML tags and content inside the element.
- **Security Note:** Setting `innerHTML` with user-provided content can lead to cross-site scripting (XSS) vulnerabilities.
