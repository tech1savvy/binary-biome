---
id: instantiate
forward:
  - "[process](process.md)"
noteId: 1777823464373
---

How to define a basic Django Form class?

---

```python
from django import forms

class ContactForm(forms.Form):
    sender = forms.EmailField(label="Email")
    subject = forms.CharField(label="Subject", max_length=100)
    message = forms.CharField(label="Message", widget=forms.Textarea)
```

---

- Form fields are defined as class attributes
- Each field type (EmailField, CharField) has its own validation rules
- Labels can be customized using the `label` parameter
- Widgets control how the field is rendered in HTML
