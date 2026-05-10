---
id: virtual-dom
aliases: []
tags: []
noteId: 1777823483172
---

What is the React virtual DOM and why is it used?

---

- A lightweight, in-memory representation of the actual DOM.
- It's used to make UI updates more efficient by avoiding direct manipulation of the real DOM, which is slow.
- React calculates what changed ("diffing") in the virtual DOM first, then updates only the necessary parts of the real DOM.

---

### How It Works

1.  On a state or prop change, React creates a new virtual DOM tree.
2.  React compares ("diffs") this new tree with the previous one.
3.  The minimal set of changes is computed ("reconciliation").
4.  Only these changes are applied to the real DOM, improving performance.
