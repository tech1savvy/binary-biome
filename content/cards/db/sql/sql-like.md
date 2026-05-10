---
tags:
  - "#flashcards/sql-like"
noteId: 1777823459297
---

###### What is the **LIKE operator** in SQL?

LIKE searches for a specified pattern in a column. It's used when an exact match is not known.

Wildcards:
- `%` - Matches zero or more characters
- `_` - Matches exactly one character

***

###### How do you **match patterns with LIKE**?

```sql
-- Starts with "banana"
SELECT * FROM products WHERE product_name LIKE 'banana%';

-- Ends with "banana"
SELECT * FROM products WHERE product_name LIKE '%banana';

-- Contains "banana"
SELECT * FROM products WHERE product_name LIKE '%banana%';
```

***

###### How do you use **_ wildcard** with LIKE?

```sql
-- Exactly 4 letters ending in "oot"
SELECT * FROM products WHERE product_name LIKE '_oot';

-- Starts with "Al" and exactly 5 characters
SELECT * FROM users WHERE name LIKE 'Al___';
```

`_` matches exactly one character - useful for fixed-length patterns.
