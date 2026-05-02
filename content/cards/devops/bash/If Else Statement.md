---
noteId: 1777728478664
---

How do you perform conditional logic in Bash?
***
- Use the `if`, `elif`, and `else` keywords to execute commands based on a condition's success or failure.
- The structure must begin with `if` and end with `fi`.

```bash
# Basic if-elif-else structure
if [ condition1 ]; then
  # Block 1: Executes if condition1 is true
elif [ condition2 ]; then
  # Block 2: Executes if condition1 is false and condition2 is true
else
  # Block 3: Executes if all previous conditions are false
fi
```

---

- **Key Operators**:
  - **Numeric**: `-eq` (equal), `-ne` (not equal), `-gt` (greater than), `-lt` (less than)
  - **String**: `==` (equal), `!=` (not equal), `-z` (is empty)
  - **File**: `-f` (is a file), `-d` (is a directory)

- **Best Practice**: Prefer double brackets `[[ ... ]]` for safer and more flexible string comparisons and pattern matching.
- **Common Pitfall**: Always ensure there are spaces around the content inside the brackets, e.g., `[ "$num" -gt 10 ]`.
