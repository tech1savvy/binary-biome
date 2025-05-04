---
modified_time: 02-05-25, 13:20
---

- Adding a prefix to a group of routes:

```php
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return 'admin dashboard';
    });
    Route::get('/login',function(){
	    return 'admin login';
    });
});
```

- will be resolved at the URL: 
  `/admin/dashboard` & `/admin/login`