---
tags:
  - "#flashcards/sql-order-by"
noteId: 1777823459372
---

###### What is the **ORDER BY clause** in SQL?

ORDER BY sorts the result set in ascending (`ASC`) or descending (`DESC`) order. By default, it sorts in ascending order.

***

###### How do you **sort results** with ORDER BY?

```sql
-- Sort by salary in descending order
SELECT * FROM employees ORDER BY salary DESC;

-- Sort by salary in ascending order
SELECT * FROM employees ORDER BY salary ASC;
```

***

###### How do you **sort by multiple columns**?

```sql
SELECT name, price, quantity FROM products
ORDER BY price ASC;

SELECT name, price, quantity FROM products
ORDER BY quantity DESC;
```

ORDER BY is essential for organizing query results to analyze and present data by specific criteria.

