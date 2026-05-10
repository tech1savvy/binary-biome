---
id: bootstrap-containers-define
aliases: []
tags: []
noteId: 1777823456896
---

What is the purpose of containers in Bootstrap?

---

Containers are the most basic layout element in Bootstrap. They are required when using the grid system and are used to **wrap, pad, and sometimes center** your site's content.

---

There are three main types of containers:

- **`.container`**: The standard container. It has a responsive, fixed `max-width` that changes at different screen size breakpoints.
- **`.container-fluid`**: A full-width container. It always spans the entire width of the viewport.
- `.container-{breakpoint}` are Responsive containers (e.g., `.container-md`): These are 100% wide until the specified breakpoint (e.g., medium) is reached, after which their `max-width` is fixed.
  - it uses `@media-breakpoint-up{breakpoint}` to setup 100% width till breakpoint, then gets fixed on a max-width.

**Example:**

```html
<!-- A centered, padded container with a max-width -->
<div class="container">...</div>

<!-- A full-width container -->
<div class="container-fluid">...</div>
```
