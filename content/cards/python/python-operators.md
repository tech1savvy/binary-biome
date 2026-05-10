---
tags:
  - "#flashcards/python/operators"
noteId: 1777823480846
---

###### What is an **in-place operator** in Python?
***
An operator that performs an arithmetic operation on a variable and assigns the result back to that same variable in one step, with concise syntax.

Examples:
- `x += 1` (equivalent to `x = x + 1`)
- `x -= 1` (equivalent to `x = x - 1`)
- `x *= 1` (equivalent to `x = x * 1`)
- `x /= 1` (equivalent to `x = x / 1`)

###### What is a **logical operator** in Python?
***
An operator that evaluates boolean expressions and returns `True` or `False`. Used to combine conditional statements.

Examples:
- `x and y` (returns `True` if both are `True`)
- `x or y` (returns `True` if at least one is `True`)
- `not x` (returns the opposite boolean value)

###### What is a **mathematical operator** in Python?
***
An operator that performs arithmetic calculations on variables and values.

Examples:
- `+` Addition: `a + b`
- `-` Subtraction: `a - b`
- `*` Multiplication: `a * b`
- `/` Division: `a / b`

Order of operations (PEMDAS) applies, and parentheses can override precedence:
- `(a + b) * c`

###### What is the **bitwise OR operator** in Python?
***
The `|` operator that performs a logical OR on each pair of corresponding bits. Each bit in the result is `1` if at least one of the corresponding bits is `1`.

Combining permissions:
```python
can_read   = 0b0001  # 1
can_write  = 0b0010  # 2
can_execute = 0b0100 # 4

user_perms = can_read | can_write | can_execute
print(bin(user_perms))  # 0b111
print(user_perms)       # 7
```

###### What is the **bitwise AND operator** in Python?
***
The `&` operator that performs an AND operation on each pair of corresponding bits. Each bit in the result is `1` only if both bits are `1`.

Checking permissions:
```python
can_create_guild = 0b1000
can_review_guild = 0b0100
can_delete_guild = 0b0010
can_edit_guild = 0b0001

user_permissions = 0b0101  # has review and edit

has_review = user_permissions & can_review_guild
print(has_review == can_review_guild)  # True

has_create = user_permissions & can_create_guild
print(has_create == can_create_guild)  # False
```

###### What is the **exponent operator** in Python?
***
The `**` operator that raises a number to a specified power.

Examples:
- `3 ** 2` equals `9`
- `5 ** 3` equals `125`

###### What is the **modulo operator** in Python?
***
The `%` operator that returns the remainder after division.

Examples:
- `10 % 4` equals `2` (remainder of 10 ÷ 4)
- `7 % 2` equals `1` (useful for checking if odd/even)