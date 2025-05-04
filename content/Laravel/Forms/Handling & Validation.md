---
modified_time: 04-05-25, 16:17
---
Laravel provides robust tools for secure and user-friendly form handling, including CSRF protection, built-in validation, error messaging, and automatic repopulation of form data.

---

# 1. Creating a Form in Blade

Use Blade’s `@csrf` directive to include a CSRF token for security:

```blade
<form method="POST" action="/submit">
    @csrf

    <input type="text" name="name" value="{{ old('name') }}">
    @error('name')
        {{ $message }}
    @enderror

    <input type="email" name="email" value="{{ old('email') }}">
    @error('email')
        {{ $message }}
    @enderror

    <button type="submit">Submit</button>
</form>
```

- `@csrf` protects against CSRF attacks.
- `old('field')` repopulates input after validation errors.
- `@error('field')` displays validation errors for each field.

---

# 2. Handling Form Submission in Controller

You can validate form data directly in your controller using the `validate()` method:

```php
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email',
    ], [
        'name.required' => 'Name is required.',
        'email.email' => 'Please enter a valid email address.',
    ]);

    // Process the validated data (e.g., save to database)
}
```

- This method automatically redirects back with errors and old input if validation fails.

---

# 3. Displaying Validation Errors in Blade

To show all validation errors at the top of your form:

```blade
@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
```

- The `$errors` variable is available in all Blade views after validation.

---

# 4. Custom Validation with Form Requests (Optional)

For complex forms, use a dedicated Form Request class:

```bash
php artisan make:request StoreDataRequest
```

In `StoreDataRequest.php`:

```php
public function rules()
{
    return [
        'name' => 'required|string|max:255',
        'email' => 'required|email',
    ];
}
```

Use it in your controller:

```php
public function store(StoreDataRequest $request)
{
    // $request is already validated
}
```

- Keeps controllers clean and validation logic organized.

---

# Summary Table

|Feature|How Laravel Handles It|
|---|---|
|CSRF Protection|`@csrf` directive in forms|
|Validation|`$request->validate([...])` or Form Request|
|Error Messages|`$errors` variable and `@error` directive|
|Repopulate Old Input|`old('field')` helper in Blade|

___