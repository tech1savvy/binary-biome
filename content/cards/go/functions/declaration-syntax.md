---
noteId: 1777823469822
---

Why does Go use "x int" instead of "int x"?

---

Go reads left to right (English style), unlike C:

```go
x int       // Go: read as "x is an int"
p *int     // p is a pointer to int
a [3]int   // a is an array of 3 ints
f func(func(int,int) int, int) int  // f is a function
```

C-style is harder to read:
```c
int (*fp)(int (*ff)(int x, int y), int b)
```