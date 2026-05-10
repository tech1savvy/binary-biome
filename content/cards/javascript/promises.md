---
id: promises
language: "[[javascript]]"
noteId: 1777823474422
bootdotdev: https://www.boot.dev/lessons/4f06bdf7-8b25-4481-ab27-dc1d581b9fe6
---

# Introduction
##  `.then` and `.catch` handling promise created with `new Promise`
 
```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (getRandomBool()) {
      resolve("resolved");
    } else {
      reject("rejected!");
    }
  }, 1000);
});

function getRandomBool() {
  return Math.random() < 0.5;
}

promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
```

- `setTimeout()` is used here to only stimulate the asynchronous nature of promises.
- its possible without it too:

```js
const promise = new Promise((resolve, reject) => {
  if (getRandomBool()) {
    resolve("resolved!");
  } else {
    reject("rejected!");
  }
});

function getRandomBool() {
  return Math.random() < 0.5;
}

promise
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });
```

##  `try-catch`  handling promise with `await` created with `new Promise`

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (getRandomBool()) {
      resolve("resolved");
    } else {
      reject("rejected!");
    }
  }, 1000);
});

function getRandomBool() {
  return Math.random() < 0.5;
}

try {
  const message = await promise
  console.log(message);
} catch (error) {
  console.log(error);
}
```

## Declaring a promise function using `async` instead of `new Promise()`

```js
async function asynFunction() {
  if (Math.random() < 0.5) {
    return "Resoloved!";
  } else {
    throw new Error("Rejected!");
  }
}

try {
  const message = await asynFunction();
  console.log(message);
} catch (error) {
  console.error(error.message);
}
```

# Quirks of using `await` with `async` function
## When `await` keyword is not used when calling an async function, a promise object is returned:
```js
// This is valid JavaScript, but hash is a Promise
const hash = getMessageHash("senderman", "contentmsg");
console.log(hash); // Promise { <pending> } or Promise { <resolved> }

// To get the ACTUAL string value, you MUST use await or .then()
const actualHash = await getMessageHash("senderman", "contentmsg");
console.log(actualHash); // "Sender (senderman): abc123..."
```
## When returning a promise inside a `async` function, `await` is implicitly added:
```js
// These two functions are equivalent:
// sha256Hex is an async function (returns a Promise)

// Version 1: Manually awaiting before returning
async function getHash1(content) {
  const hash = await sha256Hex(content);
  return hash;
}

// Version 2: Returning the Promise directly
async function getHash2(content) {
  return sha256Hex(content); // No await needed!
}

// Important: The caller still needs to await BOTH functions
const result1 = await getHash1(content);
const result2 = await getHash2(content);
```

## Outside an async function, await can only be used at the top level of a module (file).
- Regular (non-async) functions **cannot be paused and resumed** - they run straight through from start to finish. Only `async` functions have the special machinery to handle this pause/resume behavior. JavaScript can't pause a regular function, so it would break the execution model!
- Top-level `await` works because **modules** can be treated as async by the JavaScript engine - it can delay loading the module until the Promise resolves.
### ## The Bottom Line
`await` needs a special execution context that can be paused. Regular functions can't pause, but `async` functions and module top-levels can!