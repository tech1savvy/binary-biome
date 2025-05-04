---
modified_time: 04-05-25, 10:43
---
# Laravel File Upload Example

Below is a simple example of how to upload a file using a Laravel form and save it to the `public/uploads` directory.

---

## **1. Blade Form**

**File:** `resources/views/upload.blade.php`

```blade
@if(session('success'))
    <p style="color: green;">{{ session('success') }}</p>
@endif

@if(session('uploaded_file'))
    <!-- Display uploaded file as a clickable link -->
    <p>Uploaded File: <a href="{{ asset('uploads/' . session('uploaded_file')) }}">
    {{ session('uploaded_file') }}</a></p>
@endif

<form action="{{ url('/upload') }}" method="POST" enctype="multipart/form-data">
	@csrf
	<label>Choose File:</label>
	<input type="file" name="file">
	<button type="submit">Upload</button>
</form>
```

- The `enctype="multipart/form-data"` attribute is required for file uploads. The `@csrf` directive protects against CSRF attacks.

---

## **2. Controller Method**

**File:** `app/Http/Controllers/FileUploadController.php`

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function uploadFile(Request $request)
    {
        // Validate the uploaded file
        $request->validate([
            'file' => 'required|file|max:2048', // max 2MB
        ]);

        // Get the original file name
        $originalFileName = $request->file->getClientOriginalName();

        // Store the file in the 'uploads' directory inside public/
        $fileName = time() . '.' . $request->file->extension();
        $request->file->move(public_path('uploads'), $fileName);

        return back()->with('success', 'File uploaded successfully!')->with('uploaded_file', $fileName);
    }
}

```

- This method validates the file, moves it to `public/uploads`, and returns a success message.

---

## **3. Routes**

**File:** `routes/web.php`

```php
use App\Http\Controllers\FileUploadController;

Route::get('/upload', function () {
    return view('upload');
});

Route::post('/upload', [FileUploadController::class, 'uploadFile']);
```

- Defines routes to display the form and handle the file upload.