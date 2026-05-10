---
id: registration-form
aliases: []
tags: []
noteId: 1777823463773
---

Here is the technical information necessary to implement secure user registration with file uploads in Django:

## Django Form Construction

- Define a **UserRegistrationForm** using `forms.ModelForm`, including fields for username, email, password+confirm, address, phone, country (choices), profile_pic (ImageField), signature (FileField), and consent (BooleanField).[1][2]
- Add server-side validators for required fields, regex for email, password confirmation, and custom file validators to check allowed extensions and file size (you can use or extend `validate_image_file_extension`).[3][4][5]

## Views and Form Handling

- Always bind both `request.POST` and `request.FILES` to the form when processing an upload in the view.
- Example:

````python
```python
from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password
from .forms import UserRegistrationForm

def user_registration_view(request):
    """
    Handles the user registration process, including form validation and file uploads.
    """
    if request.method == 'POST':
        # Instantiate the form with both POST data and FILES data
        form = UserRegistrationForm(request.POST, request.FILES)

        if form.is_valid():
            # The form is valid, so we can process the data.
            # We use form.save(commit=False) to create a model instance
            # without immediately saving it to the database.
            user = form.save(commit=False)

            # Manually hash the password before saving the user.
            # This is a crucial security step to avoid storing plain text passwords.
            user.password = make_password(form.cleaned_data['password'])

            # Now, save the user object to the database.
            # This will also handle the file uploads for profile_pic and signature.
            user.save()

            # Redirect to a success page, for example, the login page.
            return redirect('login')
    else:
        # If the request method is GET, create an empty form instance.
        form = UserRegistrationForm()

    # Render the registration template with the form.
    # If the form is invalid, it will contain the validation errors.
    return render(request, 'registration/register.html', {'form': form})
````

## Template Integration

- Render the form in HTML using `{{ form.as_p }}` or custom field rendering.
- Always use `enctype="multipart/form-data"` in the `<form>` tag to support file uploads:

```html
<form method="post" enctype="multipart/form-data">
  {% csrf_token %} {{ form.as_p }}
  <button type="submit">Register</button>
</form>
```

## CSRF Protection

- Include `{% csrf_token %}` inside the form (Django will verify the token for all POST requests).[6][7][8]

## Secure Password Storage

- Use Django’s built-in User model and password hashing (`set_password()` or `create_user()`), never save plain text passwords.[2][9]

## Safe File Storage and Validation

- Use Django’s storage backend (MEDIA_ROOT) and specify `upload_to` for each file field to set file path.
- Ensure validation for size and extension either in the form or with custom model methods.[4][3]
- For example, only allow files under a certain size (e.g., 2MB), and restrict types (JPEG, PNG).

## Example Components

### Model Example

```python
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=150)
    email = models.EmailField()
    password = models.CharField(max_length=128)
    address = models.TextField()
    phone = models.CharField(max_length=15)
    country = models.CharField(choices=[('IN', 'India'), ('US', 'USA')], max_length=2)
    profile_pic = models.ImageField(upload_to='profile_pics/')
    signature = models.FileField(upload_to='signatures/')
    consent = models.BooleanField()
```

### Form Example (with validation)

```python
from django import forms
from .models import User

class UserRegistrationForm(forms.ModelForm):
    confirm_password = forms.CharField(widget=forms.PasswordInput())
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'confirm_password', 'address', 'phone', 'country', 'profile_pic', 'signature', 'consent']

    def clean_email(self):
        email = self.cleaned_data.get('email')
        # Validate email format (django.core.validators can help)
        return email

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")
        if password != confirm_password:
            raise forms.ValidationError("Passwords do not match.")
        # File size/type validation can go here or in model
```

