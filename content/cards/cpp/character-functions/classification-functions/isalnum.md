---
id: isalnum
backward:
  - "[Character Conversion Functions](conversion-functions.md)"
forward:
  - "[isalpha](isalpha.md)"
noteId: 1777823457671
---

Which option checks if a character is alphanumeric (a letter or digit)?

---

Use the `isalnum()` function.

```cpp
#include <cctype>

int result = isalnum(c); // Non-zero if c is alphanumeric
```
