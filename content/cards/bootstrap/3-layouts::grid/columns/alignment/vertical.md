---
id: vertical-alignment-columns
noteId: 1777823457097
---

How can you vertically align columns within Bootstrap's grid system?

---

You can vertically align columns in Bootstrap's grid system using either row-level or individual column alignment utility classes:

-   **Row-level alignment**: Apply `align-items-*` classes to the `.row` container to align all columns vertically.
    -   `align-items-start`: Aligns columns to the top.
    -   `align-items-center`: Vertically centers columns.
    -   `align-items-end`: Aligns columns to the bottom.

    ```html
    <div class="container">
      <div class="row align-items-center">
        <div class="col">One of three columns</div>
        <div class="col">One of three columns</div>
        <div class="col">One of three columns</div>
      </div>
    </div>
    ```

-   **Individual column alignment**: Apply `align-self-*` classes to specific `.col` elements to override the row's default or `align-items` setting.
    -   `align-self-start`: Aligns the individual column to the top.
    -   `align-self-center`: Vertically centers the individual column.
    -   `align-self-end`: Aligns the individual column to the bottom.

    ```html
    <div class="container">
      <div class="row">
        <div class="col align-self-start">One of three columns</div>
        <div class="col align-self-center">One of three columns</div>
        <div class="col align-self-end">One of three columns</div>
      </div>
    </div>
    ```

---

These utility classes leverage Flexbox properties (`align-items` and `align-self`) to control vertical alignment within the grid. They can also be used with responsive breakpoints (e.g., `align-items-md-center`, `align-self-lg-end`).
