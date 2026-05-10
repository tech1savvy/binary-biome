---
id: replace
backward:
  - "[insert](insert.md)"
forward:
  - "[erase](erase.md)"
noteId: 1777823458422
---

How do you replace a portion of a `std::string` with another substring?

---

Use the `replace(pos, len, str)` method.

```cpp
#include <string>

std::string s = "hello there";
s.replace(6, 5, "world"); // s is now "hello world"
```
---
This replaces `len` characters starting from position `pos` with the content of `str`.
