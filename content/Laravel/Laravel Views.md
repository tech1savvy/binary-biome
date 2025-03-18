---
modified_time: 19-03-25, 00:43
forward: "[[Laravel Blade Templating Engine]]"
---
# Laravel Views

## Introduction to Views in Laravel

Views in Laravel separate the ==presentation logic== from the application logic. They are stored in the ==`resources/views/`== directory and typically use the *Blade templating engine*.

## Creating a View in Laravel

### Using Artisan Command

In Laravel version 10.23.0 and later, you can create a view using the built-in Artisan command:

```bash
php artisan make:view <view-name>
```

This command generates a new Blade view file named `example.blade.php` in the `resources/views` directory.

### Manually Creating a View

1. Navigate to `resources/views/`.
2. Create a new Blade file, e.g., `example.blade.php`.
3. Add the following content:

```php
<!DOCTYPE html>
<html>
<head>
    <title>Example View</title>
</head>
<body>
    <h1>Welcome to Laravel</h1>
</body>
</html>
```

## Returning a View in a Route or Controller

To return a view from a route:
- we use `view()` helper function.
```php
Route::get('/welcome', function () {
    return view('welcome');
});
```

### Nested View
- Views can be stored in subdirectories within `resources/views`.
- Use *dot notation* to reference these views.
- Example: 
	- If the view is at `resources/views/admin/profile.blade.php`, reference it as:
 ```php
return view('admin.profile');
```


## Passing Data to Views

### Passing a Single Variable

```php
Route::get('/user/{name}', function ($name) {
    return view('user', ['name' => $name]);
});
```

In the `user.blade.php` file:

```php
<h1>Hello, {{ $name }}</h1>
```

### Passing Multiple Variables

```php
Route::get('/profile', function () {
    return view('profile', [
        'name' => 'John',
        'age' => 25
    ]);
});
```

In `profile.blade.php`:

```php
<p>Name: {{ $name }}</p>
<p>Age: {{ $age }}</p>
```

### Using `with` helper function
```php
Route::get('/user',function(){
    return view('user')
    ->with('name','akon')
    ->with('age',18);
})
```


## Sharing Data with All Views
- In boot method of `AppServiceProvider`, add
```php
public function boot(){
	View->share('key', 'value');
}
```