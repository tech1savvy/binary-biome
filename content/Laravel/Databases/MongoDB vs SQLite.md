---
modified_time: 04-05-25, 10:13
---
# 🔁 Switching from SQLite to MongoDB in Laravel

If you're transitioning your Laravel project from SQLite to MongoDB, here are the key updates you need to make:

---

## 1. ✅ **Update Model Base Class**

Replace Laravel's default Eloquent model with the MongoDB-compatible one.

**Before (SQLite / SQL-based):**

```php
use Illuminate\Database\Eloquent\Model;
```

**After (MongoDB):**

```php
use Jenssegers\Mongodb\Eloquent\Model;
```

Update each model that interacts with the database:

```php
use Jenssegers\Mongodb\Eloquent\Model;

class Product extends Model
{
    protected $connection = 'mongodb'; // optional if default
    protected $fillable = ['name', 'description'];
}
```

---

## 2. ⚙️ **Migrations Are Optional**

MongoDB is **schema-less**, meaning you don't need to run `php artisan migrate`. However, you can still use migrations for consistency or to keep SQL compatibility if needed.

> You may safely skip `migrations/` unless your app also supports SQL databases.

---

## 3. 🧠 **Review SQL-Specific Logic**

MongoDB **does not support joins** or transactions the way SQL databases do. If your controller, model scopes, or service layer use:

- `join()`, `groupBy()`, `having()`
- `foreign keys`, constraints, or SQL-style normalization

...you will need to **refactor** this logic into either:
- **manual nested structures** (MongoDB is document-based)
- or **multiple queries + in-memory processing**

---

## 4. ✏️ **Controllers May Stay the Same**

If your controllers use **basic Eloquent methods** like:

```php
Product::all();
Product::create([...]);
$product->update([...]);
$product->delete();
```

Then no change is needed. These methods work identically in the MongoDB driver.

However, **watch for**:
- SQL assumptions in pagination, filtering, joins
- use of raw SQL or DB::select()
---

## 5. 🔗 **Relationships Work Differently**

You can define relationships in MongoDB models (`hasOne`, `belongsTo`, etc.), but:
- These are **simulated**, not enforced by the database
- You may prefer **embedding documents** instead of referencing

**Example (still supported):**
```php
public function category()
{
    return $this->belongsTo(Category::class);
}
```

---

## ✅ Summary

|Component|SQLite (SQL)|MongoDB (NoSQL)|
|---|---|---|
|Model Base|`Illuminate\Database\Eloquent\Model`|`Jenssegers\Mongodb\Eloquent\Model`|
|Schema|Required migrations|Optional / ignored (schema-less)|
|Relationships|Enforced via foreign keys|Loose references or embedded docs|
|Joins & SQL|Supported|Not supported natively (refactor required)|
|Eloquent Support|Full|Mostly compatible (basic CRUD works fine)|

---

Let me know if you'd like help converting a specific model or relationship from SQL to Mongo-style structure.