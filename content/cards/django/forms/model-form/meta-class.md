---
id: meta-class
noteId: 1777823464547
---

What is a Django ModelForm `Meta` class and how do you use it?

---

- The inner `class Meta:` on a `forms.ModelForm` maps the form to a model and configures which model fields appear and how they render.
- Core responsibilities: pick the `model`, select fields (`fields` or `exclude`), and customize rendering/labels/help/errors.

Basic example:
```py
from django import forms
from .models import User


class SignupForm(forms.ModelForm):
    class Meta:
        model = User                    # model bound to this ModelForm
        fields = ["email", "password"]  # explicit whitelist of fields
        # fields = "__all__"            # include all model fields
```

Customizing widgets, labels, help text, and errors:
```py
class SignupForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["email", "password"]
        widgets = {
            "password": forms.PasswordInput(attrs={"placeholder": "Choose a strong password"}),
        }
        labels = {
            "email": "Email address",
        }
        help_texts = {
            "email": "We’ll never share your email.",
        }
        error_messages = {
            "email": {
                "unique": "An account with this email already exists.",
                "invalid": "Enter a valid email address.",
            }
        }
```

---

Common `Meta` options for ModelForms:
- Required mapping: `model`.
- Field selection (use one): `fields` (whitelist) or `exclude` (blacklist).
- Presentation: `widgets`, `labels`, `help_texts`.
- Validation messages: `error_messages`.
- Order/field tweaks: `field_classes` (rare), `localized_fields` (legacy).

Tips:
- Prefer `fields` over `exclude` to avoid unintentionally exposing fields.
- Use widgets to set input types and HTML attributes without custom templates.
- Keep business rules in model/form validation (`clean()`/`clean_<field>()`).
