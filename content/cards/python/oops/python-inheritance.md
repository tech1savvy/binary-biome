---
tags:
  - "#flashcards/python/inheritance"
noteId: 1777823480721
---

###### What is **inheritance** in Python?
***
A feature allowing a child class to inherit properties and methods from a parent class. Uses `class Child(Parent):` syntax.
* Best for "**is-a**" relationships.
```python
class Vehicle:
    def __init__(self, brand):
        self.brand = brand

class Car(Vehicle):
    def __init__(self, brand, model):
        super().__init__(brand)
        self.model = model

my_car = Car("Toyota", "Camry")
print(my_car.brand)  # Toyota
```

- _`super()`_ is used to call methods from a parent class.

###### Can child classes access private parent attributes?
***
No. Child classes cannot directly access private attributes (prefixed with `__`). They must use the parent's methods.
```python
class Wall:
    def __init__(self, height):
        self.__height = height  # private

    def get_height(self):
        return self.__height

class Castle(Wall):
    def get_tower_height(self):
        return self.get_height() * 2  # use parent's method

castle = Castle(10, 4)
print(castle.get_tower_height())  # 20
```

###### Can a parent class have multiple child classes?
***
Yes. A parent class can have multiple child classes, each inheriting from it with their own unique attributes and methods.

```python
class Hero:
    def __init__(self, name, health):
        self.name = name
        self.health = health

class Warrior(Hero):
    def __init__(self, name, health, strength):
        super().__init__(name, health)
        self.strength = strength

class Archer(Hero):
    def __init__(self, name, health, arrows):
        super().__init__(name, health)
        self.arrows = arrows

    def shoot(self, target):
        target.health -= 10
```
