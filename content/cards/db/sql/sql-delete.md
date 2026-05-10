---
tags:
  - "#flashcards/sql-delete"
noteId: 1777823459047
---

###### What is the **DELETE statement** in SQL?

DELETE removes records from a table. It deletes all rows matching the conditions in the WHERE clause.

**WARNING:** Without a WHERE clause, DELETE removes ALL rows in the table.

***

###### How do you **delete a specific record**?

```sql
DELETE FROM employees
WHERE id = 251;
```

Always use WHERE to target specific records and avoid removing all data.
