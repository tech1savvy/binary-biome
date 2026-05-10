---
id: random
backward:
  - "[min](min.md)"
noteId: 1777823472347
---

How to generate a random number in Java?

---

Use the `Math.random()` method. This method returns a `double` value with a positive sign, greater than or equal to `0.0` and less than `1.0`.

To get a random integer within a certain range, you can do the following:

```java
// Random integer between 0 and 99
int randomNumber = (int)(Math.random() * 100);
```
