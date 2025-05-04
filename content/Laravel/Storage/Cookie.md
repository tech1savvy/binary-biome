---
modified_time: 04-05-25, 18:54
---
- To set a cookie for a user preference like a theme in Laravel, you can use either the `Cookie` facade or the `cookie()` helper function. Here’s a simple example using both methods:

# Theme Toggler View
```php
<!-- resources/views/theme.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Theme Preference</title>
</head>
<body>
    <h2>Current theme: {{ request()->cookie('theme', 'light') }}</h2>

    <form method="POST" action="{{ route('set.theme') }}">
        @csrf
        <button type="submit" name="theme" value="dark">Set Dark Theme</button>
        <button type="submit" name="theme" value="light">Set Light Theme</button>
    </form>
</body>
</html>
```

# Routes
## Using `cookie()` helper function
```php
use Illuminate\Http\Request;

Route::view('/theme', 'theme')->name('theme');

Route::post('/set-theme', function (Request $request) {
    $theme = $request->input('theme', 'light');
    return redirect()->route('theme')
        ->withCookie(cookie('theme', $theme, 60*24*30)); // 30 days
})->name('set.theme');
```

## Using Cookie Facade
```php
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

Route::view('/theme', 'theme');

Route::post('/set-theme', function (Request $request) {
    $theme = $request->input('theme', 'light');
    Cookie::queue('theme', $theme, 60 * 24 * 30); // 30 days
    return response()->json(['status' => 'ok']);
});
```