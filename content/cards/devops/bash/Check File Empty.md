---
noteId: 1777728478490
---

Which operator should be used to check if a file is empty in Bash?
***
- Use the `-s` operator, which returns true if a file exists and has a size greater than zero.

```bash
# True if file is NOT empty
if [ -s "$FILE" ]; then
    echo "File is not empty"
fi

# True if file IS empty or does not exist
if [ ! -s "$FILE" ]; then
    echo "File is empty or does not exist"
fi
```

---

To explicitly test if a file exists _and_ is empty, combine `-e` and `-s`:

```bash
if [ -e "$FILE" ] && [ ! -s "$FILE" ]; then
    echo "File exists and is empty"
fi
```
