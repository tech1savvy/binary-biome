---
id: do-while-loop
backward:
  - "[while-loop](while-loop.md)"
noteId: 1777823472121
---

How to use a `do-while` loop in Java?

---

The `do-while` loop is similar to the `while` loop, but it executes the code block at least once before checking the condition.

**Syntax:**
```java
do {
    // body of loop;
} while (condition);
```

**Example:**
```java
int i = 0;
do {
   System.out.println(i);
   i++;
} while(i <= 20);
```
