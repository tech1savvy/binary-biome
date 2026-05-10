---
id: awaiting-return-in-try-catch-block
aliases:
  - The Try/Catch Exception
tags: []
noteId: 1777823472721
---

- Direct Return: Good for efficiency when you are just passing data along.
- Awaiting Return: Mandatory if you are inside a try/catch block and want to handle the error.

# The Try/Catch Exception

Is return await task() redundant inside a try/catch block?

---

- No! It is required.
- If you return task() (no await), the function returns the promise immediately. If the task fails later, the catch block will never trigger because the function has already exited.

- You must `await` the result to "pull" any potential errors into the catch block.

---

```ts
export async function checkPasswordHash(password: string, hash: string) {
  try {
    return argon2.verify(hash, password);
  } catch {
    return false;
  }
}
```

## How this relates to your error:

- The TypeError: pchstr must contain a $ as first char is a "validation error" from the Argon2 library. It checks the hash format before it even starts.

- Without await, that error happened "in the future" after your function returned.
- With await, your function stayed alive long enough to see the error and turn it into a false.

> [!NOTE]
> You can't catch what you've already handed off
