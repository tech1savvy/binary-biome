---
noteId: 1777823469522
---

How do I return a formatted string in Go?

---

Use `fmt.Sprintf()`.

```go
s := fmt.Sprintf("I am %d years old", 10)
// s == "I am 10 years old"
```