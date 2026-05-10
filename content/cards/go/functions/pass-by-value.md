---
noteId: 1777823469996
---

FRONT

How do variables get passed to functions in Go?

---

BACK

Go passes variables **by value** — the function receives a copy, so it cannot mutate the original.

```go
func main() {
    x := 5
    increment(x)
    fmt.Println(x) // prints 5
}

func increment(x int) {
    x++ // only modifies the copy
}
```