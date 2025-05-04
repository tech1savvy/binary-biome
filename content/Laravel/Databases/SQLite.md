---
modified_time: 04-05-25, 07:57
---
## 1. Create the SQLite Database File

Inside your Laravel project, create the SQLite database file:

```bash
touch database/database.sqlite
```

## 2. Update `.env` File

Open your `.env` file and modify the database settings:

```env
DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite
```

Laravel will automatically look for the file in the `database` directory, if you do not specify `DB_DATABASE`.

## 3. Ensure SQLite PHP Extension Is Installed

Make sure your system has the `pdo_sqlite` and `sqlite3` extensions enabled. You can check this with:

```bash
php -m | grep sqlite
```

If it's not listed, install it using your system package manager (e.g., `sudo apt install php-sqlite3` or enable it in `php.ini` on Windows).

## 4. Run Migrations

Now that SQLite is configured, run:

```bash
php artisan migrate
```

This will create all tables in your new SQLite database.