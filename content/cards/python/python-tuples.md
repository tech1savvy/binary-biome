---
tags:
  - "#flashcards/python/tuples"
noteId: 1777823480896
---

###### What is a **tuple** in Python?
***
* An **ordered**, **immutable** collection defined with parentheses `()`.
* Once created, its elements cannot be changed.
```python
wizard = ("Gandalf", 2019, True)
print(wizard[0])  # Gandalf
```

###### How do you **unpack a tuple** in Python?
***
Assigning tuple elements to multiple variables in one statement.
```python
hero = ("Aragorn", 87)
hero_name, hero_age = hero
print(hero_name)  # Aragorn
print(hero_age)   # 87
```

###### How do you access **nested tuple elements** in Python?
***
Using multiple indices to access tuples inside lists or other tuples.
```python
characters = [("Frodo", 50, True), ("Sam", 38, True)]
print(characters[0][0])  # Frodo
print(characters[1][1])  # 38
```

###### How do you **concatenate tuples** in Python?
***
Using `+` to combine tuples, creating a new tuple.
```python
original = (1, 2, 3)
new_tuple = original + (4,)
print(new_tuple)  # (1, 2, 3, 4)

necromancer = ("Sauron", 3000)
the_dark_lord = necromancer + ("The One Ring",)
print(the_dark_lord)  # ('Sauron', 3000, 'The One Ring')
```
