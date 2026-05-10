---
id: at
backward:
  - "[empty](empty.md)"
forward:
  - "[c_str](c_str.md)"
noteId: 1777823458121
---

How do you access a character at a specific position in a `std::string` with bounds checking?

---

Use the `at(pos)` method. It returns a reference to the character at the given position.

```cpp
#include <string>

std::string s = "hello";
char c = s.at(1); // c is 'e'
```

---
If the position `pos` is out of bounds, `at()` throws a `std::out_of_range` exception.
