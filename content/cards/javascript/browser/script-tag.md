---
id: external-scripts
aliases: []
tags: []
noteId: 1777823472797
---

Which option to use to include external JavaScript files in HTML?

---

- Use the `<script>` tag with the `src` attribute.
- The `src` attribute can specify an absolute path, a relative path, or a full URL to the script file.
- To include multiple script files, use multiple `<script>` tags.

---

- **Benefit**: External scripts are cached by the browser, which reduces traffic and speeds up page loading for subsequent visits.
- **Important**: A single `<script>` tag cannot contain both the `src` attribute and inline JavaScript code.
  - Inline code will be ignored.
  - If both are needed, split them into two separate `<script>` tags.

```html
-- Correct way to include an external script and inline code
<script src="file.js"></script>
<script>
  alert(1);
</script>

-- Incorrect way (inline content will be ignored)
<script src="file.js">
  alert(1);
</script>
```
