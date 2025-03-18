---
modified_time: 19-03-25, 00:19
---
# Laravel Routing

## Introduction to Routing in Laravel

Routing in Laravel is the process of defining how the application responds to different ==HTTP requests==. It directs requests to the appropriate controller methods or directly returns responses.

## Defining Routes

Routes in Laravel are defined in the ==`routes/web.php`== or `routes/api.php` files.

## Basic Routing

A simple route that returns a string:

```php
Route::get('/hello', function () {
    return 'Hello, World!';
});
```
- The function above is a know as [^1]anonymous function and ==closure==.

## Routing with Parameters

### Required Parameters:
- gives ==404== error otherwise
```php
Route::get('/user/{id}', function ($id) {
    return 'User ID: ' . $id;
});
```
- Incase need to pass multiple parameters:
```php
Route::get('/user/id/{id}/name/{name}', function ($id,$name) {
    return 'User ID: ' . $id. ' & Name: ' . $name;
});
```

### Optional Parameters:

```php
Route::get('/user/{name?}', function ($name = 'Guest') {
    return 'User Name: ' . $name;
});
```

## Named Routes

Named routes allow for easy ==URL generation==:

```php
Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
```

To generate a URL for this route:

```php
$url = route('dashboard');
```

## Parameter Constraints

You can *restrict* route parameters using regular expressions:

```php
Route::get('/user/{age}', function ($age) {
    return "user age: " . $age;
})->where('age', '[0-9]+');
```

## Global Constraints
- To enforce a route parameter to always match a specific regular expression, you can use the `pattern` method. Define these patterns within the `boot` method of your `App\Providers\RouteServiceProvider` class:

```php
public function boot()
{
    Route::pattern('id', '[0-9]+');
}
```

- Once a pattern is defined, it will automatically be applied to all routes that use the corresponding parameter name:

```php
Route::get('/user/{id}', function ($id) {
    // Only executed if {id} is numeric...
});
```

---
# Advanced Section

### Secure Routes

Using middleware to secure routes:

```php
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return 'Secure Dashboard';
    })->name('dashboard');
});
```

## Route Groups

Organizing routes with shared attributes:

```php
Route::middleware(['auth'])->group(function () {
    Route::get('/account', function () {
        return 'User Account';
    });
});
```

## Route Prefixing

Adding a prefix to a group of routes:

```php
Route::prefix('admin')->group(function () {
    Route::get('/users', function () {
        return 'Admin Users';
    });
});
```

## Domain Routing

Handling multiple subdomains:

```php
Route::domain('admin.example.com')->group(function () {
    Route::get('/users', function () {
        return 'Admin Panel';
    });
});
```

## URL Generation

### The Current URL

Retrieve the current URL:

```php
$currentUrl = url()->current();
```

### Generating Framework URLs

Generate URLs for named routes:

```php
$url = route('dashboard');
```

### Asset URLs

Generating URLs for assets:

```php
$assetUrl = asset('css/style.css');
```

### Generation Shortcuts

Using helper functions for quick URL generation:

```php
$url = action([App\Http\Controllers\HomeController::class, 'index']);
```

[^1]: ```php
	$helloWorld = function() {
	    return 'Hello, World!';
	};
	
	echo $helloWorld();  // Outputs: Hello, World!
	```
