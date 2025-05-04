---
modified_time: 04-05-25, 10:44
---
- Stored on server.

# Laravel Session Management

Laravel provides a robust session handling system that allows you to store, retrieve, and delete session data easily. It supports multiple storage drivers such as `file`, `cookie`, `database`, and `Redis`.

---

## **Storing Session Data**

You can store data in the session using the `session()` helper or the `Session` facade:

```php
// Using the session() helper
session(['key' => 'value']);

// Using the Session facade
use Illuminate\Support\Facades\Session;
Session::put('key', 'value');
```

---

## **Retrieving Session Data**

To retrieve session data:

```php
// Using the session() helper
$value = session('key');

// Using the Session facade
$value = Session::get('key');
```

To get all session data:

```php
$allSessionData = session()->all();
// or
$allSessionData = Session::all();
```

---

## **Deleting Session Data**

To remove data from the session:

```php
// Remove a single key
session()->forget('key');
// or
Session::forget('key');

// Remove all session data
session()->flush();
// or
Session::flush();
```

---

## **Session Storage Drivers**

You can configure the session storage mechanism in `.env` or `config/session.php` depending on your application needs. Available drivers include:

- `file`
- `cookie`
- `database`
- `redis`