---
id: find
backward:
  - "[c_str](c_str.md)"
forward:
  - "[rfind](rfind.md)"
noteId: 1777823458321
---

Which method finds the first occurrence of a substring within a `std::string`?

---

Use the `find(str, pos=0)` method. It returns the starting position of the first match.

```cpp
#include <string>

std::string s = "hello world";
size_t pos = s.find("world"); // pos is 6
```

---
If the substring is not found, it returns the special value `std::string::npos`.
