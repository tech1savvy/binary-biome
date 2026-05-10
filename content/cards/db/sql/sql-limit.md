---
tags:
  - "#flashcards/sql-limit"
noteId: 1777823459322
---

###### What is the **LIMIT clause** in SQL?

LIMIT specifies the maximum number of rows the result set should return, useful for pagination or restricting output.

***

###### How do you **restrict rows returned**?

```sql
SELECT * FROM employees LIMIT 5;
```

This retrieves the first 5 rows from the `employees` table.

***

###### How do you use **LIMIT with WHERE**?

```sql
SELECT * FROM users
WHERE activity = 'active'
LIMIT 10;
```

```sql
SELECT * FROM orders
WHERE status = 'completed'
LIMIT 20;
```

LIMIT prevents performance issues from retrieving large datasets. Useful when you only need a subset of data for analysis or display.
