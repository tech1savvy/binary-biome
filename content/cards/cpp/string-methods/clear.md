---
id: clear
backward:
  - "[erase](erase.md)"
forward:
  - "[resize](resize.md)"
noteId: 1777823458171
---

How do you remove all characters from a `std::string`?

---

Use the `clear()` method.

```cpp
#include <string>

std::string s = "some content";
s.clear(); // s is now ""
```
