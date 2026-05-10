---
tags:
  - "#flashcards/sql-update"
noteId: 1777823459472
---

###### What is the **UPDATE statement** in SQL?

UPDATE modifies existing records in a database table by changing values of specified fields for records that meet certain criteria. Without a WHERE clause, all records in the table will be updated.

***

###### What is the **basic syntax** of an UPDATE statement?

```sql
UPDATE products
SET price = 19.99
WHERE product_id = 101;
```

***

###### How do you **update multiple fields** at once?

```sql
UPDATE employees
SET location = 'Remote', role = 'Senior Developer'
WHERE department = 'IT';
```
