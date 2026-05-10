---
id: json-response
aliases: []
tags: []
noteId: 1777823468446
---

How to return JSON data to a request in Express?

---

- Use `res.json(data)` to send JSON response with proper Content-Type header.
- Use `res.status(code).json(data)` to set HTTP status code and send JSON.
- Express automatically stringifies objects and sets `Content-Type: application/json`.

---

```js
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];
  res.json(users); // More explicit for JSON
  // res.send(users); // Also works, auto-detects JSON
});

app.post("/api/users", (req, res) => {
  const newUser = { id: 3, name: "Bob" };
  res.status(201).json(newUser); // Sends JSON with 201 status
});
```

`res.json()` is more explicit than `res.send()` for JSON data, though both work similarly.
`res.send()` automatically detects and stringifies objects, but `res.json()` is clearer about intent.
