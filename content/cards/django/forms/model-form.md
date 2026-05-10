---
id: model-form
aliases: []
tags: []
noteId: 1777823464472
---

How do you handle a simple form submission using a Django ModelForm?

---

- Use `forms.ModelForm` to bind directly to a model and reduce boilerplate.
- In the view, bind `request.POST` to the form, call `is_valid()`, then `form.save()`.
- Render the form in the template with CSRF protection; prefer PRG after success.

> models.py

```py
from django.db import models


class User(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    age = models.PositiveIntegerField()
```

> forms.py

```py
from django import forms
from .models import User


class SignupForm(forms.ModelForm):
    class Meta: # specify configuration metadata
        model = User
        fields = ["email", "password"]
        # fields = "__all__"            # include all model fields
        widgets = {
            "password": forms.PasswordInput,
        }
    # Custom validation for age
    def clean_age(self):
        age = self.cleaned_data.get('age')
        if age is not None and age < 13:
            raise forms.ValidationError("You must be at least 13 years old to register.")
        return age
```

> views.py (PRG pattern)

```py
from django.shortcuts import render, redirect
from .forms import SignupForm


def signup(request):
    if request.method == "POST":  # POST
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("signup")  # REDIRECT
    else:
        form = SignupForm()  # GET
    return render(request, "pages/signup.html", {"form": form})
```

> templates/pages/signup.html

```html
<form method="post">
  {% csrf_token %} {{ form.as_p }}
  <button type="submit">Sign up</button>
</form>
```

> urls.py

```py
from django.urls import path
from . import views

urlpatterns = [
    path("signup", views.signup, name="signup"),
]
```
