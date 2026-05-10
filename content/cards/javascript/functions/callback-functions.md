---
id: callback-functions
aliases: []
tags: []
noteId: 1777823473873
---

What is a **callback function** in JavaScript?

---

- A function,
  - passed as an argument,
  - to another function,
  - which is then executed inside the outer function at a later time.

It's a way to ensure that certain code runs _after_ something else has completed, or to customize the behavior of a function.

---

### Why are they used?

Callbacks are fundamental in JavaScript, especially for:

- **Asynchronous Operations:** Essential for tasks that don't complete immediately (e.g., fetching data, timers, user events). The callback executes once the asynchronous task is done.
- **Event Handling:** Used in event listeners (e.g., `onClick`, `addEventListener`).
- **Customization:** Allows you to pass specific logic into a generic function, making it more flexible.

### Potential Drawbacks

Deep nesting of callbacks can lead to "callback hell," creating hard-to-read, pyramid-shaped code; modern alternatives like Promises or async/await address this.

### Simple Example

**1. Synchronous Callback:**

```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // Execute the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!
```

**2. Asynchronous Callback:**

```javascript
function doSomethingLater(callback) {
  console.log("Starting a task...");
  setTimeout(function () {
    console.log("Task completed!");
    callback(); // Execute the callback after 2 seconds
  }, 2000);
}

function finishUp() {
  console.log("Finishing up after the task.");
}

doSomethingLater(finishUp);
// Output (after 2 seconds):
// Starting a task...
// Task completed!
// Finishing up after the task.
```

**3. Callback with Arguments:**

```javascript
function performOperation(a, b, callback) {
  const result = a + b;
  callback(result); // Execute the callback function with an argument
}

function displayResult(value) {
  console.log("The result is: " + value);
}

performOperation(5, 3, displayResult);
// Output:
// The result is: 8
```

### Middleware Example

In web frameworks like Express.js, middleware functions often use callbacks (commonly named `next`) to pass control to the next function in the processing chain.

```javascript
function loggerMiddleware(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call the next middleware function or route handler
}

function authMiddleware(req, res, next) {
  if (req.headers.authorization === "secret-token") {
    next(); // Authenticated, proceed
  } else {
    res.status(401).send("Unauthorized"); // Not authenticated
  }
}

// In an Express-like application:
// app.use(loggerMiddleware);
// app.use(authMiddleware);
// app.get('/protected', (req, res) => {
//   res.send('Welcome to protected area!');
// });
```

- In this example, `next` is a callback function that, when invoked, tells the framework to move to the next middleware or the final route handler.
