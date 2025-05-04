---
modified_time: 01-05-25, 10:09
---
# Laravel Blade 

## Introduction

Blade is Laravel's templating engine, providing a simple yet powerful way to work with views. It allows you to write clean and reusable templates while keeping PHP logic separate from HTML.

## Blade Syntax

### Echoing Data

```php
<h1>{{ $title }}</h1>
```

The `{{ }}` syntax is used to echo data, and it automatically escapes output to prevent XSS attacks.

### Control Structures

#### If-Else Statements

```php
@if($age >= 18)
    <p>You are an adult.</p>
@else
    <p>You are a minor.</p>
@endif
```

#### Loops

##### Foreach Loop

```php
@foreach($users as $user)
    <p>{{ $user }}</p>
@endforeach
```

##### For Loop

```php
@for($i = 0; $i < 5; $i++)
    <p>Iteration {{ $i }}</p>
@endfor
```

## Template Inheritance

Blade allows layouts to be reused using `@yield` and `@section`.

### Creating a Layout File

```php
// resources/views/layouts/master.blade.php
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title')</title>
</head>
<body>
    @yield('content')
</body>
</html>
```

### Extending the Layout

```php
// resources/views/home.blade.php
@extends('layouts.master')

@section('title', 'Home Page')

@section('content')
    <h1>Welcome to Home Page</h1>
@endsection
```

## Including Partial Views

Blade allows including partial views using `@include`:

```php
@include('header')
```

## Conclusion

Blade simplifies view management in Laravel, providing features such as template inheritance, control structures, and reusable components.