---
id: resize
backward:
  - "[clear](clear.md)"
forward:
  - "[comparison](comparison.md)"
noteId: 1777823458446
---

How do you change the size of a `std::string`?

---

Use the `resize(n, ch)` method.

- If `n` is smaller than the current size, the string is shortened.
- If `n` is larger, the string is expanded and padded with the character `ch` (or a null character if `ch` is not provided).

```cpp
#include <string>

std::string s = "hello";
s.resize(8, '!'); // s is now "hello!!!"
```
