---
id: label
forward:
  - "[auto-label](auto-label.md)"
noteId: 1777823464072
---

How do you set labels for fields in a Django form class?

---

You can set the label in the field declaration using the `label` argument:

```python
from django import forms

class MyForm(forms.Form):
    name = forms.CharField(label="Your Name")
    email = forms.EmailField(label="Email Address")
```

---

- Labels are used to specify the "human-friendly" name for fields when displayed in a form
- Labels are displayed in form templates when rendering the form
