---
noteId: 1777823469046
---

How do I write a switch statement in Go?

---

Compare a value against multiple options:

```go
switch os {
case "linux":
    creator = "Linus Torvalds"
case "windows":
    creator = "Bill Gates"
case "mac":
    creator = "A Steve"
default:
    creator = "Unknown"
}
```

No `break` needed - it's implicit in Go.