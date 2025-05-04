---
modified_time: 04-05-25, 18:34
---
## 1. Create the Route

**File**: `routes/web.php`

```php
use App\Http\Controllers\ContactController;

Route::get('/contact', function() {
    return view('contact');
});

Route::post('/contact', [ContactController::class, 'send']);
````

---

## 2. Create the Controller

**Command**:

```bash
php artisan make:controller ContactController
```

**File**: `app/Http/Controllers/ContactController.php`

```php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $request->validate([
            'name'    => 'required|string|max:40',
            'email'   => 'required|email',
            'message' => 'required|string|max:500',
        ]);

        Mail::to('recipient@example.com')->send(
            new ContactMail($request->only('name', 'email', 'message'))
        );

        return back()->with('success', 'Your message has been sent!');
    }
}
```

---

## 3. Create the Mailable

**Command**:

```bash
php artisan make:mail ContactMail
```

**File**: `app/Mail/ContactMail.php`

```php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    // Accept data from the controller
    public function __construct($data)
    {
        $this->data = $data;
    }

    // Set the subject
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Contact Mail',
        );
    }

    // Pass data to the Blade view
    public function content(): Content
    {
        return new Content(
            view: 'mail.contact', // Make sure this view exists!
            with: ['data' => $this->data],
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
```

---

## 4. Create the Contact View

**File**: `resources/views/contact.blade.php`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Contact Us</title>
</head>
<body>
    <!-- Display success message -->
    @if(session('success'))
        <div style="color: green;">{{ session('success') }}</div>
    @endif

    <!-- Display validation errors -->
    @if($errors->any())
        <ul style="color: red;">
            @foreach($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    @endif

    <form method="POST" action="{{ url('/contact') }}">
        @csrf
        <label>Name:</label><br>
        <input type="text" name="name" value="{{ old('name') }}"><br><br>

        <label>Email:</label><br>
        <input type="email" name="email" value="{{ old('email') }}"><br><br>

        <label>Message:</label><br>
        <textarea name="message">{{ old('message') }}</textarea><br><br>

        <button type="submit">Send</button>
    </form>
</body>
</html>
```

# Create Mail View

```bash
php artisan make:view mail.contact
```

```php
<strong>Name:</strong> {{ $data['name'] }}<br>
<strong>Email:</strong> {{ $data['email'] }}<br>
<strong>Message:</strong> {{ $data['message'] }}<br>
```

---

## Summary

- **Route**: Handles form submission.
- **Controller**: Validates input and sends email.
- **Mailable**: Prepares email content.
- **View**: Displays email content.


---
# Mail Server Setup #skip
### Configure Laravel

**.env**

```ini
MAIL_MAILER=smtp
MAIL_HOST=mailpit       # Use 127.0.0.1 if not using Docker
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
```