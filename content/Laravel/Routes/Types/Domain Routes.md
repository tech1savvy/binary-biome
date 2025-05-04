---
modified_time: 02-05-25, 13:34
---
- Handling multiple [subdomains](/Networking/Subdomains):

```php
Route::domain('support.example.com')->group(function () {
    Route::get('/feedback', function () {
        return 'Feedback Panel';
    });
});
```

- will resove as URL: `http://support.example.com/feedback
`