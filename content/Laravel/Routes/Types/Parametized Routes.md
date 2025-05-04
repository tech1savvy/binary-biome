---
modified_time: 02-05-25, 13:13
---
# Required Parameters:

```php
Route::get('/user/{id}', function ($id) {
    return 'User ID: ' . $id;
});
```

# Optional Parameters:

```php
Route::get('/user/{name?}', function ($name = 'Guest') {
    return 'User Name: ' . $name;
});
```

# Parameter Constraints

You can restrict route parameters using regular expressions:

```php
Route::get('/user/{id}', function ($id) {
    return "User ID: " . $id;
})->where('id', '[0-9]+');
```

