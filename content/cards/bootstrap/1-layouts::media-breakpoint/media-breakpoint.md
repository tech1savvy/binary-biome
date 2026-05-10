---
id: media-breakpoint
aliases:
  - breakpoints
  - media-queries
tags: []
noteId: 1777823456822
---

# Breakpoints

- Breakpoints in bootstrap are predefined aliases mapped to screen thresholds which we an use to change the layout to fit the same content for different device size.
- Think of breakpoints as specific screen widths where your website's layout will change to look best on that screen size and larger.

## Example

```txt
  xs: 0, Extra Small (for phones)
  sm: 576px, Small (for tablets)
  md: 768px, Medium (for small laptops)
  lg: 992px, Large (for desktops)
  xl: 1200px, Extra Large (for larger desktops)
  xxl: 1400px, Extra Extra Large (for very large screens)
);
```

# Media Queries

- Media queries are special rules in CSS that let you apply different styles based on the device's characteristics, like its screen width.

## Apply Style When greater than or equal to Minimum Breakpoint (>=)

- This is used to apply styles for a specific screen size and any larger screens.
- For example, `@include media-breakpoint-up(sm)` means "apply these styles for small screens and larger."

```sass
// Example: Hide Elemenet starting at `min-width: 0`, and then show at the `sm` breakpoint
custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
```

## Apply Style When less than or equal to Maximum breakpoint (<=)

- This is used to apply styles for a specific screen size and any smaller screens.
- For example, `@include media-breakpoint-down(md)` means "apply these styles for medium screens and smaller."

```sass
// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
```

## Apply Style for Single Breakpoint ( = breakpoint)

- This is used to apply styles for a single breakpoint.
- It uses the `media-breakpoint-only` mixin.

```sass
// Example: Apply styles only for the medium breakpoint
@include media-breakpoint-only(md) {
  .custom-class {
    color: red;
  }
}
```

## Apply Style Between Breakpoints ( <= breakpoint-1 & >= breakpoint-2)

- This is used to apply styles for a range of breakpoints.
- It uses the `media-breakpoint-between` mixin.

```sass
// Example: Apply styles between the medium and large breakpoints
@include media-breakpoint-between(md, lg) {
  .custom-class {
    padding: 2rem;
  }
}
```
