---
id: c_str
backward:
  - "[at](at.md)"
forward:
  - "[find](find.md)"
noteId: 1777823458146
---

How do you get a null-terminated C-style string representation from a `std::string`?

---

Use the `c_str()` method. It returns a `const char*` pointing to a C-string version of the content.

```cpp
#include <string>

std::string s = "hello";
const char* c_string = s.c_str();
```

---
This is useful for interfacing with C-style functions that expect a `const char*`.
