---
id: relative-to-viewport-sizing
source: https://getbootstrap.com/docs/5.3/utilities/sizing
noteId: 1777823457322
---

How do you set an element's size relative to the viewport using Bootstrap utilities?

---

Bootstrap provides sizing utilities that use viewport units (`vw` for width, `vh` for height) to set an element's dimensions relative to the browser's viewport.

-   `.vw-100`: Sets the element's `width` to 100% of the viewport's width (`100vw`).
-   `.vh-100`: Sets the element's `height` to 100% of the viewport's height (`100vh`).
-   `.min-vw-100`: Sets the element's `min-width` to 100% of the viewport's width.
-   `.min-vh-100`: Sets the element's `min-height` to 100% of the viewport's height.

---

These utilities are useful for creating elements that span the full width or height of the screen, such as hero sections or full-page layouts.

```html
<div class="min-vw-100">Min-width 100vw</div>
<div class="min-vh-100">Min-height 100vh</div>
<div class="vw-100">Width 100vw</div>
<div class="vh-100">Height 100vh</div>
```
