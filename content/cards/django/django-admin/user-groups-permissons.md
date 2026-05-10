---
id: overview
noteId: 1777823463373
---

How do you manage users, groups, and permissions in Django Admin?

---

Django Admin provides a built-in interface to manage users, groups, and permissions efficiently.

- Create groups (Admin → Groups) and give them model permissions (add/change/delete/view).
- Create or edit users (Admin → Users) and assign them to one or more groups.
- Optionally assign specific permissions directly to a user (less scalable than groups).
- Users inherit all permissions from their groups.

Programmatic example:

```python
from django.contrib.auth.models import User, Group, Permission
from django.contrib.contenttypes.models import ContentType

# Get user and group (create group if missing)
user = User.objects.get(username="john")
group, _ = Group.objects.get_or_create(name="editors")

# Assign permissions to group (example for Book model in app "your_app")
content_type = ContentType.objects.get(app_label="your_app", model="book")
perms = Permission.objects.filter(
    content_type=content_type,
    codename__in=["view_book", "change_book"]
)
group.permissions.add(*perms)

# Finally, add user to the group
user.groups.add(group)
```

---

### Benefits
- Centralized control by managing permissions at the group level.
- Scales easily; changing a group updates all members.
- Built-in, secure integration with Django's authentication/authorization.
