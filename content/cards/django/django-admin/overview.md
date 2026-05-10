---
id: overview
noteId: 1777823463322
---

What is Django Admin and how do you access and use it?

---

Django Admin is a built-in, automatic web-based interface for managing your application's data through your models.

### What is Django Admin?
- A powerful, automatic admin interface that reads metadata from your models to generate a quick, model‑centric dashboard.
- Lets trusted users (e.g., site administrators) perform CRUD (Create, Read, Update, Delete) operations without writing extra code.
- Intended primarily as an internal management tool for site content and users, not a full end‑user front end.

### Key Features of Django Admin
- Model Management: View, add, edit, delete model instances with search, filters, pagination.
- User and Permission Management: Manage users, groups, and permissions to control access.
- Customizable Interface: Tailor display/behavior via `ModelAdmin` classes.
- Security: Built‑in authentication and CSRF protection.
- Integration: Works with Django’s ORM and forms to reflect your data models directly.
- Extensibility: Add custom views, actions, filters, and templates.

---

### Typical Usage
- Quickly manage site content and users in development and production.
- Administer data via a clean, responsive UI without custom coding.
- Customize the admin to fit administrative workflows and business needs.

In summary, Django Admin provides an automatically generated, customizable interface for efficiently managing data and permissions, saving time in backend content management.