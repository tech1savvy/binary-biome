---
id: logout
aliases: []
tags: []
noteId: 1777823463472
---

How to implement user login using Django Builtin Authentication?

---

- You use Django’s built-in function `logout()` from `django.contrib.auth`.
- Calling `logout(request)` clears all session data related to the current user, effectively logging them out.
- Calling `logout()` on a request without a logged-in user simply clears session data without raising errors.

> views.py

```python
from django.contrib.auth import logout
from django.shortcuts import redirect

def logout_view(request):
    logout(request)  # Clears the session
    return redirect('login')  # Redirect to login page or home page
```

> home.html

- For better security, it should be a form post request, not a button redirecting to the URL.

```html
<form method="post" action="{% url 'logout' %}">
  {% csrf_token %}
  <button type="submit">Logout</button>
</form>
```

---

- Django’s logout function removes a user’s authentication session.
