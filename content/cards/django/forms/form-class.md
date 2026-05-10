---
id: form-class
aliases: []
tags: []
noteId: 1777823463947
---

How do you handle a form submission using Django Form classes?

---

> forms.py

```py
from django import forms


class SignupForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(min_length=8, max_length=128, widget=forms.PasswordInput)
    age = forms.IntegerField(min_value=13, error_messages={'min_value': 'You must be at least 13 years old.'})
```

> views.py (PRG pattern)

```py
from django.shortcuts import render, redirect
from .forms import SignupForm
from .models import User


def signup(request):
    if request.method == "POST": # POST
        form = SignupForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data["email"]
            password = form.cleaned_data["password"]
            age = form.cleaned_data["age"]

            User.objects.create(email=email, password=password, age=age)
            return redirect("signup") # REDIRECT
    else:
        form = SignupForm() # GET
    return render(request, "pages/signup.html", {"form": form})
```

> templates/pages/signup.html

```html
<form method="post">
  {% csrf_token %} {{ form.as_p }}
  <!-- form with each filed wrapped as paragraph tag -->
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

> models.py

```py
from django.db import models


class User(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    age = models.PositiveIntegerField()
```

