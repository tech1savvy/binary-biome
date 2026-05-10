---
id: async-returns
aliases:
  - Async Returns
tags: []
expection:
  - - awaiting-return-in-try-catch-block
noteId: 1777823472697
---

# Async Returns

# What is the difference between these two functions in terms of execution and efficiency?

```javascript
// A
async function doTask() {
  const result = await api.call();
  return result;
}

// B
async function doTask() {
  return api.call();
}
```

---

**Back:**

**1. The "Middleman" Cost (A):**
Using `await` pauses the function, "unwraps" the value from the Promise, and then "re-wraps" it into a new Promise to return it. It adds an extra tick to the microtask queue.

**2. The "Hand-off" Efficiency (B):**
Returning the Promise directly (without `await`) hands the "receipt" straight to the caller. It skips the pause/unwrap/re-wrap cycle.

**3. The Golden Rule:**

- **Use `await`** if you need to _use_ the result (e.g., logging it, modifying it) or if you need to catch errors inside _that_ specific function.
- **Return directly** if you are just passing the result along to the caller.

**Analogy:**
Don't open a package just to put it in a new box before mailing it. If you don't need to see what's inside, just put a new shipping label on the original box and send it!
