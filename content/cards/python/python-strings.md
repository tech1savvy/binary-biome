---
tags:
  - "#flashcards/python/strings"
noteId: 1777823480871
---

###### How do you **convert a string into a list** in Python?
***
Use `split()` to divide a string into a list based on a delimiter (default: whitespace).
```python
text = "apple banana cherry"
words = text.split()
print(words)  # ['apple', 'banana', 'cherry']
```

###### How do you **combine a list of strings into one** in Python?
***
Use `"delimiter".join(list)` to combine list elements into a single string.
```python
fruits = ['apple', 'banana', 'cherry']
fruit_string = " ".join(fruits)
print(fruit_string)  # "apple banana cherry"
```
