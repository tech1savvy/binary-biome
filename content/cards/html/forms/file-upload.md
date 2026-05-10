---
id: file-upload
aliases: []
tags: []
forward:
  - "[submit](submit.md)"
noteId: 1777823470921
---

How do you implement file upload in HTML forms?

---

Create a file upload form using:

```html
<form action="upload_url" method="post" enctype="multipart/form-data">
  <input type="file" name="myfile" />
</form>
```

Key points:

- Form must have `enctype="multipart/form-data"` attribute
- Use `<input type="file">` for file selection
- Must use `method="post"` for file uploads
- `name` attribute is required for server-side handling
- Browser provides native file picker interface
