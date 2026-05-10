---
id: basic
aliases: []
noteId: 1777823466672
---

How do you display a basic variable in a Django template?

---

Use double curly braces `{{ variable_name }}` to display context variables passed from your views.

---

```python
# views.py
def user_profile(request, username):
    context = {'username': username}
    return render(request, 'profile.html', context)
```

```html
<!-- profile.html -->
<h1>Welcome, {{ username }}!</h1>
```

The variable name in the template must match exactly with the key in the context dictionary. 