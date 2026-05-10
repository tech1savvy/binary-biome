---
id: login
forward:
  - "[signup](cards/django/django-authentication/signup.md)"
noteId: 1777823463447
---

How to implement user login using Django Builtin Authentication?

---

```python
def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("home")
        else:
            return render(request, "pages/login.html", {"error": "Invalid username or password"})
    return render(request, "pages/login.html")
```

```html
<form method="post" action="">
  {% csrf_token %}
  Username: <input type="text" name="username" required>
  Password: <input type="password" name="password" required>
  <input type="submit" value="Login">
</form>
```

---

- Use `authenticate()` to verify credentials
- Use `login()` to create user session