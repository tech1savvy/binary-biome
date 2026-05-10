---
id: iscntrl
backward:
  - "[isprint](isprint.md)"
forward:
  - "[isgraph](isgraph.md)"
noteId: 1777823457721
---

Which option checks if a character is a control character?

---

Use the `iscntrl()` function.

```cpp
#include <cctype>

int result = iscntrl(c); // Non-zero if c is a control character
```
