---
id: find_first_of
backward:
  - "[rfind](rfind.md)"
forward:
  - "[find_last_of](find_last_of.md)"
noteId: 1777823458271
---

Which method finds the first character in a `std::string` that matches any character in a specified set?

---

Use the `find_first_of(chars, pos=0)` method.

```cpp
#include <string>

std::string s = "hello world";
// Find the first vowel
size_t pos = s.find_first_of("aeiou"); // pos is 1 (for 'e')
```
