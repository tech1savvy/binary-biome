---
modified_time: 04-05-25, 13:54
---
# Introduction

- Controllers in Laravel **handle** the *application's logic* and **serve** as a *bridge between routes and views*.
-  They help **organize code by** *grouping* related *request-handling logic* into a single class.

# Creating a Controller

You can create a controller using the Artisan command:

```bash
php artisan make:controller SampleController
```

This generates a new controller file inside the `app/Http/Controllers` directory.

# Basic Controller Structure

```php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SampleController extends Controller {
    public function index() {
        return "Hello from SampleController";
    }
}
```

# Defining Routes for Controllers

To define a route that uses a controller method:

```php
use App\Http\Controllers\SampleController;

Route::get('/sampleControllerRoute', [SampleController::class, 'index']);
```

# Passing Data to Views from Controllers

```php
class SampleController extends Controller {
    public function show() {
        return view('demo.show', ['message' => 'Hello from Controller']);
    }
}
```

In `sample.blade.php`:

```php
<p>{{ $message }}</p>
```

# Restful Resource Controllers

To create a controller with *predefined methods for CRUD* operations:

```bash
php artisan make:controller ProductController --resource
```

This generates a controller with methods like `index`, `create`, `store`, `edit`, `update`, and `destroy`.

To register a resource controller in routes:

```php
Route::resource('products', ProductController::class);
```

# How a Resource Controller is RESTful

A resource controller in Laravel follows RESTful principles by mapping standard HTTP methods to predefined actions:

| HTTP Method | URI                   | Controller Method | Purpose                     |
| ----------- | --------------------- | ----------------- | --------------------------- |
| GET         | `/products`           | `index()`         | Retrieve all products       |
| GET         | `/products/{id}`      | `show()`          | Retrieve a specific product |
| GET         | `/products/create`    | `create()`        | Show form to create product |
| POST        | `/products`           | `store()`         | Save new product            |
| GET         | `/products/{id}/edit` | `edit()`          | Show form to edit product   |
| PUT/PATCH   | `/products/{id}`      | `update()`        | Update existing product     |
| DELETE      | `/products/{id}`      | `destroy()`       | Delete a product            |

This structure follows REST principles by using meaningful URIs and HTTP methods to perform CRUD operations in a predictable, standardized way.

# Middleware in Controllers

Middleware can be applied to controllers to filter requests:

```php
class AdminController extends Controller {
    public function __construct() {
        $this->middleware('admin');
    }
}
```

# Conclusion

Laravel controllers help keep application logic structured and maintainable. They allow data handling, middleware implementation, and resource management efficiently.