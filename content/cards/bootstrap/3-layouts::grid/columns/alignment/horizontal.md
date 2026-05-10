---
id: horizontal-alignment-columns
noteId: 1777823457072
---

How can you horizontally align columns within Bootstrap's grid system?

---

You can horizontally align columns within Bootstrap's grid system by applying `justify-content-*` classes to the `.row` container:

-   `justify-content-start`: Aligns columns to the start (left) of the row.
-   `justify-content-center`: Horizontally centers columns within the row.
-   `justify-content-end`: Aligns columns to the end (right) of the row.
-   `justify-content-around`: Distributes columns with equal space around each item, including half-size space on the ends.
-   `justify-content-between`: Distributes columns with space evenly distributed *between* them, with the first item at the start and the last at the end.
-   `justify-content-evenly`: Distributes columns with equal space around each item, including full-size space on the ends.

```html
<div class="container text-center">
  <div class="row justify-content-center">
    <div class="col-4">One of two columns</div>
    <div class="col-4">One of two columns</div>
  </div>
</div>
```

---

These utility classes leverage Flexbox properties (`justify-content`) to control the distribution of space and alignment of items along the main axis (horizontal) of a flex container. They can also be used with responsive breakpoints (e.g., `justify-content-md-end`).
