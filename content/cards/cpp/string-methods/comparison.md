---
id: comparison
backward:
  - "[resize](resize.md)"
forward:
  - "[substr](substr.md)"
noteId: 1777823458196
---

How can you compare two `std::string` objects?

---

You can use standard comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) for lexicographical comparison, or the `compare()` method for more detailed results.

```cpp
#include <string>

std::string s1 = "abc";
std::string s2 = "abd";

if (s1 < s2) {
    // true, "abc" comes before "abd"
}

int result = s1.compare(s2); // returns a value < 0
```
