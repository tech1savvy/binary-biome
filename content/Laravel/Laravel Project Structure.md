---
modified_time: 18-03-25, 17:21
---

# `routes/`

## 1. `console.php`

- Defines Artisan console commands for CLI interactions, background tasks, and cron jobs.
  **Code Snippet:**

```php
Artisan::command('greet {name}', function ($name) {
    $this->info("Hello, $name!");
})->describe('Greet someone via CLI');
```

---

## 2. `web.php`

- Defines web ==routes== with session state, CSRF protection, and authentication.
  **Code Snippet:**

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
