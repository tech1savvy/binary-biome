---
modified_time: 19-03-25, 00:58
---
# Laravel Responses

## Introduction

In Laravel, responses are what the application returns to the client after processing a request. Laravel provides various ways to return responses, including simple text, views, JSON data, and redirects.

## Basic String Response

You can return a simple string response from a route or controller:

```php
Route::get('/hello', function () {
    return "Hello, Laravel!";
});
```

## Returning Views as Response

To return an HTML response using a Blade view:

```php
Route::get('/home', function () {
    return view('home');
});
```

Passing data to a view:

```php
Route::get('/home', function () {
    return view('home', ['name' => 'John']);
});
```

## JSON Responses

Laravel makes it easy to return JSON responses, which is useful for APIs:

```php
Route::get('/user', function () {
    return response()->json([
        'name' => 'John Doe',
        'email' => 'john@example.com'
    ]);
});
```

## Redirect Responses

You can redirect users to another route:

```php
Route::get('/dashboard', function () {
    return redirect('/home');
});
```

Redirecting to a named route:

```php
Route::get('/dashboard', function () {
    return redirect()->route('home');
});
```

Redirecting to a controller action:

```php
use App\Http\Controllers\HomeController;

Route::get('/dashboard', function () {
    return redirect()->action([HomeController::class, 'index']);
});
```

Redirecting To External Domains
```php
return redirect()->away('https://www.google.com');
```


## Attaching Headers to Responses

You can attach custom headers to responses:
- In the context of HTTP responses, **headers** are key-value pairs sent by the server along with the response content. They provide additional information about the response or about the server itself.
```php
return response("Hello, Laravel!")
    ->header('Content-Type', 'text/plain')
    ->header('X-Custom-Header', 'CustomValue');
```

## Attaching Cookies to Responses

Laravel allows adding cookies to a response:

```php
return response("Hello, Laravel!")
    ->cookie('user_id', '12345', 60);
```

## Conclusion

Laravel provides flexible response handling, making it easy to return strings, views, JSON, redirects, and responses with custom headers or cookies. Understanding these options helps in building efficient applications.