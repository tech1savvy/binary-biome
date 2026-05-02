---
noteId: 1777728478564
---

Which operator checks if a Bash variable is NOT empty?
***
- The `-n` operator returns true if a variable's string length is non-zero.

```bash
# True if $var has a value
if [[ -n "$var" ]]; then
    echo "Variable is not empty"
fi
```
