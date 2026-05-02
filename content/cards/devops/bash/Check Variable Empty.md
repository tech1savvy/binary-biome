---
noteId: 1777728478540
---

Which operator checks if a Bash variable is empty or unset?
***
- The `-z` operator returns true if a variable's string length is zero.

```bash
# True if $var is empty or unset
if [[ -z "$var" ]]; then
    echo "Variable is empty"
fi
```
