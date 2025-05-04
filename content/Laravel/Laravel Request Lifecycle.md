---
modified_time: 01-05-25, 11:25
---
# Laravel Request Lifecycle

## Introduction

The lifecycle defines how a request is processed from the moment it enters Laravel until a response is sent back to the client.

![[Pasted image 20250501105557.png]]

## Steps in the Laravel Request Lifecycle

### 1. Entry via `public/index.php`

- entry point for all requests. 
- Its main job is to load Composer’s autoloader and then require the `bootstrap/app.php` file

### 2. Autoloading and Bootstrapping

- The application instance is initialised and setup created from `bootstrap/app.php`.
- finally, The `HTTP/Kernel.php` is loaded.

- @ PHP does not keep the application in memory between requests (unlike some other platforms). Instead, each request starts a new PHP process, executes the code (including bootstrapping), and then returns a response before terminating. This makes every request independent and stateless.
	- In summary:
	    - Steps 1 and 2 happen every time a client loads a URL or makes a request to your Laravel app, not just when the server starts
	    - This ensures that each request is handled in a clean environment.


### 3. HTTP Kernel Processing

The `app/Http/Kernel.php` file is responsible for handling incoming requests.

- Registers global, route, and middleware groups.
- Loads service providers.

### 4. Service Providers Execution

Service providers handle the core bootstrapping of Laravel, including:

- Routing
- Database connections
- Event handling

- ! Aren't services and controllers doing the same thing?
	- No, controller is for processing and manipulating data.
	- But where services are special only for routing, database connection and event handling, which are core to the whole laravel app, not specific to something.

### 5. Routing and Middleware Execution

- The request is sent to the `RouteServiceProvider`, which matches it with a defined route.
- **Middleware** *filters and modifies requests* before they reach controllers.

### 6. Controller Execution

- If a route points to a controller, Laravel executes the appropriate method.
- The controller interacts with models and services to retrieve or manipulate data.

### 7. View Rendering

- If a view is returned, Blade templates compile and render the HTML.
- Data is passed to views before being displayed.

### 8. Response Sent to Client

- The response is processed through middleware before being sent back to the browser.
- Headers, cookies, and HTTP status codes are finalized.

## Conclusion