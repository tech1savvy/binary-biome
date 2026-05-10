---
tags:
  - "#flashcards/sql-having"
noteId: 1777823459122
---

###### What is the **HAVING clause** in SQL?

HAVING filters records returned by a GROUP BY query based on a specified condition. Unlike WHERE (filters before grouping), HAVING filters groups after aggregation, often used with aggregate functions.

***

###### How do you **filter groups with HAVING**?

```sql
SELECT department, SUM(salary) as total_salary
FROM employees
GROUP BY department
HAVING total_salary > 50000;
```

***

###### What is the difference between **WHERE and HAVING**?

| WHERE | HAVING |
|-------|--------|
| Filters rows **before** aggregation | Filters groups **after** aggregation |
| Can be used without GROUP BY | Must be used with GROUP BY |
| Cannot be used with aggregate functions | Is used with aggregate functions |

Use `WHERE` for individual rows, `HAVING` for grouped aggregates.
