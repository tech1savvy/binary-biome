---
id: converting-string-to-char-array
aliases: []
tags: []
backward:
  - "[iterating-over-string](iterating-over-string.md)"
noteId: 1777823471721
---

How to convert a string to a character array in Java?

---

You can convert a string to a character array using the `toCharArray()` method. You can then iterate over the array.

```java
String str = "World";
char[] charArray = str.toCharArray();

for (char ch : charArray) {
    System.out.println(ch);
}
```

---

- The `toCharArray()` method converts the string to a new character array.
