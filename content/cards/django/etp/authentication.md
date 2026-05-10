---
id: authentication
aliases: []
tags: []
noteId: 1777823463673
---

The question asks how to build a blogging CMS in Django with the following features:

- Use template inheritance to create a base template (`base.html`) with common elements like header, footer, and navigation, and extend it in other templates for consistency.
- Define Django models for blog posts and comments: posts have title, content, author (linked to the user), publication date, etc.; comments have content, author (user), publication date, and link to a post.
- Implement Django forms for creating and editing blog posts with fields like title and content, including validation for required fields.
- Create views to show a list of posts, individual posts with comments, and forms for creating and editing posts, using template inheritance for page rendering.
- Integrate Django user authentication to restrict creating and editing posts only to logged-in users.

In short, the question requests how to implement template structure, data models, forms, views, and auth restrictions for a blog CMS in Django.

---

To implement the described blogging platform CMS in Django that supports template inheritance, models, forms, views, and user authentication, here is a guideline broken down into key parts:

## Template Inheritance

- Create a base template `base.html` with common elements (header, footer, navigation bar).
- Use `{% block %}` tags in the base template to define sections that child templates can override.
- In child templates like `post_list.html` or `post_detail.html`, extend the base with `{% extends 'base.html' %}` and fill in content blocks.

Example of base.html structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{% block title %}My Blog{% endblock %}</title>
    <!-- add CSS/JS -->
  </head>
  <body>
    <header>
      <nav>
        <!-- menu links -->
      </nav>
    </header>

    <main>
      {% block content %}
      <!-- main content goes here -->
      {% endblock %}
    </main>

    <footer>&copy; 2025 My Blog</footer>
  </body>
</html>
```

This setup promotes reuse and consistent layout across all pages.[1][2]

## Models for Blog Posts and Comments

Define Django models in `models.py`:

```python
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    publication_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    publication_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'Comment by {self.author} on {self.post}'
```

- `Post` links to Django User for author.
- `Comment` links both to `Post` and User as author.
- Use `related_name` to access comments from a post instance.[3][4]

## Forms for Creating and Editing Blog Posts

Use Django forms (in `forms.py`):

```python
from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content']

    def clean_title(self):
        title = self.cleaned_data.get('title')
        if not title:
            raise forms.ValidationError('Title is required')
        return title
```

- Use ModelForm for easy creation/editing.
- Add validation in clean methods if needed.[5]

## Views for Displaying and Editing Posts

In `views.py`, class or function views to handle:

- List all posts
- Show post detail with comments
- Create/edit post (authenticated users only)

Example with function views:

```python
from django.shortcuts import render, get_object_or_404, redirect
from .models import Post
from .forms import PostForm
from django.contrib.auth.decorators import login_required

def post_list(request):
    posts = Post.objects.all().order_by('-publication_date')
    return render(request, 'post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    comments = post.comments.all()
    return render(request, 'post_detail.html', {'post': post, 'comments': comments})

@login_required
def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'post_form.html', {'form': form})

@login_required
def edit_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.user != post.author:
        return redirect('post_detail', pk=post.pk)
    if request.method == 'POST':
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, 'post_form.html', {'form': form})
```

Use template inheritance in these templates to keep a consistent UI.[6][5]

## Integration with User Authentication

- Use Django’s built-in authentication system.
- Decorate create/edit views with `@login_required` so only logged-in users can access.
- Optionally, restrict edit view to the original author.
- Use `request.user` to get the logged-in user.
- Set up login/logout views using Django auth views or custom ones.

Example:

```python
from django.contrib.auth.decorators import login_required
```
