---
id: object-attributes
aliases: []
noteId: 1777823466697
---

How do you access object attributes in Django templates?

---

Use dot notation `{{ object.attribute }}` to access attributes of objects passed in the context.

---

```python
# views.py
def user_detail(request, user_id):
    user = User.objects.get(id=user_id)
    context = {'user': user}
    return render(request, 'user_detail.html', context)
```

```html
<!-- user_detail.html -->
<h1>{{ user.username }}</h1>
<p>Email: {{ user.email }}</p>
<p>Joined: {{ user.date_joined }}</p>
```

You can chain attributes: `{{ user.profile.bio }}` for nested object access. 