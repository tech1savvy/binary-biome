---
tags:
  - "#flashcards/python/polymorphism"
noteId: 1777823480747
---
###### What is **polymorphism** in Python?
***
The ability to treat objects of different classes through a common interface (commonly a method). The same method behaves differently depending on the object type.

###### What is **method overriding** in Python and what is the **output** of this code?
```python
class Animal:
    def sound(self): print("Generic")

class Dog(Animal):
    def sound(self): print("Woof!")

for a in [Animal(), Dog()]:
    a.sound()
```
***
* Method overriding = child class redefines a method from its parent class. This enables polymorphism.
```
Generic
Woof!
```

###### What is **operator overloading** in Python?
***
Allows custom behavior for standard operators on user-defined classes using special methods like `__add__`, `__str__`, `__eq__`, etc. Makes custom objects intuitive to use with Python syntax.

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(2, 4)
v2 = Vector(1, 3)
print(v1 + v2)  # Vector(3, 7)
```

- `__add__` defines `+` behavior
- `__str__` defines `print()` output
- Leverages polymorphism - same operator behaves differently based on object type
