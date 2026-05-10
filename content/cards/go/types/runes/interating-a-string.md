---
noteId: 1777823470296
---

How to use runes to iterate over a string?

---

- When using `range` keyword on a string, it auto-decodes to UTF-8 runes. 
- Though, the index is byte offset (not ideal for random/sequential access).

```go
const s = "A🐻B"
for i, r := range s {
    fmt.Printf("Index: %d, Rune: %c\n", i, r)
}
// Output:
// Index: 0, Rune: A
// Index: 1, Rune: 🐻  (emoji is 4 bytes)
// Index: 5, Rune: B
```

- For correct sequential index, convert to rune slice first.
```go
for i, r := range []rune(s) {
    fmt.Printf("Index: %d, Rune: %c\n", i, r)
}
// Output:
// Index: 0, Rune: A
// Index: 1, Rune: 🐻
// Index: 2, Rune: B
```
