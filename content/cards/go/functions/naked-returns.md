---
noteId: 1777823469972
---

What is a naked return in Go?

---

Named return values enable naked returns — a bare `return` automatically returns them:

```go
func getCoords() (x, y int) {
    // x and y initialized to zero values
    return // automatically returns x, y
}
```

Only use in short functions; they harm readability in longer ones.

---

Named returns document purpose. Use naked returns sparingly.