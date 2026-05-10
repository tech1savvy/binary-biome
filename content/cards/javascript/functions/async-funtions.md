---
id: async-funtions
aliases: []
tags: []
forward:
  - "[IIFE](iife.md)"
level: 0
noteId: 1777823473823
---

## What are Async Functions?

Async functions are a special kind of function in JavaScript designed for **asynchronous programming**. They always return a **Promise** and allow you to write asynchronous code that looks and behaves like synchronous code by using the `await` keyword inside them.

## How to Declare Async Functions

### Declaration syntax:

```js
async function functionName(parameters) {
  // function body
  // can use await inside
}
```

### Arrow function syntax:

```js
const functionName = async (parameters) => {
  // function body
};
```

## Key Points

- The `async` keyword before the function means it **always returns a Promise**.
- Inside the function, you can use the `await` keyword to pause execution until a Promise resolves.
- This lets you write asynchronous code in a **sequential style** rather than nested callbacks or chaining `.then()`.
- If an async function returns a value, it gets wrapped in a resolved Promise automatically.
- If it throws an error, the Promise is rejected.

## Example

```js
async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data; // automatically wrapped in Promise
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

Async functions improve code readability and error handling for asynchronous operations in JavaScript.
