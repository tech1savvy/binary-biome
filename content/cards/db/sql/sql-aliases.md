---
tags:
  - "#flashcards/sql-aliases"
noteId: 1777823458847
---

###### What is the **AS clause** in SQL?

The AS clause assigns a temporary alias to a column or table within a query. The alias exists only for the duration of the query and does not affect actual database names.

***

###### How do you **alias columns**?

```sql
SELECT employee_id AS id, employee_name AS name
FROM employees;
```

Makes output more readable by renaming columns in the result set.

***

###### How do you use **aliases with conditions**?

```sql
SELECT amount, note AS birthday_message
FROM transactions
WHERE sender_id = 10;
```

Aliases work alongside WHERE clauses and other SQL operations.
