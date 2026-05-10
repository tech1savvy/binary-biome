---
id: fields
forward:
  - "[label](label.md)"
  - "[widgets](../widgets.md)"
noteId: 1777823464047
---

What are fields in Django forms and what are the common types?

---

Form fields in Django are Python classes that:

1. Define how the data should be validated
2. Control how the field is rendered in HTML
3. Handle data conversion between Python and HTML forms

Common field types:

```python
from django import forms

class ExampleForm(forms.Form):
    # Text fields
    text = forms.CharField()  # For text input
    email = forms.EmailField()  # For email validation
    number = forms.IntegerField()  # For integers
    decimal = forms.DecimalField()  # For decimal numbers

    # Selection fields
    choice = forms.ChoiceField()  # For dropdown/radio
    multi = forms.MultipleChoiceField()  # For multiple selections

    # File fields
    file = forms.FileField()  # For file uploads
    image = forms.ImageField()  # For image uploads

    # Date and time fields
    date = forms.DateField()  # For dates
    time = forms.TimeField()  # For times
    datetime = forms.DateTimeField()  # For dates with times

    # Boolean fields
    boolean = forms.BooleanField()  # For checkboxes
```

---

- Each field type comes with its own validation rules
- Fields can be customized with arguments like `required`, `max_length`, `min_value`, etc.
- Fields can have widgets assigned to control their HTML rendering
- Fields automatically handle data cleaning and type conversion
