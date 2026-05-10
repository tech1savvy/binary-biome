---
id: continue
backward:
  - "[definition](definition.md)"
forward:
  - "[break](break.md)"
noteId: 1777823471997
---

How to use the `continue` statement in a loop in Java?

---

- The `continue` statement is used to skip the current iteration of a loop and move to the next one.
- All statements after the `continue` statement in that loop are not executed for the current iteration.

```java
for (int i = 1; i <= 20; i++) {
   if (i % 3 == 0) {
       continue;
   }
   System.out.println(i);
}
```

---

In this loop, whenever `i` is divisible by 3, the `continue` statement is executed, and the loop skips to the next iteration without printing the number.
