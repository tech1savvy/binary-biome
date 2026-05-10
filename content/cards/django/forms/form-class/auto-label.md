---
id: auto-label
backward:
  - "[label](label.md)"
forward:
  - "[fields](fields.md)"
noteId: 1777823464022
---

What happens if you don't specify a label for a Django form field?

---

Django automatically generates a label by:

1. Capitalizing the field name
2. Replacing underscores with spaces

Example:

```python
from django import forms

class MyForm(forms.Form):
    first_name = forms.CharField()  # Label will be "First Name"
    email_address = forms.EmailField()  # Label will be "Email Address"
```

---

- This automatic label generation is a convenience feature of Django forms
- You can override this behavior by explicitly setting the `label` parameter
- This works for all form field types (CharField, EmailField, IntegerField, etc.)
