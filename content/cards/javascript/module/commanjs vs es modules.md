---
noteId: 1777823474222
---

The legacy CommonJS module system, typically uses `require` and `module.exports`. Nowadays, Node.js also supports the newer ECMAScript Modules (ESM), which use `import` and `export`.

### CommonJS Example

```js
const express = require("express");
module.exports = myFunction;
```

### ECMAScript Module (ESM) equivalent

```js
import express from "express";
export default myFunction;
```

To fully convert to ESM:

- Use `import`/`export` syntax.
- Rename your file extension to `.mjs` **or** set `"type": "module"` in your `package.json`.
