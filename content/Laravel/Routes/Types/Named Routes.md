---
modified_time: 02-05-25, 13:13
---
- Named routes allow for easy URL generation:

```php
Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
```

To generate a URL for this route:

```php
$url = route('dashboard');
```
