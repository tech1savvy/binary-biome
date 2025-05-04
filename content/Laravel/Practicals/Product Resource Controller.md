---
modified_time: 04-05-25, 21:59
---

> - a.Create a controller named ProductController with RESTful resource methods.
> - b. Show how to define a resource route for this controller.
> - c. Write a Blade view for displaying a list of products.

# Beginner Guide: Implementing a Product Resource in Laravel

## 1. Set Up Your Laravel Project

If you haven’t created a Laravel project yet, run:

```bash
composer create-project laravel/laravel laravel
cd laravel
```

## 2. Create the Product Model, Migration, and Controller

Use the Artisan command to generate everything at once:

```bash
php artisan make:model Product -mcr
```

- `-m` creates a migration file
- `-c` creates a controller
- `-r` makes the controller a resource controller

## 3. Edit the Migration File

Open the migration file in `database/migrations/` and update it:

```php
public function up()
{
    Schema::create('products', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->text('description')->nullable();
        $table->timestamps();
    });
}
```

## 4. Run the Migration

Apply the migration to create the `products` table:

```bash
php artisan migrate
```

## 5. Edit the Product Model

Open `app/Models/Product.php` and add the `$fillable` property:

```php
class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];
}
```

## 6. Register Resource Route

Open `routes/web.php` and add:

```php
use App\Http\Controllers\ProductController;

Route::resource('products', ProductController::class);
```

## 7. Implement Controller Methods

Open `app/Http/Controllers/ProductController.php` and define the methods:
Rather than using database queries we are using [[Eloquent ORM]]

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('products.index', compact('products'));
    }

    public function create()
    {
        return view('products.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'nullable',
        ]);

        Product::create($request->all());
        return redirect()->route('products.index');
    }

    public function show(Product $product)
    {
        return view('products.show', compact('product'));
    }

    public function edit(Product $product)
    {
        return view('products.edit', compact('product'));
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'nullable',
        ]);

        $product->update($request->all());
        return redirect()->route('products.index');
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index');
    }
}
```

## 8. Create Blade Views

Create the views directory:

```bash
mkdir -p resources/views/products
```

Create `resources/views/products/index.blade.php`:

```blade
@extends('layouts.app')

@section('content')
    <h1>Products List</h1>
    <a href="{{ route('products.create') }}">Create New Product</a>
    <ul>
        @foreach ($products as $product)
            <li>
                <strong>{{ $product->name }}</strong>: {{ $product->description }}
                <a href="{{ route('products.edit', $product) }}">Edit</a>
                <form action="{{ route('products.destroy', $product) }}" method="POST" style="display:inline">
                    @csrf
                    @method('DELETE')
                    <button type="submit">Delete</button>
                </form>
            </li>
        @endforeach
    </ul>
@endsection
```

## 9. Start the Development Server

```bash
php artisan serve
```

Visit `http://localhost:8000/products` to view your product list.

---

## 10.  Additionaly Add a Seeder for Products

### Step 1: Create the Seeder

```bash
php artisan make:seeder ProductSeeder
```

### Step 2: Edit the Seeder File

Open `database/seeders/ProductSeeder.php` and add:

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
// import the model
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        Product::create([
            'name' => 'Sample Product 1',
            'description' => 'Description for product 1',
        ]);
        Product::create([
            'name' => 'Sample Product 2',
            'description' => 'Description for product 2',
        ]);
        // Add more sample products as needed
    }
}
```

### Step 3: Register the Seeder

Open `database/seeders/DatabaseSeeder.php` and update the `run()` method:

```php
public function run(): void
{
    $this->call([
        ProductSeeder::class,
    ]);
}
```

### Step 4: Run the Seeder

```bash
php artisan db:seed
```

Your database will now be populated with the sample product entries.

---

## Summary Table

|Step|Command/Action|File/Location|
|---|---|---|
|1|`composer create-project ...`|Terminal|
|2|`php artisan make:model Product -mcr`|Terminal|
|3|Edit migration|`database/migrations/`|
|4|`php artisan migrate`|Terminal|
|5|Edit `$fillable`|`app/Models/Product.php`|
|6|Add resource route|`routes/web.php`|
|7|Implement controller methods|`app/Http/Controllers/ProductController.php`|
|8|Create Blade view|`resources/views/products/index.blade.php`|
|9|`php artisan serve`|Terminal|
|10|`php artisan make:seeder ProductSeeder` → `php artisan db:seed`|`database/seeders/`|

---

## Tips for Beginners

- Use `php artisan make:view products.index` (Laravel 10+) to create views quickly.
- Use `php artisan route:list` to inspect all available routes.
- Use `php artisan migrate:refresh --seed` to reset and seed the database in one command.
