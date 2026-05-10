---
noteId: 1777823470321
---

What is a rune in Go?

---

A `rune` is an alias for `int32` — a 32-bit integer that can hold any Unicode character such as emojis and Chinese characters.

```go
s := "🐻"
fmt.Println(len(s))                    // 4 bytes
fmt.Println(utf8.RuneCountInString(s)) // 1 rune
```

---

Go uses **UTF-8**, a **variable-length** encoding (1-4 bytes per character).
This means a single `rune` can represent any Unicode code point, but the string's raw byte length differs from its rune count.

