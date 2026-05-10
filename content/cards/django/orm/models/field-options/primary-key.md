---
id: primary-key
backward:
  - "[overview](django/models/field-options/overview.md)"
noteId: 1777823465122
---

Which option should I use to define a custom primary key for a model?

---

- Marks the field as the model’s primary key.
- If no primary key is set, Django adds an implicit `id` field.

---

- Only set `primary_key=True` when you need a custom PK. 