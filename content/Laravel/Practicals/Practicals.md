---
modified_time: 04-05-25, 23:09
---
# Section A: Controllers, Routing, and Blade Templates (30 Marks)

## 1. Creating Basic Controllers (5 Marks)

- **Task**: Create a controller named `PageController` using the Artisan command.
- **Methods**:
  - `showHome()`: Returns `home.blade.php` view with message _"Welcome to Laravel"_
  - `showAbout()`: Returns `about.blade.php` view with message _"About Us"_
---
```bash
php artisan make:controller PageController
```

```php
public function showHome()
{
	return view('home', ['message' => 'Welcome to Laravel']);
}

public function showAbout()
{
	return view('about', ['message' => 'About Us']);
}
```

```bash
php artisan make:view home
```

```php
<!-- home.blade.php -->
<h1>{{ $message }}</h1>
```

```bash
php artisan make:view aboutus
```

```php
<!-- aboutus.blade.php -->
<h1>{{ $message }}</h1>
```

## 2. Controller Routing (5 Marks)

- **Task**: Define routes in `routes/web.php` mapping to the methods in `PageController`.
- **Requirements**:
  - Home route should be named `home`.
  - Must display the homepage view.
- **Submit**:
  - Code for routing and controller methods.
---
```php
// web.php
use App\Http\Controllers\PageController;

// Home route (named 'home')
Route::get('/', [PageController::class, 'showHome'])->name('home');

// About route
Route::get('/about', [PageController::class, 'showAbout']);
```

## 3. Blade Templates and Inheritance (5 Marks)

- **Task**:
  - Create a base layout in `layouts/app.blade.php` (includes header and footer).
  - Create a child view extending the base layout with dynamic title/content.
- **Submit**:
  - Code for the base layout and child view.
  - Screenshot showing the rendered page with inheritance.
---
```bash
php artisan make:view layouts.app
```

```php
<!-- views/layouts/app.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title')</title>
</head>
<body>
    <header>
        <h1>Header Section</h1>
    </header>

    <div class="container">
        @yield('content')
    </div>

    <footer>
        <p>Footer Section</p>
    </footer>
</body>
</html>
```

```bash
php artisan make:view child
```

```php
```php
<!-- views/child.blade.php -->
@extends('layouts.app')

@section('title', 'Dynamic Page Title')

@section('content')
    <h2>This is the child view content.</h2>
    <p>The title and content are dynamic and provided by the child view.</p>
@endsection
```

## 4. Advanced Routing - Named Routes (5 Marks)

- **Task**:
  - Create a named route `home` pointing to `showHome()` method.
  - Create a redirection route using `redirect()` to the `home` route.
- **Submit**:
  - Code for both routes and redirection logic.
  - Screenshot showing successful redirection.
---
```php
// routes/web.php
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

// Named 'home' route pointing to showHome()
Route::get('/home', [PageController::class, 'showHome'])->name('home');

// Redirection route that redirects to 'home'
Route::get('/go-home', function () {
    return redirect()->route('home');
});
```

## 5. Secure Routes and Middleware (5 Marks)

- **Task**:
  - Create a route group using `auth` middleware.
  - Include at least one protected route (`/profile`) showing the user profile.
- **Submit**:
  - Code for middleware and route group.
  - Explanation of middleware functionality.
---
```php
// -- routes/web.php --
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'show'])->name('profile');
});
```

```php
// -- app/Http/Controllers/ProfileController.php --
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function show(Request $request)
    {
        return view('profile', ['user' => $request->user()]);
    }
}
```

## 6. Advanced Routing - Parameter Constraints and Route Prefixing (5 Marks)

- **Task**:
  - Define a route with parameter `product/{id}` and enforce numeric constraint.
  - Group product-related routes under `/products` prefix.
- **Submit**:
  - Code for route constraints and prefixing.
  - Explanation of route constraints and prefixing.
---
```php
// -- routes/web.php --
use Illuminate\Support\Facades\Route;

// Group product-related routes under '/products' prefix
Route::prefix('products')->group(function () {
    // Route with numeric constraint for {id}
    Route::get('product/{id}', function ($id) {
        return "Product ID: $id";
    })->whereNumber('id'); // Enforces numeric parameter
    
    // Add other product routes here
});
```

# Section B: Request Data, Emails, and Localization (20 Marks)

## 1. Request Data Retrieval and Old Input (5 Marks)

- **Task**:
  - Create a contact form with fields: name, email, and message.
  - Retrieve data using the `Request` class and display old input after validation failure.
- **Submit**:
  - Code for form, controller method, and validation.
  - Screenshot showing old input after failed submission.
---
![[Login & Register#Register View]]

```php
// -- routes/web.php --

Route::get('register', [AuthController::class, 'showRegistrationForm'])->name('register');
Route::post('register', [AuthController::class, 'register']);
```

```php
// -- Controller
public function showRegistrationForm()
    {
        return view('auth.register');
    }

    public function register(Request $request)
    {
        $data = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|min:6|confirmed',
        ]);
        
        $user = User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        Auth::login($user);
        
        return redirect('/');
    }
```

## <u>2. Uploading Files and Storing Cookies (5 Marks)</u>

- **Task**:
  - Create a form to upload a file (e.g., profile picture).
    - [[Upload Files]]
  - Store uploaded file in `storage/app/public`.
  - Set a cookie for user preference (e.g., theme).
    - [[Cookie]]
- **Submit**:
  - Code for form, upload logic, and cookies.
  - Screenshot showing upload and cookie data.

## <u>3. Sending Emails (5 Marks)</u>

- **Task**:
  - Create route and controller to send an email when contact form is submitted.
  - Use `Mail` facade to send name, email, and message.
- **Submit**:
  - Code for form, controller, and email logic.
  - Screenshot of email sent (or log for testing).
---
- [[Emails]]

## <u>4. Localization (5 Marks)</u>

- **Task**:
  - Set up localization for English and Spanish.
  - Create route showing localized greeting based on selected language.
- **Submit**:
  - Code for localization setup and route logic.
  - Screenshot showing greetings in both languages.
---
- [[Localization]]

# Section C: Form Validation and Session Handling (20 Marks)

## 1. <u>Form Validation with CSRF Protection (5 Marks)</u>

- **Task**:
  - Create a registration form with name, email, and password.
  - Add validation:
    - `name`: required and string
    - `email`: valid and unique
    - `password`: min 8 chars
  - Include CSRF token.
- **Submit**:
 ### Form ![[Login & Register#Register View]] 
```php
// -- routes/web.php --

Route::get('register', [AuthController::class, 'showRegistrationForm'])->name('register');
Route::post('register', [AuthController::class, 'register']);
```

```php
// -- Controller
public function showRegistrationForm()
    {
        return view('auth.register');
    }

    public function register(Request $request)
    {
        $data = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:users,email',
            'password' => 'required|min:6|confirmed',
        ]);
        
        $user = User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        Auth::login($user);
        
        return redirect('/');
    }
```

## 2. Session Management (5 Marks)

- **Task**:
  - Store user's name in session after form submission.
  - Redirect and display “Welcome, [user name]”.
- **Submit**:
  - Code for session storage and redirection.
  - Screenshot showing session data after redirect.
---
- Add in the above controller's `showRegestrationFrom()` method
```php
// Store user's name in session     
Session::put('user_name', $user->name);

return redirect('/')->with('welcome', 'Welcome, ' . $user->name);
```

```php
<!-- welcome.blade.php -->
 @if(session('user_name'))
        <p>Welcome: {{ session('user_name') }}</p>
    @endif
```

## 3. Re-populating Forms after Validation Failures (5 Marks)

- **Task**:
  - Modify registration form to re-populate fields on validation failure.
- **Submit**:
  - Code for form and validation logic.
  - Screenshot showing repopulated form after error.
---
- `Previously Implemented`

## 4. Deleting Session Data (5 Marks)

- **Task**:
  - Create route and controller method to delete user's name from session.
  - Redirect with confirmation message.
- **Submit**:
  - Code for session deletion and redirection logic.
---
```php
Route::post('logout', [AuthController::class, 'logout'])->name('logout');
```

```php
use Illuminate\Support\Facades\Session;

public function logout(Request $request)
    {
	    // delete session key
        Session::forget('user_name');

		// redirect with confirmation
        return redirect('/')->with('status', 'Your name has been removed from the session.');
    }
```

# Section D: Database and Eloquent ORM (20 Marks)

- [[Product Resource Controller]]
- [Perplexity](https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA)

## 1. Model Creation and Migration (5 Marks)

- **Task**:
  - Create `Product` model and migration for `products` table with:
    - `name` (string)
    - `price` (decimal)
    - `description` (text)
  - Run migration.
- **Submit**:
  - Code for model and migration.
  - Screenshot of `products` table in database.

## 2. CRUD Operations Using Eloquent ORM (5 Marks)

- **Task**:
  - Use Eloquent to:
    - Create a product
    - Retrieve all products
    - Update a product’s price
    - Delete a product
- **Submit**:
  - Code for all CRUD operations.

## 3. Database Seeding (5 Marks)

- **Task**:
  - Create `ProductSeeder` to insert 10 sample products.
  - Run the seeder.
- **Submit**:
  - Seeder code.
  - Screenshot of inserted data.

## 4. Implementing REST APIs (5 Marks)

- **Task**:
  - Create REST API endpoints for `Product`:
    - `GET /api/products`: List products
    - `POST /api/products`: Create product
    - `PUT /api/products/{id}`: Update price
    - `DELETE /api/products/{id}`: Delete product
- **Submit**:
  - API route and controller code.
  - Sample API request/response (Postman or cURL).

# Section E: Middleware, Routing, and Advanced Features (30 Marks)

## 7. Create a Custom Middleware (5 Marks)

- **Task**:
  - Create a middleware called `CheckUserAge` to ensure the user is over 18.
  - Apply this middleware to a route `/restricted` that returns *"Access Granted"- if allowed.
- **Submit**:
  - Code for middleware and routes.
  - Explanation of how the middleware works.
---
- [perplexity.ai](https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#1)

## 8. Secure Routes with Middleware (5 Marks)

- **Task**:
  - Create `/admin/dashboard` route protected by `auth` middleware.
  - Redirect unauthenticated users to the login page.
- **Submit**:
  - Code for the route and middleware logic.
  - Screenshot showing redirection for unauthenticated users.
---
- [perplexity.ai](https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#2)

## 9. Advanced Routing: Route Groups and Prefixing (5 Marks)

- **Task**:
  - Create a group of routes prefixed with `/admin` using `admin` middleware.
  - Define:
    - `/admin/users` → returns "Users"
    - `/admin/products` → returns "Products"
- **Submit**:
  - Code for route group and middleware.
  - Explanation of how route groups and middleware work together.
---
- [perplexity.ai](https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#3)

## 10. Parameter Constraints with Route (5 Marks)

- **Task**:
  - Create `product/{id}` route where `id` must be numeric.
  - Redirect to 404 error page if not numeric.
- **Submit**:
  - Code for route and constraint.
  - Screenshot showing 404 redirection for invalid input.
---
- `Previously Implemented`

## 11. URL Generation and Asset Management (5 Marks)

- **Task**:
  - Create a route that displays:
    - The current URL
    - The URL to an asset (e.g., image or CSS file)
- **Submit**:
  - Code using Laravel’s helper functions.
  - Screenshot showing generated URLs.
---
- [perplexity.ai](https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#4)

## 12. Domain Routing (5 Marks)

- **Task**:
  - Create domain-specific routes:
    - `example.com/product/{id}` for product details
    - `admin.example.com/dashboard` for admin dashboard
- **Submit**:
  - Code for domain-specific routing.
  - Explanation of how domain routing works.
---
- [perplexity.ai](https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#5)

# Section F: Request Handling and Eloquent Relationships (30 Marks)

## 1. Handling Request Data (5 Marks)

- **Task**:
  - Create `/contact` route with form: name, email, message.
  - On submit, use `Request` to retrieve and display data.
- **Submit**:
  - Code for form and controller.
  - Screenshot of displayed data.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#6

## 2. Handling Old Input and Flash Messages (5 Marks)

- **Task**:
  - Modify contact form to preserve old input after validation failure.
  - Show a flash message on successful submission.
- **Submit**:
  - Code for old input and flash handling.
  - Screenshot showing both scenarios.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#7

## 3. Eloquent Relationships: One-to-Many (5 Marks)

- **Task**:
  - Create `Post` and `Comment` models with one-to-many relationship.
  - Create route to display a post and its comments.
- **Submit**:
  - Code for models, migrations, and route.
  - Screenshot of output showing comments for a post.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#8
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#9

## 4. Eloquent Relationships: Many-to-Many (5 Marks)

- **Task**:
  - Create `Student` and `Course` models with many-to-many relationship.
  - Create a route showing courses a student is enrolled in.
- **Submit**:
  - Code for models, migrations, and route.
  - Screenshot showing student's courses.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#10
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#11
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#12

## 5. File Upload with Validation (5 Marks)

- **Task**:
  - Create a form to upload profile picture (JPEG, PNG).
  - Validate file type and size.
  - Store in `storage/app/public`.
- **Submit**:
  - Code for upload and validation.
  - Screenshot of successful upload.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#13

## 6. Sending Emails with Attachments (5 Marks)

- **Task**:
  - Create a form and controller to send an email with an attachment (e.g., profile picture).
  - Use Laravel’s `Mail` facade.
- **Submit**:
  - Code for form, controller, and email logic.
  - Screenshot of email with attachment.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#14

# Section G: Database, Migrations, Seeding, and CRUD Operations (20 Marks)

## 1. Model Creation and Migration (5 Marks)

- **Task**:
  - Create `Article` model and migration with:
    - `title` (string)
    - `content` (text)
    - `published_at` (timestamp)
- **Submit**:
  - Code for model and migration.
  - Screenshot of `articles` table in the database.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#15

## 2. Seeding Data into the Database (5 Marks)

- **Task**:
  - Create `ArticleSeeder` to insert at least 5 articles.
- **Submit**:
  - Seeder code.
  - Screenshot showing seeded data.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#16

## 3. CRUD Operations Using Query Builder (5 Marks)

- **Task**:
  - Using Query Builder:
    - Create new article
    - Retrieve all articles
    - Update content
    - Delete article
- **Submit**:
  - Code for CRUD operations.
  - Explanation of each operation.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#17

## 4. CRUD Operations Using Eloquent ORM (5 Marks)

- **Task**:
  - Perform same CRUD operations using Eloquent ORM.
- **Submit**:
  - Code for Eloquent CRUD.
  - Explanation of Eloquent usage.
---
- `Eloquent Eloquent Eloquent Eloquent Eloquent Eloquent`

# Section H: Testing, Validation, and Advanced Features (20 Marks)

## 1. Form Validation with Custom Rules (5 Marks)

- **Task**:
  - Create a form with:
    - `name`, `email`, `password`
  - Add custom validation: password must include at least one uppercase letter and one number.
- **Submit**:
  - Code for form, custom rule, and controller.
  - Screenshot of validation errors.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#18

## 2. Basic Unit Test in Laravel (5 Marks)

- **Task**:
  - Write a unit test for `Product` model to check saving functionality.
  - Use `assertDatabaseHas()`.
- **Submit**:
  - Test code.
  - Screenshot of test results.
---
-  https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#19
- [Install PHPTest](https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#20)

## 3. Testing the CRUD Operations (5 Marks)

- **Task**:
  - Write tests to verify:
    - Creating article via controller
    - Retrieving and displaying article
    - Deleting article
- **Submit**:
  - Test code.
  - Screenshot of test results.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#21

## 4. Advanced Relationship Query with Eager Loading (5 Marks)

- **Task**:
  - Use eager loading to retrieve articles and their comments.
  - Display article titles and associated comments.
- **Submit**:
  - Code for eager loading and display.
  - Screenshot showing article with comments.
---
- https://www.perplexity.ai/search/1-model-creation-and-migration-qSww49ruQ.OTZAxHDq6VZA#22