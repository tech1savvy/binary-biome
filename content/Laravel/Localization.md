---
modified_time: 04-05-25, 11:49
level: 1
---
# Laravel Native Localization: How It Works

Laravel supports localization by allowing you to store translation strings in language files within the resources/lang directory, with a subdirectory for each supported language (e.g., en, fr, de). You can set the default and fallback locales in config/app.php, and define which locales your app supports.

---

## **1. Create Language Files**

Place translation files in `resources/lang/{locale}/`.

### **Examples:**

**English:**  
`resources/lang/en/messages.php`

```php
<?php
return [
    'welcome' => 'Welcome',
];
```

**French:**  
`resources/lang/fr/messages.php`

```php
<?php
return [
    'welcome' => 'Bienvenue',
];
```

---

## **2. Set the Locale**

You can set the application locale dynamically using:

```php
app()->setLocale('fr'); // Sets the language to French
```

### **Language Switch via Route:**

**File:** `routes/web.php`

```php
// Localization
// sample view to show localization
Route::get('/localized', function () {
    app()->setLocale(session('locale', config('app.locale')));
    return view('localized');
})->name('localized');
// language switcher
Route::get('lang/{locale}', function ($locale) {
    session(['locale' => $locale]);
    app()->setLocale($locale);
    return redirect()->back();
});
```

### **Persistent Locale (AppServiceProvider or Middleware):**

```php
public function boot()
{
    app()->setLocale(session('locale', config('app.locale')));
}
```

---

## **3. Display Translations in Views**

Use the translation helper in Blade templates:

```blade
{{ __('messages.welcome') }}
```

Or using the `@lang` directive:

```blade
@lang('messages.welcome')
```

---

## **4. Language Switcher Example in Blade**

```blade
<a href="{{ url('lang/en') }}">English</a>
<a href="{{ url('lang/fr') }}">Français</a>
```

---

## ✅ Summary

- **No package required** — Laravel supports localization natively.
- Store translations in `resources/lang/{locale}`.
- Use `app()->setLocale()` to switch languages.
- Use `__('key')` or `@lang('key')` in Blade to display translations.