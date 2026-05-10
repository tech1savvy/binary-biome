---
noteId: 1777823469797
---

How do you ignore a return value in Go?

---

Use the blank identifier `_`:

```go
func getPoint() (x, y int) { return 3, 4 }

x, _ := getPoint() // ignore y
```

---

Go errors on unused variables; use `_` to discard return values.