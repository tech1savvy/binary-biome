---
id: polling
aliases: []
tags: []
noteId: 1777823463746
---

To build the described polling application with user authentication and voting in Django, here is a detailed outline with code snippets for the key components:

---

## Models

1. Custom User Model with extra fields (username, email, password, phone, role):

```python
# models.py (in users or accounts app)

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=15, blank=True)
    ROLE_CHOICES = [
        ('user', 'User'),
        ('owner', 'Owner'),
        ('admin', 'Admin'),
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')

    def __str__(self):
        return self.username
```

2. Poll Model with title, description, start_date, end_date:

```python
# models.py (polls app)

from django.db import models

class poll(models.model):
    title = models.charfield(max_length=200)
    description = models.textfield()
    start_date = models.datetimefield()
    end_date = models.datetimefield()

    def __str__(self):
        return self.title
```

3. vote model representing a user’s vote on a poll:

```python
# models.py (polls app)

from django.conf import settings

class vote(models.model):
    poll = models.foreignkey(poll, on_delete=models.cascade)
    voter = models.foreignkey(settings.auth_user_model, on_delete=models.cascade)
    selected_option = models.charfield(max_length=200)

    class meta:
        unique_together = ('poll', 'voter')  # ensure one vote per user per poll

    def __str__(self):
        return f"{self.voter.username} voted on {self.poll.title}"
```

---

## Forms

1. User Registration Form with validation:

```python
# forms.py (users/accounts app)

from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class UserRegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    phone = forms.CharField(required=True)
    role = forms.ChoiceField(choices=CustomUser.ROLE_CHOICES)
    consent = forms.BooleanField(required=True, label="I consent to the terms and conditions")

    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'phone', 'password1', 'password2', 'role')

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if CustomUser.objects.filter(email=email).exists():
            raise forms.ValidationError("Email already registered")
        return email
```

2. Login Form:

```python
# forms.py (users/accounts app)

from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(max_length=150)
    password = forms.CharField(widget=forms.PasswordInput)
```

3. Voting Form (dynamic options from poll):

```python
# forms.py (polls app)

from django import forms

class VoteForm(forms.Form):
    selected_option = forms.ChoiceField(widget=forms.RadioSelect)

    def __init__(self, poll_options, *args, **kwargs):
        super().__init__(*args, **kwargs)
        choices = [(option, option) for option in poll_options]
        self.fields['selected_option'].choices = choices
```

---

## Views (examples)

- User Registration View:

```python
# views.py (users/accounts app)

from django.shortcuts import render, redirect
from .forms import UserRegistrationForm
from django.contrib import messages

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Registration successful. Please log in.")
            return redirect('login')
    else:
        form = UserRegistrationForm()
    return render(request, 'registration/register.html', {'form': form})
```

- Login View:

```python
# views.py (users/accounts app)

from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from .forms import LoginForm
from django.contrib import messages

def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password'])
            if user is not None:
                login(request, user)
                return redirect('poll_list')
            else:
                messages.error(request, "Invalid username or password")
    else:
        form = LoginForm()
    return render(request, 'registration/login.html', {'form': form})
```

- Poll Detail and Vote View (with vote-once enforcement):

```python
# views.py (polls app)

from django.shortcuts import render, get_object_or_404, redirect
from .models import Poll, Vote
from .forms import VoteForm
from django.contrib.auth.decorators import login_required
from django.contrib import messages

@login_required
def poll_detail(request, poll_id):
    poll = get_object_or_404(Poll, id=poll_id)
    poll_options = ["Option 1", "Option 2", "Option 3"]  # Replace with real poll options

    user_vote = Vote.objects.filter(poll=poll, voter=request.user).first()

    if request.method == 'POST':
        if user_vote:
            messages.error(request, "You have already voted on this poll.")
            return redirect('poll_detail', poll_id=poll.id)
        form = VoteForm(poll_options, request.POST)
        if form.is_valid():
            Vote.objects.create(
                poll=poll,
                voter=request.user,
                selected_option=form.cleaned_data['selected_option']
            )
            messages.success(request, "Your vote has been recorded.")
            return redirect('poll_detail', poll_id=poll.id)
    else:
        form = VoteForm(poll_options)

    context = {
        'poll': poll,
        'form': form,
        'user_vote': user_vote,
    }
    return render(request, 'polls/poll_detail.html', context)
```

---

## Templates

- Base template with header, navigation, and footer (base.html).
- User registration and login HTML templates extending base.html.
- Poll detail template showing poll info, options, vote form, and vote status.

---

## Summary

- Create a **custom user model** to add phone and role fields.
- **Poll and Vote models** store polls and user votes; use `unique_together` to enforce one vote per user per poll.
- Implement **forms** for user registration (with validation), login, and dynamic voting.
- Implement **views** for user registration, login, poll detail, and voting with vote-once validation.
- Design **templates** to display consistent UI and forms.

This approach leverages Django’s built-in features for authentication, form validation, and database modeling to build a secure, functional polling application with user authentication and voting restrictions. Further enhancements may include adding poll options as a model, real-time results, and role-based access.

If detailed code examples for any component or further clarifications are needed, please specify.
