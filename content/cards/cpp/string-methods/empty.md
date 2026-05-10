---
id: empty
backward:
  - "[length-size](length-size.md)"
forward:
  - "[at](at.md)"
noteId: 1777823458223
---

How do you check if a `std::string` has zero characters?

---

Use the `empty()` method, which returns `true` if the string is empty.

```cpp
#include <string>

std::string s = "";
if (s.empty()) {
    // string is empty
}
```
