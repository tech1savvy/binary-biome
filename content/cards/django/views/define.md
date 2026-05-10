---
id: define
aliases: []
tags: []
noteId: 1777823467572
---

# What are Views in Django?

---

- Views in Django are Python _functions_ or _classes_ that **handle** web _requests_ and **return** web _responses_.

---

- They **act as **the _middle layer_ that **receives** _HTTP requests_,
  - **processes** any _business logic_ or data fetching with models, and
  - returns HTTP responses, typically rendering templates that produce HTML for display in the browser.
- Views are usually **defined in** a file called _views.py_ within a Django app.
- They connect URLs to Python code. URLs configured in `urls.py `call the corresponding view.
