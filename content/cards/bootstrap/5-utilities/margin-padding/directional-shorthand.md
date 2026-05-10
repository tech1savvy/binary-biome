---
id: directional-margin-shorthand
source: https://getbootstrap.com/docs/5.0/utilities/spacing/
noteId: 1777823457197
---

Which Bootstrap 5 margin classes are used for directional spacing, and what was the key change from Bootstrap 4 regarding left/right margins?

---

Bootstrap 5 uses a directional shorthand for margin classes, particularly transitioning to logical properties for left/right margins:

-   `mt-*`: `margin-top`
-   `mb-*`: `margin-bottom`
-   `ms-*`: `margin-left` (margin-start, logical left in LTR) - **replaces deprecated `ml-*` from Bootstrap 4.**
-   `me-*`: `margin-right` (margin-end, logical right in LTR) - **replaces deprecated `mr-*` from Bootstrap 4.**
-   `mx-*`: `margin-left` and `margin-right` (`ms`/`me`)
-   `my-*`: `margin-top` and `margin-bottom`

---

**Bootstrap 5 Change**:
Pre-v5 (e.g., Bootstrap 4) used `ml-*` (margin-left) and `mr-*` (margin-right) for physical directions. Bootstrap 5 switched to `ms-*` (margin-start) and `me-*` (margin-end) to support RTL (right-to-left) languages. This change provides the same visual effect in LTR (left-to-right) layouts but allows for better adaptability in RTL contexts.
