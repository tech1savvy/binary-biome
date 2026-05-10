---
id: simple-form
aliases: []
tags: []
noteId: 1777823464597
---

How do you handle a HTML form submission in Django without using Django Forms?

---

- Useful when using vanilla HTML, React, or other frontends instead of Django templates/forms.
- Handle POST data via `request.POST`, create model instances, and render a response.
- Include CSRF protection in templates rendered by Django.
- Prefer Post/Redirect/Get (PRG): redirect after a successful POST to prevent resubmission on refresh.

> views.py (PRG pattern with messages)

```python
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User

def signup(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        age = request.POST.get("age")

        # Validate age
        try:
            age = int(age)
            if age < 13:
                messages.error(request, "You must be at least 13 years old to register.")
                return redirect("signup")
        except (TypeError, ValueError):
            messages.error(request, "Please enter a valid age.")
            return redirect("signup")

        User.objects.create(email=email, password=password, age=age)
        messages.success(request, "Account created!")
        return redirect("signup")

    return render(request, "pages/signup.html")
```

> templates/pages/signup.html

```html
<form method="post">
  {% csrf_token %} Email:
  <input type="email" id="email" name="email" required /> <br />
  Password: <input type="password" id="password" name="password" required />
  <br />
  Age: <input type="number" id="age" name="age" required min="0" /> <br />
  <input type="submit" value="Submit" />
</form>

{% if messages %} {% for m in messages %}
<p>{{ m }}</p>
{% endfor %} {% endif %}
```

> urls.py

```python
from django.urls import path
from . import views

urlpatterns = [
    path("signup", views.signup, name="signup"),
]
```

> models.py

```python
from django.db import models


class User(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=16)
    age = models.PositiveIntegerField()
```
