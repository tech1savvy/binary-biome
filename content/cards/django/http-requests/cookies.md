---
id: cookies
aliases: []
noteId: 1777823464697
---

How do you access cookies in a Django request object?

---

`request.COOKIES`

Example:

```python
def cookie_view(request):
    session_id = request.COOKIES.get('sessionid')  # None if not present
    resp = HttpResponse("OK")
    resp.set_cookie('visited', '1', max_age=3600)   # to set a cookie on response
    return resp
``` 