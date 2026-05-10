---
id: widgets
forward:
  - "[forms/define](../forms/define.md)"
noteId: 1777823464296
---

What are Django form widgets and how do they relate to HTML form elements?

---

- Widgets in Django forms are Python classes that determine the HTML rendering of form fields
- Each form field has a corresponding Widget class that maps to an HTML form widget
- By default, fields use sensible widget choices:
  - CharField → TextInput widget → `<input type="text">`
  - TextField → Textarea widget → `<textarea>`
- You can override the default widget, e.g., `PasswordInput` → `<input type="password">`

---

```python
from django import forms

class ContactForm(forms.Form):
    subject = forms.CharField()  # Uses TextInput by default
    password = forms.CharField(widget=forms.PasswordInput)  # Override to use password input
```

This form will render as the following HTML:

```html
<input type="text" name="subject" required id="id_subject" />
<input type="password" name="password" required id="id_password" />
```
