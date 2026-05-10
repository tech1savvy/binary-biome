
---
id: body-parsing
noteId: 1778320500066
---

How do you access data from the request body in Express?

---

**Access via `req.body`** (requires middleware setup):

```js
app.use(express.json()); // for JSON data
app.use(express.urlencoded({ extended: true })); // for form data

app.post('/route', (req, res) => {
  console.log(req.body); // Access parsed data here
});
```

---

- `req.body` is `undefined` without body-parsing middleware
- `express.json()` parses `application/json` content
- `express.urlencoded()` parses `application/x-www-form-urlencoded` content
- Express doesn't parse request bodies by default