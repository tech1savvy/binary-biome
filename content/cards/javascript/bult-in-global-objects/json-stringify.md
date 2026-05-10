---
id: json-stringify
noteId: 1777823472922
---

How to convert JavaScript values to a JSON string?

---

Use the `JSON.stringify()` method. It converts a JavaScript value (usually an object or array) into a JSON string, which is useful for sending data to a web server, saving data to a file, or serializing data for storage.

### Syntax

```javascript
JSON.stringify(value, replacer, space)
```

-   `value`: The JavaScript value to convert.
-   `replacer` (optional): A function that alters the stringification process, or an array of `String` and `Number` objects that serves as a whitelist for selecting the properties of the `value` object to be included in the JSON string.
-   `space` (optional): A `String` or `Number` object that's used to insert white space into the output JSON string for readability purposes.

---

### Basic Usage Example

```javascript
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null
};

let json = JSON.stringify(student);
console.log(typeof json); // "string"
console.log(json);
/*
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/
```

### Pretty-printing with `space` argument

```javascript
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

console.log(JSON.stringify(user, null, 2));
/*
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/
```

### Important Notes
-   `JSON.stringify()` automatically skips:
    -   Function properties.
    -   Symbolic keys.
    -   Properties with `undefined` values.
-   It throws an error on circular references (when an object references itself directly or indirectly). You can handle this using a `replacer` function.
-   Objects with a `toJSON()` method will have their `toJSON()` method called to customize their serialized representation.
