---
id: isspace
backward:
  - "[isupper](isupper.md)"
forward:
  - "[ispunct](ispunct.md)"
noteId: 1777823457871
---

Which option checks if a character is a whitespace character?

---

Use the `isspace()` function.

```cpp
#include <cctype>

int result = isspace(c); // Non-zero if c is whitespace
```

---
Whitespace characters include space, tab, newline, vertical tab, form feed, and carriage return.
