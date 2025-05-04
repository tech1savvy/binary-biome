---
modified_time: 02-05-25, 13:14
---

- ! Using middleware to secure routes:

```php
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return 'Secure Dashboard';
    })->name('dashboard');
});
```