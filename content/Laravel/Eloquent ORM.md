---
modified_time: 04-05-25, 09:28
---
# What is Eloquent ORM?
- Eloquent ORM is Laravel’s built-in *Object-Relational Mapper* (ORM) that allows you to interact with your database using PHP’s object-oriented syntax instead of writing raw SQL queries.

Each database table is represented by a corresponding “<u>Model</u>” class, and each row in the table becomes an instance of that model. This means you can perform common database operations-like creating, reading, updating, and deleting records (CRUD)-using simple and expressive PHP code:

# CRUD Operations with Eloquent ORM

Using [[Product Resource Controller#7. Implement Controller Methods|Product Resource Controller for Reference]]

## 1. Create (Insert a New Product)

**Method:** `store()`

```php
public function store(Request $request)
{
    // Validate the request data
    $request->validate([
        'name' => 'required',
        'description' => 'nullable',
    ]);

    // Create a new product
    Product::create($request->all());

    return redirect()->route('products.index');
}
```

> ✅ Make sure your `Product` model includes `$fillable = ['name', 'description'];` to allow mass assignment.

## 2. Read (Retrieve Products)

**a) List All Products — `index()`**

```php
public function index()
{
    $products = Product::all();
    return view('products.index', compact('products'));
}
```

**b) Show a Single Product — `show()`**

```php
public function show(Product $product)
{
    return view('products.show', compact('product'));
}
```


## 3. **Update (Modify an Existing Product)**

**Method:** `update()`

```php
public function update(Request $request, Product $product)
{
    // Validate the updated data
    $request->validate([
        'name' => 'required',
        'description' => 'nullable',
    ]);

    // Update the product
    $product->update($request->all());

    return redirect()->route('products.index');
}
```

## 4. **Delete (Remove a Product)**

**Method:** `destroy()`

```php
public function destroy(Product $product)
{
    $product->delete();

    return redirect()->route('products.index');
}
```

## Summary Table

|**Operation**|**Controller Method**|**Eloquent Example**|
|---|---|---|
|Create|`store()`|`Product::create($request->all());`|
|Read (All)|`index()`|`$products = Product::all();`|
|Read (Single)|`show()`|`return view('products.show', compact('product'));`|
|Update|`update()`|`$product->update($request->all());`|
|Delete|`destroy()`|`$product->delete();`|

---

## Final Notes

- These methods assume **route-model binding** is in use, which automatically injects the correct `Product` instance based on the route parameter.
- Always **validate user input** to ensure data integrity.
- Use **Blade views** to present and manage these operations via forms and interfaces.
