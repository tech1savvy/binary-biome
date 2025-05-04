---
modified_time: 04-05-25, 12:33
---
# Overview
**Middleware** in Laravel **acts as** a *filtering mechanism* for HTTP requests entering your application. It allows you to inspect, modify, or reject requests before they reach your controllers, and similarly, you can manipulate responses before they are sent to the client.

```
0: Request
>> Middleware >> Controller >> Middleware >>
1: Response
```

# How Middleware Works
- When a request enters your Laravel application, it passes through a stack of middleware
- Each middleware can:
	- Access and modify the request.
	- Perform checks (e.g., authentication, logging).
	- Allow the request to continue to the next middleware or terminate the request early (e.g., redirect unauthenticated users).
- After the request is handled by the application, the response can also be passed back through middleware for further processing.

# Where they are registered?
- Laravel 11+:  `bootstrap/app.php`.
- Laravel 10 & below: `HTTP/Kernel.php` 

# Types of Middleware
## 1. Global Middleware
- Runs on every HTTP request to your application.
- Registered in the global middleware stack.

## 2. Route Middleware  
- Applied to specific routes or route groups.
- Registered with an alias for easy assignment to routes.

## 3. Middleware Groups  
- Collections of middleware that can be assigned to routes as a group.
- Laravel provides default `web` and `api` middleware groups for common use cases.

# Implementation
## Route Middlewares
### Creation
```bash
php artisan make:middleware AdminMiddleware
```
- This creates a new file in `app/Http/Middleware/`

## Define Middleware Logic
- Edit the `handle` method in your middleware class to implement your logic (e.g., authentication, redirects).
## Register Middleware
- Use the `$middlewareAliases` property (or, in older versions, `$routeMiddleware`) in `app/Http/Kernel.php` to assign an alias to your middleware class. For example:
### Laravel 11
```php
$app->withMiddleware(function (Middleware $middleware) {
    $middleware->alias([
        'admin' => \App\Http\Middleware\AdminMiddleware::class,
    ]);
});

```
### Laravel 10
```php
protected $middlewareAliases = [
    'admin' => \App\Http\Middleware\AdminMiddleware::class,
];
```
## Apply Middleware to Routes
```php
use App\Http\Controllers\AdminController;

Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])
    ->middleware('admin');
```

## Apply Middleware to Controllers
![[Controller#Middleware in Controllers]]