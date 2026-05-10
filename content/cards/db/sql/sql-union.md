---
tags:
  - "#flashcards/sql-union"
noteId: 1777823459447
---

###### What is the **UNION operator** in SQL?

UNION combines the result sets of two or more SELECT statements and removes duplicate rows. SELECT statements must have the same number of columns with compatible data types.

***

###### How do you **combine results** with UNION?

```sql
SELECT City, Country FROM Customers_USA
UNION
SELECT City, Country FROM Customers_UK;
```

Combines results from both queries with no duplicate city/country pairs.

***

###### What is the difference between **UNION and UNION ALL**?

- `UNION` - Removes duplicate rows from the result
- `UNION ALL` - Includes all duplicates
