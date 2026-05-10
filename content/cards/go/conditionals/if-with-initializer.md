---
noteId: 1777823468997
---

How do I use an initial statement in an if block?

---

Variables in the initial statement are scoped to the if block only:

```go
if length := getLength(email); length < 10 {
    fmt.Printf("Email must be at least 10 characters, is %d\n", length)
}
```

`length` is not available outside the if block.