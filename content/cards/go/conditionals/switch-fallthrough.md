---
noteId: 1777823469021
---

How do I make a switch case fall through to the next case?

---

Use `fallthrough` to continue to the next case:

```go
switch os {
case "linux":
    creator = "Linus Torvalds"
case "macOS":
    fallthrough
case "Mac OS X":
    fallthrough
case "mac":
    creator = "A Steve"
default:
    creator = "Unknown"
}
```

All three Mac cases will set `creator` to "A Steve".