---
id: isgraph
backward:
  - "[iscntrl](iscntrl.md)"
forward:
  - "[toupper](toupper.md)"
noteId: 1777823457771
---

Which option checks if a character has a graphical representation?

---

Use the `isgraph()` function.

```cpp
#include <cctype>

int result = isgraph(c); // Non-zero if c has a graphical representation
```
---
Any printable character except for space (`' '`).
