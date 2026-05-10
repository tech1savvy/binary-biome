---
id: post-redirect-get
aliases: []
tags: []
noteId: 1777823464572
---

What is the POST-Redirect-GET pattern and how is it implemented in Django?

---

- The POST-Redirect-GET (PRG) pattern **prevents** _duplicate form submissions_ by redirecting after a successful POST request.
- After processing a POST request, the view returns an HTTP redirect (usually with `HttpResponseRedirect`).
- The browser then issues a GET request to the new URL, preventing resubmission if the user refreshes the page.

---

- Example:

```python
def my_view(request):
    if request.method == 'POST':
        form = MyForm(request.POST)
        if form.is_valid():
            # process data
            return redirect('success-url')
    else:
        form = MyForm()
    return render(request, 'template.html', {'form': form})
```
