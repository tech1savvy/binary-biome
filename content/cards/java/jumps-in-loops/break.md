---
id: break
backward:
  - "[continue](continue.md)"
noteId: 1777823471971
---

How to use the `break` statement in a loop in Java?

---

- The `break` statement is used to terminate the current loop.
- As soon as the `break` statement is encountered, all further iterations of the loop are stopped, and control is shifted to the first statement after the end of the loop.

```java
for (int i = 1; i <= 20; i++) {
   if (i == 11) {
       break;
   }
   System.out.println(i);
}
```

---

In this loop, when `i` becomes equal to 11, the `break` statement is executed, and the loop terminates. The program will print numbers from 1 to 10 only.
