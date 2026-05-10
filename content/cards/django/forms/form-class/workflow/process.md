---
id: process
backward:
  - "[instantiate](instantiate.md)"
forward:
  - "[binding](binding.md)"
  - "[render](render.md)"
noteId: 1777823464422
---

How to process a Django form in a view?

---

```python
from .form import ContactForm
from django.shortcuts import redirect

def contact_view(request):
    # if this is a POST request we need to process the form data
    if request.method == "POST":
        # create a form instance and populate it with data (BINDING) from the request:
        form = ContactForm(request.POST) # bound form
        # check whether it's valid:
        if form.is_valid(): # VALIDATION
            # process the data in form.cleaned_data as required # PROCESSING values
            sender = form.cleaned_data['sender']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            
            # ...           

            # redirect to a new URL:
            return redirect("/thanks/")

    # if a GET (or any other method) we'll create a blank form
    else:
        form = ContactForm()

    return render(request, "contact.html", {"form": form})
```

---

- Instantiate the form with `request.POST` for POST requests.
- Use `form.is_valid()` to validate and access `form.cleaned_data`.
- Common processing: send emails, save to database, API calls, etc.
- Pass the form to the template context for rendering.
