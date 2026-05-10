---
id: span-text-wrap
aliases: []
tags: []
noteId: 1777823471122
---

Which CSS properties and display settings are needed to make text wrap inside a `<span>` element?

---

To enforce text wrapping inside a `<span>` element, you can:

- Change the display of the span to `inline-block` or `block`.
- Set a fixed `width` or `max-width` on the `<span>`.
- Use CSS properties like `word-wrap: break-word;` (or `overflow-wrap: break-word;`) to break long words.
- Use `white-space: normal;` to allow wrapping.

---

Example CSS for wrapping text inside a fixed-width `<span>`:

```css
span.wrap {
  display: inline-block;
  width: 150px;
  word-wrap: break-word; /* or overflow-wrap: break-word; */
  white-space: normal;
}
```

HTML:

```html
<span class="wrap">
  ThisIsAReallyLongWordThatWouldNotWrapNormallyButWillWrapNow
</span>
```

