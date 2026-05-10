---
id: signup
backward:
  - "[login](cards/django/django-authentication/login.md)"
noteId: 1777823463497
---

How to implement user registration in Django?

---

```python
class SignupForm(UserCreationForm):
    email = forms.EmailField(required=True)
    
    class Meta:
        model = User
        fields = ("username", "email")

def signup_view(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("login")
    else:
        form = SignupForm()
    return render(request, "pages/signup.html", {"form": form})
```

```html
<form method="post">
  {% csrf_token %}
  {{ form }}
  <input type="submit" value="Submit">
</form>
```

---

- Extend `UserCreationForm` for custom fields
- Add email field to default username/password fields
- Use `form.save()` to create user account
- Redirect to login after successful registration