---
id: ispunct
backward:
  - "[isspace](isspace.md)"
forward:
  - "[isprint](isprint.md)"
noteId: 1777823457846
---

Which option checks if a character is a punctuation mark?

---

Use the `ispunct()` function.

```cpp
#include <cctype>

int result = ispunct(c); // Non-zero if c is a punctuation character
```
