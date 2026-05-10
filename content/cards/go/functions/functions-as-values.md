---
noteId: 1777823469921
---

Are functions as values supported in Go?

---

Go supports first-class and higher-order functions, meaning functions are just another type like ints, strings, and bools. They can be assigned to variables, passed as arguments, and returned from functions.

Example with function as parameter:
```go
func add(x, y int) int { return x + y }
func mul(x, y int) int { return x * y }

func aggregate(a, b, c int, arithmetic func(int, int) int) int {
  firstResult := arithmetic(a, b)
  secondResult := arithmetic(firstResult, c)
  return secondResult
}

func main() {
	sum := aggregate(2, 3, 4, add)      // 9
	product := aggregate(2, 3, 4, mul)   // 24
}
```

The `arithmetic func(int, int) int` parameter accepts any function matching that signature.