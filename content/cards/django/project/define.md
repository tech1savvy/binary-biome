---
id: define
aliases: []
tags: []
noteId: 1777823465648
---

What is a Django project? Explain its structure?

---

- A Django project is the overall web application container that includes configuration and management settings.
- It represents the full site or service and serves as the entry point to run and manage the web application.

```
<projectname>/                 # Outer project container directory
├── manage.py                 # Command-line utility for project management
└── <projectname>/            # Inner project package directory with same name
    ├── __init__.py           # Marks this folder as a Python package
    ├── settings.py           # Project-wide configuration and settings
    ├── urls.py               # Root URL routing for the entire project
    ├── asgi.py               # ASGI application entry point for async support web server
    └── wsgi.py               # WSGI application entry point for traditional deployment web server
```
