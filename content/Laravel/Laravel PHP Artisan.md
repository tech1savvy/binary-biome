---
modified_time: 01-05-25, 05:39
---
# PHP Artisan

## Introduction to Artisan

Artisan is Laravel's built-in command-line interface (CLI) that helps automate tasks, manage applications, and generate boilerplate code.

To view available Artisan commands, run:

```bash
php artisan list
```

## Common Artisan Commands

### 1. Laravel Version

Check the installed Laravel version:

```bash
php artisan --version
```

### 2. Serve Application

Start a development server:

```bash
php artisan serve
```

This runs the application at `http://127.0.0.1:8000` by default.

### 3. Configuration Cache

Optimize performance by caching configuration files:

```bash
php artisan config:cache
```

### 4. Creating Controllers

Generate a new controller:

```bash
php artisan make:controller ExampleController
```

### 5. Creating Models

Create a new model:

```bash
php artisan make:model Example
```

### 6. Creating Migrations

Generate a new migration file:

```bash
php artisan make:migration create_examples_table
```

### 7. Running Migrations

Apply all pending migrations:

```bash
php artisan migrate
```

### 8. Clearing Cache

Clear various caches:

```bash
php artisan cache:clear
php artisan route:clear
php artisan config:clear
php artisan view:clear
```

### 9. Tinker

Launch an interactive REPL environment for testing Laravel code:

```bash
php artisan tinker
```

Artisan simplifies development by providing powerful commands to automate routine tasks.