---
modified_time: 03-05-25, 10:09
---
```bash
php artisan make:model Product -m
```

- The `-m` option in the `php artisan make:model` command stands for "migration." When you use `-m` (or `--migration`), Laravel will generate a new migration file alongside your model, saving you the extra step of running `php artisan make:migration` separately.
- This command creates: 
	- The `Product` model class
	- A migration file for the `products` table This shortcut streamlines your workflow when creating new models that need database tables.
