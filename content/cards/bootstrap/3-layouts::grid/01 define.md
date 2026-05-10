---
id: bootstrap-grid-define
aliases: []
tags: []
noteId: 1777823456973
---

What is the Bootstrap grid system?

---

It's a powerful, mobile-first **flexbox grid** used to build layouts of all shapes and sizes. It is based on a **12-column system**.

The grid is structured using three main components:

- **Containers** (`.container`): To wrap and pad the grid.
- **Rows** (`.row`): To act as wrappers for columns.
- **Columns** (`.col`): The actual content holders. You specify how many of the 12 available columns each one should span.

---

### Basic Two-Column Layout

This example creates one row with two columns. The first column spans 8 of the 12 available units, and the second spans the remaining 4.

```html
<div class="container text-center">
  <!-- Content here -->
  <div class="row">
    <div class="col-8">8 columns wide</div>
    <div class="col-4">4 columns wide</div>
  </div>
</div>
```
