---
tags:
  - "#flashcards/python/lists"
noteId: 1777823480796
---

###### What is a **list** in Python?
***
An ordered collection of items declared with square brackets `[]`. Can store items of any data type.
```python
weapons = ["Shortsword", "Iron Dagger", "Elven Bow"]
print(weapons)  # ['Shortsword', 'Iron Dagger', 'Elven Bow']

inventory = ["Iron Breastplate", "Healing Potion"]
inventory.append("Shortsword")
print(inventory)  # ['Iron Breastplate', 'Healing Potion', 'Shortsword']
```

###### Are Python lists heterogeneous?
***
Yes, Python lists can contain elements of different data types.
```python
mixed = ["string", 1, 3.14, True]
```

###### How do you **add an item to a list** in Python?
***
Use `append()` to add an item to the end of a list.
```python
fruits = []
fruits.append("apple")
fruits.append("banana")
print(fruits)  # ['apple', 'banana']
```

###### What is **list concatenation** in Python?
***
Using the `+` operator to combine two or more lists into a single list.

Examples:
- `["Superman", "Batman"] + ["Joker", "Lex Luthor"]` equals `['Superman', 'Batman', 'Joker', 'Lex Luthor']`

##### Slicing

###### What is **list slicing** in Python?
***
Extracting a portion of a list using `[start:stop]`, where stop is exclusive.

```python
scores = [10, 20, 30, 40, 50, 60, 70]
print(scores[2:6])  # [30, 40, 50, 60]
```

###### How do you slice with a **step** in Python?
***
Using `[start:stop:step]` to skip elements.

```python
scores = [10, 20, 30, 40, 50, 60, 70]
print(scores[2:6:2])  # [30, 50]
```

###### What happens when you **omit start or stop** in slicing?
***
- `list[:3]` - from start (indices 0, 1, 2)
- `list[3:]` - to end (from index 3 to last)

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[:3])  # [0, 1, 2]
print(numbers[3:])  # [3, 4, 5, 6, 7, 8, 9]
```

###### How do you use slicing to get **every nth element** in Python?
***
Using `[::step]` to get every nth element.

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[::3])  # [1, 4, 7]
```

###### How do **negative indices** work in slicing?
***
Negative indices count from the end of the list.

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[-4:])  # [6, 7, 8, 9]
```

###### How do you **reverse a list using slicing** in Python?
***
Using `[::-1]` with a negative step to reverse the order.

```python
numbers = [1, 2, 3, 4, 5]
print(numbers[::-1])  # [5, 4, 3, 2, 1]
```
