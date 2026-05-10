---
noteId: 1777823469622
---

How do I format any value in its default representation?

---

Use `%v` - a catchall for any type.

```go
fmt.Printf("I am %v years old\n", 10)
// I am 10 years old

fmt.Printf("I am %v years old\n", "way too many")
// I am way too many years old
```