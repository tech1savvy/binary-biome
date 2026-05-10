---
id: null-vs-blank
backward:
  - "[overview](django/models/field-options/overview.md)"
noteId: 1777823465071
---

Which option should I use to allow emptiness vs store NULLs?

---

- `null` controls database storage of empty values.
- `blank` controls validation and whether empty input is allowed.

Null (database):
- If `null=True`, Django stores empty values as `NULL` in the database; default is `False`.
- Affects storage layer only.
- Typical use: non-string optional fields (e.g., `IntegerField`, `DateField`).

Blank (validation/forms):
- If `blank=True`, the field may be empty during validation; default is `False`.
- Affects forms/admin and model validation, not DB storage.
- Typical use: allow empty input for text fields without using `NULL` in DB.

Guidelines:
- For string-based fields: prefer `blank=True` with `null=False`.
- For non-string optional fields: consider `null=True` (and optionally `blank=True`). 