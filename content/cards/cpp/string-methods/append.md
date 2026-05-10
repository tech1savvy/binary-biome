---
id: append
backward:
  - "[find_last_of](find_last_of.md)"
forward:
  - "[insert](insert.md)"
noteId: 1777823458097
---

How do you add a substring to the end of a `std::string`?

---

Use the `append(str)` method (or the `+=` operator).

```cpp
#include <string>

std::string s = "hello";
s.append(" world"); // s is now "hello world"
s += "!"; // s is now "hello world!"
```
