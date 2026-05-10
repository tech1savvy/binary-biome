---
id: foreign-key
aliases: []
tags: []
noteId: 1777823463723
---

To build the Django e-commerce site with user authentication and product reviews as described, here’s the foundational information you need to design the core models, forms, and templates:

## Models

- **User:**
  - Custom user model (extending `AbstractUser`) with `username`, `email`, `password`, and `phone_number` fields.
- **Product:**
  - Model with `title`, `description`, `price`, `category`, and `image` fields.
- **Review:**
  - Model with `content`, `author` (ForeignKey to User), `product` (ForeignKey to Product), and `rating` (integer).

## Templates

- **Base Template:**
  - Combines header, navigation, and footer using template inheritance for site consistency.
- **Product Detail Template:**
  - Displays product details: title, description, price, category, image, and a form to submit reviews.

## User Authentication Templates

- Create forms and templates for registration and login, both collecting username, email, password, and phone number, with strong validation for format, uniqueness, and required fields.

## Forms

- **User Registration Form:**
  - Handles fields for username, email, password, phone, and address. Includes validation for unique emails/usernames, password strength, and requiredness.
- **Login Form:**
  - Username and password fields, with validation and feedback.
- **Product Review Form:**
  - Fields for review content, integer rating, (optional) image, validated for type/size, and image format.

## Validation & Security

- Ensure server-side field validation.
- Use Django’s built-in password management for secure hashes.
- Restrict review submission to authenticated users, usually one review per user per product.
- Validate all file/image uploads by type and size.

---

## 1. models.py

```python
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)

class Product(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='products/')

    def __str__(self):
        return self.title

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    rating = models.PositiveIntegerField()
    image = models.ImageField(upload_to='reviews/', blank=True, null=True)

    def __str__(self):
        return f'Review by {self.author.username} for {self.product.title}'
```

- It cascades the delete action: when the referenced object is deleted, all objects that have a ForeignKey pointing to it will also be deleted automatically.
- This creates a "cascade effect," ensuring that dependent or related objects do not remain orphaned in the database.
- For example, if you have a Product model and Review model with a foreign key from Review to Product using on_delete=models.CASCADE, deleting a Product will also delete all the Review instances related to that product.

---

## 2. forms.py

```python
from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import User, Review

class UserRegistrationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    phone_number = forms.CharField(required=False)
    address = forms.CharField(widget=forms.Textarea, required=False)

    class Meta:
        model = User
        fields = ['username', 'email', 'phone_number', 'address', 'password1', 'password2']

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError('Email already exists.')
        return email

class LoginForm(AuthenticationForm):
    username = forms.CharField(max_length=150, required=True)
    password = forms.CharField(widget=forms.PasswordInput, required=True)

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = ['content', 'rating', 'image']

    def clean_rating(self):
        rating = self.cleaned_data.get('rating')
        if rating < 1 or rating > 5:
            raise forms.ValidationError('Rating must be between 1 and 5.')
        return rating
```

---

## 3. views.py

```python
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from .models import Product
from .forms import UserRegistrationForm, LoginForm, ReviewForm

def register_view(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('product_list')
    else:
        form = UserRegistrationForm()
    return render(request, 'register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('product_list')
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('login')

def product_detail(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    reviews = product.reviews.all()

    if request.method == 'POST':
        if not request.user.is_authenticated:
            return redirect('login')
        form = ReviewForm(request.POST, request.FILES)
        if form.is_valid():
            review = form.save(commit=False)
            review.author = request.user
            review.product = product
            review.save()
            return redirect('product_detail', product_id=product.id)
    else:
        form = ReviewForm()

    context = {
        'product': product,
        'reviews': reviews,
        'form': form,
    }
    return render(request, 'product_detail.html', context)
```

---

## 4. base.html (template)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{% block title %}E-commerce Site{% endblock %}</title>
  </head>
  <body>
    <header>
      <nav>
        <a href="{% url 'product_list' %}">Home</a>
        {% if user.is_authenticated %}
        <span>Welcome {{ user.username }}</span>
        <a href="{% url 'logout' %}">Logout</a>
        {% else %}
        <a href="{% url 'login' %}">Login</a>
        <a href="{% url 'register' %}">Register</a>
        {% endif %}
      </nav>
    </header>
    <main>{% block content %}{% endblock %}</main>
    <footer>
      <p>&copy; 2025 E-commerce Site</p>
    </footer>
  </body>
</html>
```

---

## 5. product_detail.html (template)

```html
{% extends 'base.html' %} {% block title %}{{ product.title }}{% endblock %} {%
block content %}
<h1>{{ product.title }}</h1>
<img src="{{ product.image.url }}" alt="{{ product.title }}" />
<p>{{ product.description }}</p>
<p>Price: {{ product.price }}</p>
<p>Category: {{ product.category }}</p>

<h2>Reviews</h2>
<ul>
  {% for review in reviews %}
  <li>
    <strong>{{ review.author.username }}:</strong> {{ review.content }} -
    Rating: {{ review.rating }} {% if review.image %}
    <img
      src="{{ review.image.url }}"
      alt="Review Image"
      style="max-width:200px;"
    />
    {% endif %}
  </li>
  {% empty %}
  <li>No reviews yet.</li>
  {% endfor %}
</ul>

{% if user.is_authenticated %}
<h3>Submit Review</h3>
<form method="post" enctype="multipart/form-data">
  {% csrf_token %} {{ form.as_p }}
  <button type="submit">Submit</button>
</form>
{% else %}
<p><a href="{% url 'login' %}">Login</a> to submit a review.</p>
{% endif %} {% endblock %}
```

---

## 6. register.html and login.html

Use similar structures to render registration and login forms with `{% csrf_token %}` and `{{ form.as_p }}`.
