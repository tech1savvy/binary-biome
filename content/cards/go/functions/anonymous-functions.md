---
noteId: 1777823469772
---

How and where to use anonymous functions in Go?

---

Anonymous functions are unnamed functions ideal for one-time use or quick closures. Pass them inline to higher-order functions instead of defining separate named functions.

Syntax: `func(parameters) returnType { body }` (no function name).

Example higher-order function:
```go
func conversions(converter func(int) int, x, y, z int) (int, int, int) {
    return converter(x), converter(y), converter(z)
}
```

Using a named function (less concise for one-time use):
```go
func double(a int) int { return a + a }
// Pass by name: conversions(double, 1, 2, 3) → (2,4,6)
```

Using an anonymous function (inline, more concise):
```go
// Define and pass directly:
conversions(func(a int) int { return a + a }, 1, 2, 3) // → (2,4,6)
```