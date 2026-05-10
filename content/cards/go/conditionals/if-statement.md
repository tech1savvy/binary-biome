---
noteId: 1777823468972
---

How do I write an if statement in Go?

---

No parentheses around the condition, and the opening brace must be on the same line:

```go
if height > 4 {
    fmt.Println("You are tall enough!")
} else if height > 2 {
    fmt.Println("You are tall enough!")
} else {
    fmt.Println("You are not tall enough!")
}
```