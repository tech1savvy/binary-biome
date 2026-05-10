---
noteId: 1777823469846
---

Can you explicitly return values with named returns in Go?

---

Yes — even with named returns, you can explicitly return values, which overrides the named variables:

```go
func getCoords() (x, y int) {
    return 5, 6 // explicit; ignores x, y defaults
}
```

Explicit returns override named return values; naked returns use them as-is.
