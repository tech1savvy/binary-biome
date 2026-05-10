---
id: excess-type-checking
aliases:
  - Excess Type Checking
tags: []
noteId: 1777823483822
---

# Excess Type Checking

## Why is **Option A** a security risk even though it passes TypeScript's checks, and how does **Option B** fix it?

```typescript
type UserResponse = { id: string; email: string };
const user = { id: "1", email: "a@b.com", password: "123" };

// Option A (The "Leaky" Way)
const res: UserResponse = user;

// Option B (The "Safe" Way)
const res: UserResponse = {
  id: user.id,
  email: user.email,
};
```

---

1. The Flaw (Option A): Structural Typing
   TypeScript only checks if `user` has the _minimum_ required fields. Because it already has an `id` and `email`, TS is happy. At runtime, the `password` is still inside the object and will be leaked in your JSON.

2. The Fix (Option B): Excess Property Checking
   When you use an **Object Literal** (the `{}` braces), TypeScript switches to a stricter mode. If you tried to add `password: user.password` inside Option B, TypeScript would throw an error because it's not defined in `UserResponse`.

3. The Runtime Result:

- **Option A:** The JSON contains the password. ❌
- **Option B:** A new object is created. The password physically does not exist in the new object. ✅

**Pro-Tip:** If security is the goal, **never** just re-type a variable. Always **transform** the data into a new object or use **destructuring** (`const { password, ...rest } = user`).
