---
id: multi-line-comment
aliases: []
tags: []
noteId: 1777823473972
---

Which syntax to use for multi-line comments in JavaScript?

---

- Use a forward slash and an asterisk `/*` to start the comment and an asterisk and a forward slash `*/` to end it.
- All content between `/*` and `*/` is treated as a comment and ignored by the JavaScript engine.

Multi-line comments can span multiple lines.
They can also be used to temporarily disable (comment out) blocks of code.

```javascript
/*
  This is an example of a multi-line comment.
  It can be used for longer explanations.
*/
alert("Hello");

/* Commenting out a block of code
alert('This code will not execute');
console.log('Nor will this');
*/
```

---

- **Important**: Nested multi-line comments (`/* ... /* ... */ ... */`) are **not supported** in JavaScript and will cause a syntax error.

```js
/*
  /* This nested comment will cause an error */
*/
```
