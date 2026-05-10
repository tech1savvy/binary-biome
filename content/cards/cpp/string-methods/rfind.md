---
id: rfind
backward:
  - "[find](find.md)"
forward:
  - "[find_first_of](find_first_of.md)"
noteId: 1777823458472
---

Which method finds the last occurrence of a substring within a `std::string`?

---

Use the `rfind(str, pos=npos)` method. It searches backwards from `pos` and returns the starting position of the last match.

```cpp
#include <string>

std::string s = "hello world hello";
size_t pos = s.rfind("hello"); // pos is 12
```

---
If the substring is not found, it returns `std::string::npos`.
