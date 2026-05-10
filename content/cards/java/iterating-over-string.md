---
id: iterating-over-string
forward:
  - "[converting-string-to-char-array](converting-string-to-char-array.md)"
noteId: 1777823471896
---

How to iterate over a string in Java?

---

You can iterate over a string using a `for` loop and the `charAt()` method.

```java
String str = "Hello";
for (int i = 0; i < str.length(); i++) {
    char ch = str.charAt(i);
    System.out.println(ch);
}
```

---

- The `charAt(i)` method returns the character at the specified index `i`.
