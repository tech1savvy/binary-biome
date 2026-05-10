---
noteId: 1777823469872
---

Can I omit the type for multiple parameters of the same type?

---

Yes, group them - type only needs to be declared after the last argument:

```go
func addToDatabase(hp, damage int) {}

func addToDatabase(hp, damage int, name string) {}

func addToDatabase(hp, damage int, name string, level int) {}
```