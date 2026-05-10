---
tags:
  - "#flashcards/python/loops"
noteId: 1777823480822
---

###### How do you use a **for loop with range** in Python?
***
Use `range(n)` to iterate from 0 to n-1.
```python
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
```

###### How do you set start and stop in range?
***
Use `range(start, stop)` - stops before the stop value.
```python
for i in range(2, 7):
    print(i)  # 2, 3, 4, 5, 6
```

###### How do you use step in range?
***
Use `range(start, stop, step)` to skip values.
```python
for i in range(1, 10, 2):
    print(i)  # 1, 3, 5, 7, 9
```

###### How do you iterate backwards with range?
***
Use negative step: `range(start, stop, -1)`.
```python
for i in range(5, 0, -1):
    print(i)  # 5, 4, 3, 2, 1
```
