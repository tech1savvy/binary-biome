---
tags:
  - "#flashcards/python/classes"
noteId: 1777823480672
---

###### What is a **class** in Python?
***
A **blueprint** for creating objects. 
It defines **attributes** (variables) and **behaviors** (methods).
```python
class Wizard:
    mana = 100
    spells = 5

gandalf = Wizard()
print(gandalf.mana)  # 100
```

- An object is an _instance_ of a class.

###### What is a **method** in Python?
***
A function defined inside a class that operates on object instances. Methods use `self` to access and modify object attributes.
* Methods are called using the **dot operator**: `object.method()`.
```python
class Wizard:
    def __init__(self):
        self.mana = 100

    def use_spell(self, cost):
        self.mana -= cost
        return self.mana

wizard = Wizard()
print(wizard.use_spell(30))  # 70
```

###### What is a **constructor** in Python?
***
A special method `__init__` that sets up an object's attributes when an instance is created.
* The constructor is called automatically when creating a new instance.
```python
class Wizard:
    def __init__(self, name, power):
        self.name = name
        self.power = power

gandalf = Wizard("Gandalf", "Magic")
print(gandalf.name)   # Gandalf
