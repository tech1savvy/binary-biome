---
tags:
  - "#flashcards/python/encapsulation"
noteId: 1777823480697
---

###### What is **encapsulation** in Python?
***
Hiding internal state of an object and exposing only a controlled interface through public methods.
```python
class Character:
    def __init__(self, health):
        self.__armor = health  # private

    def get_health(self):
        return self.__armor

hero = Character(100)
print(hero.get_health())  # 100
```

###### How do you create private attributes in Python?
***
Prefix attribute names with double underscore `__`. This restricts direct access from outside the class.
```python
class Fortress:
    def __init__(self, walls, guards):
        self.__walls = walls    # private
        self.__guards = guards   # private

bastion = Fortress(5, 20)
# bastion.__walls  # raises AttributeError
print(bastion.get_security())  # must use public method
```


