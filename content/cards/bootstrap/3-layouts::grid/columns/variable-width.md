---
id: variable-width-columns
source: https://getbootstrap.com/docs/5.3/layout/grid
noteId: 1777823457122
---

How do you create a Bootstrap grid column that automatically sizes itself based on the natural width of its content?

---

To create a Bootstrap column that sizes itself based on its content, use the `col-{breakpoint}-auto` classes.

-   The `col-auto` class (without a breakpoint) will make the column size itself based on its content across all breakpoints.
-   Adding a breakpoint (e.g., `col-md-auto`, `col-lg-auto`) will make the column size itself based on its content only from that breakpoint upwards. Below that breakpoint, it will stack or behave as a full-width column (depending on other `col` classes present).

---

**Example:**

```html
<div class="container text-center">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 of 3 (fixed width)
    </div>
    <div class="col-md-auto">
      This column's width will adapt to its content from the 'md' breakpoint and above.
    </div>
    <div class="col col-lg-2">
      3 of 3 (fixed width)
    </div>
  </div>
</div>
```
This is particularly useful when you have content of varying lengths and want the column to consume only the necessary space, allowing other columns to fill the remaining area.
