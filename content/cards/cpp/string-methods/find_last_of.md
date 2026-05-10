---
id: find_last_of
backward:
  - "[find_first_of](find_first_of.md)"
forward:
  - "[append](append.md)"
noteId: 1777823458297
---

Which method finds the last character in a `std::string` that matches any character in a specified set?

---

Use the `find_last_of(chars, pos=npos)` method.

```cpp
#include <string>

std::string s = "hello world";
// Find the last vowel
size_t pos = s.find_last_of("aeiou"); // pos is 7 (for 'o')
```
