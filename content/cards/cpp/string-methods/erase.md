---
id: erase
backward:
  - "[replace](replace.md)"
forward:
  - "[clear](clear.md)"
noteId: 1777823458246
---

How do you remove a portion of a `std::string`?

---

Use the `erase(pos=0, len=npos)` method.

```cpp
#include <string>

std::string s = "hello beautiful world";
// Remove " beautiful"
s.erase(5, 10); // s is now "hello world"
```
