---
noteId: 1777823469597
---

How do I format a boolean in Go?

---

Use `%t` (true/false).

```go
fmt.Printf("Active: %t\n", true)
// Active: true

fmt.Printf("Active: %t\n", false)
// Active: false
```