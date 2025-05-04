---
modified_time: 02-05-25, 13:18
---

- Organizing routes with shared attributes by grouping them:

```php
Route::middleware(['auth'])->group(function () {
    Route::get('/account', function () {
        return 'User Account';
    });
});
```


- The URL for the above route is resolved as `/account`. 
- The route group does not change the URL itself unless you use a `prefix` method. 
- The `middleware(['auth'])` ensures that any request to `/account` must pass through the `auth` middleware, but the URL remains `/account`