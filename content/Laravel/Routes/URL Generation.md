---
modified_time: 02-05-25, 13:48
---

### The Current URL

- Retrieve the current URL:

```php
$currentUrl = url()->current();
```

### Generating Named Routes URLs

- Generate URLs for named routes:

```php
$url = route('dashboard');
```

### Asset URLs

- Generating URLs for assets:

```php
$assetUrl = asset('css/style.css');
```

### Generation Shortcuts

- Using helper functions for quick URL generation:

```php
$url = action([App\Http\Controllers\HomeController::class, 'index']);
```

- Using Laravel’s `action()` helper function to generate a URL pointing to the `index` method of the HomeController class. 
	- This helper looks up the route registered for that controller action and returns the corresponding URL as a string.
- This is useful for dynamically generating links to controller actions, ensuring that your URLs remain accurate even if your route definitions change
- For example, if your `HomeController@index` route is registered as `/home`, then `$url` will be set to something like `http://your-app.test/home`.