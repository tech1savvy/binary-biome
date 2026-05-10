---
noteId: 1777823480096
---

# Mongoose: `select: false`

The `select: false` option in a Mongoose schema definition specifies that a path should be excluded from query results by default.

This is a powerful feature for both security and performance.

### Use Case: Hiding Sensitive Data

The most common use case is to prevent sensitive data, like a user's password hash, from being accidentally exposed in API responses.

**Schema Definition:**
```javascript
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { 
    type: String, 
    required: true, 
    select: false // <-- This field will be excluded by default
  },
});

const User = mongoose.model('User', userSchema);
```

When you query for a user, the `password` field will not be included in the result.

```javascript
// Find a user by their email
const user = await User.findOne({ email: 'test@example.com' });

// The 'user' object will NOT contain the password field
// { _id: ..., name: 'Test User', email: 'test@example.com' }
console.log(user); 
```

### Overriding `select: false`

If you need to access the field explicitly (e.g., to compare a password during login), you can override the default behavior by chaining the `.select()` method to your query and prefixing the field name with a `+`.

```javascript
// Explicitly request the password field for authentication
const user = await User.findOne({ email: 'test@example.com' }).select('+password');

// The 'user' object WILL now contain the password field
// { _id: ..., name: 'Test User', email: 'test@example.com', password: 'hashedpassword...' }
console.log(user);
```
