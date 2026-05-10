---
id: substr
backward:
  - "[comparison](comparison.md)"
noteId: 1777823458521
---

How do you extract a new substring from a `std::string`?

---

Use the `substr(pos=0, len=npos)` method. It returns a new `std::string` object.

```cpp
#include <string>

std::string s = "hello world";
std::string sub = s.substr(6, 5); // sub is "world"
```
---
- `pos` is the starting position.
- `len` is the length of the substring.
- If `len` is omitted, it extracts to the end of the string.
