---
id: length-size
backward:
  - "[header](header.md)"
forward:
  - "[empty](empty.md)"
noteId: 1777823458397
---

How can you get the number of characters in a `std::string`?

---

Use the `length()` or `size()` methods. Both return a `size_t` value representing the character count.

```cpp
#include <string>

std::string s = "example";
size_t char_count = s.length(); // or s.size()
```
