---
tags:
  - "#flashcards/sql-between"
noteId: 1777823458922
---

###### What is the **BETWEEN clause** in SQL?

BETWEEN filters the result set based on a specified range, returning records where a column's value falls between two given values (inclusive). NOT BETWEEN excludes records within the range.

***

###### How do you **use BETWEEN** to filter salaries?

```sql
SELECT employee_name, salary
FROM employees
WHERE salary BETWEEN 30000 AND 60000;
```

***

###### How do you **use NOT BETWEEN** to filter product quantities?

```sql
SELECT product_name, quantity
FROM products
WHERE quantity NOT BETWEEN 20 AND 100;
```
