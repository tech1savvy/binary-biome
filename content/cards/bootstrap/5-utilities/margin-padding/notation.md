---
id: spacing-notation
noteId: 1777823457222
---

What is the notation format for Bootstrap's spacing utilities?

---

Bootstrap spacing utilities follow a specific notation format:

-   **All breakpoints**: Spacing utilities for all breakpoints (xs to xxl) have no breakpoint abbreviation. They apply from `min-width: 0` and up.
-   **Specific breakpoints**: For `sm`, `md`, `lg`, `xl`, and `xxl` breakpoints, the utility classes include a breakpoint abbreviation.

The general class format is:
`{property}{sides}-{size}` (for xs)
`{property}{sides}-{breakpoint}-{size}` (for sm, md, lg, xl, xxl)

---

**Breakdown of the notation:**

-   **`property`**:
    -   `m`: for margin classes
    -   `p`: for padding classes

-   **`sides`**:
    -   `t`: top (`margin-top` or `padding-top`)
    -   `b`: bottom (`margin-bottom` or `padding-bottom`)
    -   `s`: start (logical left in LTR, `margin-left` or `padding-left`)
    -   `e`: end (logical right in LTR, `margin-right` or `padding-right`)
    -   `x`: horizontal (`*-left` and `*-right`)
    -   `y`: vertical (`*-top` and `*-bottom`)
    -   `blank`: all 4 sides

-   **`size`**:
    -   `0`: `0`
    -   `1`: `$spacer * .25`
    -   `2`: `$spacer * .5`
    -   `3`: `$spacer`
    -   `4`: `$spacer * 1.5`
    -   `5`: `$spacer * 3`
    -   `auto`: `auto` (only for margin)

(More sizes can be added by modifying the `$spacers` Sass map variable.)
