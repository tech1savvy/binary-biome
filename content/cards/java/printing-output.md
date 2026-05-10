---
id: printing-output
aliases: []
tags: []
backward:
  - "[taking-input](taking-input.md)"
noteId: 1777823472397
---

How to print output in Java?

---

To print output, use `System.out.println()`.

```java
public class Main {
    public static void main(String[] args) {
        String name = "World";
        System.out.println("Hello, " + name + "!");
    }
}
```

---

- `System.out` is the standard output stream.
- `println` prints the string and moves the cursor to the next line.

