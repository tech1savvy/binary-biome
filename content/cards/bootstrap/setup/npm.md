---
id: bootstrap-npm-setup
aliases: []
tags: []
forward:
  - "[react](cards/bootstrap/setup/react.md)"
noteId: 1777823457447
---

How to install and import Bootstrap into a React project using npm?

---

```sh
npm i bootstrap
```

In `app.jsx` or `index.js`:

```javascript
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
```

---

The `bootstrap.css` import provides the styling, and `bootstrap.bundle.js` includes Bootstrap's JavaScript components (like carousels, modals, etc.) which depend on Popper.js.
