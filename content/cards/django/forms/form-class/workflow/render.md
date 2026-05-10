---
id: render
backward:
  - "[process](process.md)"
forward:
  - "[manual-render](manual-render.md)"
noteId: 1777823464447
---

How to render a Django form in a template?

---

```html
<form action="/contact-us" method="POST">
  {% csrf_token %} {{ form }}
  <input type="submit" value="Submit" />
</form>
```

---

- `{% csrf_token %}` adds CSRF protection
- `{{ form }}` renders all form fields automatically
