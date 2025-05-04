---
modified_time: 04-05-25, 10:11
---
Here’s a clean, markdown-formatted, **beginner-friendly guide** to using **MongoDB with Laravel**, based on your outline and best practices — with all reference links removed for simplicity.

---

# ✅ Laravel + MongoDB Integration Guide

Use this guide to connect your Laravel app to a MongoDB database using Eloquent-like syntax via a community-maintained package.

---

## 📦 1. Install MongoDB PHP Extension

Make sure the **MongoDB PHP driver** is installed on your system.

For most systems:

```bash
pecl install mongodb
```

Then, enable it in your `php.ini`:

```ini
extension=mongodb
```

You can confirm installation with:

```bash
php -m | grep mongodb
```

---

## 📚 2. Install Laravel MongoDB Package

You can install the community MongoDB driver for Laravel:

```bash
composer require jenssegers/mongodb
```

> Alternatively, you can use the official `mongodb/laravel-mongodb` package, but `jenssegers/mongodb` is more widely used and documented in the Laravel community.

---

## ⚙️ 3. Configure the MongoDB Connection

### In `.env` file:

For local MongoDB:

```env
DB_CONNECTION=mongodb
DB_HOST=127.0.0.1
DB_PORT=27017
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

For MongoDB Atlas:

```env
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/your_database
```

### In `config/database.php`, add:

```php
'mongodb' => [
    'driver'   => 'mongodb',
    'host'     => env('DB_HOST', '127.0.0.1'),
    'port'     => env('DB_PORT', 27017),
    'database' => env('DB_DATABASE'),
    'username' => env('DB_USERNAME'),
    'password' => env('DB_PASSWORD'),
    'options'  => []
],
```

Or, if using `MONGODB_URI`:

```php
'mongodb' => [
    'driver' => 'mongodb',
    'dsn' => env('MONGODB_URI'),
    'database' => env('DB_DATABASE'),
],
```

---

## 🧠 4. Update Your Models

Extend the MongoDB base model in your Eloquent models.
Instead of `use Illuminate\Database\Eloquent\Model;`

### Example:

```php
use Jenssegers\Mongodb\Eloquent\Model;

class Product extends Model
{
    protected $connection = 'mongodb';
    protected $fillable = ['name', 'description'];
}
```

---

## 🔁 5. Use Eloquent as Usual

You can now use Eloquent-style queries with MongoDB:

```php
Product::create(['name' => 'Test Product', 'description' => 'A product from MongoDB']);
$products = Product::all();
```

---

## 🔐 6. (Optional) Update Authentication

If you're using Laravel's Auth system, update your `User` model:

```php
use Jenssegers\Mongodb\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $connection = 'mongodb';
}
```

---

## 🧪 7. Test the Setup

Try creating and reading data via tinker or a controller:

```bash
php artisan tinker
>>> \App\Models\Product::create(['name' => 'Demo', 'description' => 'Testing MongoDB']);
```

Or run a migration (if needed—note that schema features are limited with MongoDB).

---

## ✅ Summary

|Step|Description|
|---|---|
|1|Install PHP MongoDB driver|
|2|Install `jenssegers/mongodb` package|
|3|Configure connection in `.env` and `config/database.php`|
|4|Extend MongoDB model base class|
|5|Use Eloquent syntax|
|6|Update Auth model if needed|
|7|Test the connection|
