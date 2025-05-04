---
modified_time: 01-05-25, 10:34
---

# `routes/`

## 1. `console.php`

- *Defines Artisan console commands* for CLI interactions, background tasks, and cron jobs.

```php
Artisan::command('greet {name}', function ($name) {
    $this->info("Hello, $name!");
})->describe('Greet someone via CLI');
```

---

## 2. `web.php`

- *Defines web routes* with session state, CSRF protection, and authentication.

```php
use Illuminate\Support\Facades\Route;
Route::get('/', function () {
    return view('welcome');
});
```

---

# `resources/`

## 1. `css/`

- Contains CSS files for styling.
  **Files:**
- `app.css` – Main stylesheet.

---

## 2. `js/`

- Contains JavaScript files for frontend functionality.
  **Files:**
- `app.js` – Main JavaScript file.
- `bootstrap.js` – Initializes JavaScript dependencies.

---

## 3. `views/`

- Contains Blade templates for rendering HTML views.
  **Files:**
- `demo.blade.php` – Custom Blade view.
- `welcome.blade.php` – Default Laravel welcome page.

---

# `bootstrap/`

- *Contains files for framework bootstrapping and application configuration.*

  **Files & Folders:**
  - `app.php` – *Initializes* the Laravel framework and *loads core* components.
  - `cache/` – Stores framework-generated files for performance optimization (such as compiled routes and services).

**Details:**
- The `bootstrap/` folder is **not related to Bootstrap CSS/JS**; it is for bootstrapping (starting up) the Laravel application.
- The `app.php` file is executed on every request, setting up the service container and loading environment settings.
- The `cache/` subdirectory is used by Laravel to store optimized files that speed up the framework’s performance.
