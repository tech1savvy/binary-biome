---
id: isprint
backward:
  - "[ispunct](ispunct.md)"
forward:
  - "[iscntrl](iscntrl.md)"
noteId: 1777823457821
---

Which option checks if a character is printable?

---

Use the `isprint()` function.

```cpp
#include <cctype>

int result = isprint(c); // Non-zero if c is a printable character
```
---
Printable characters are any characters that occupy printing space, including the space character itself.
