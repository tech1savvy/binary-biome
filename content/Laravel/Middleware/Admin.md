---
modified_time: 04-05-25, 15:59
---
> - Create a route /admin/dashboard that is protected by an auth middleware and is only accessible to authenticated users.
> - If the user is not authenticated, redirect them to the login page.
---

# AdminMiddleware
```php
class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::check() || !$request->user()->isAdmin()) {
            return redirect('login');
        }
        return $next($request);
    }
}
```

# Middleware applied to admin Route
```php
// Admin Middleware on Route
Route::get('/admin/dashboard', function(){
    return view('admin.dashboard');
})->middleware('admin');
```

# User Model
```php
protected $fillable = [
        'name',
        'email',
        'password',
        'is_admin', // added for admin flag
    ];
    
protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'is_admin' => 'boolean', // cast is_admin to boolean
    ];
```

# Migration
```php
Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('is_admin')->default(false); // added new column
            $table->rememberToken();
            $table->timestamps();
        });
```

# UserSeeder
```php
// Create a basic admin user
        User::create([
            'name' => 'tech1savvy',
            'email' => 'tech1savvy@admin.com',
            'password' => Hash::make('password'),
            'is_admin' => true,
        ]);
```