---
tags:
  - "#flashcards/sql-and-operator"
noteId: 1777823458870
---

###### What is the **AND logical operator** in SQL?

The AND operator combines multiple conditions in a WHERE clause, allowing you to filter results based on multiple criteria. A row is included only if all conditions combined with AND are true.

***

###### What is the **basic syntax** for using AND?

```sql
SELECT product_name, quantity, shipment_status
FROM products
WHERE shipment_status = 'pending'
AND quantity BETWEEN 0 and 10;
```

***

###### How do you **filter with equality operators** using AND?

```sql
SELECT *
FROM users
WHERE country = 'CA'
AND age < 18;
```

***

###### What **comparison operators** can you use with AND?

- `=` - Equal to
- `<` - Less than
- `>` - Greater than
- `<=` - Less than or equal
- `>=` - Greater than or equal

Note: SQL uses `=` for equality, not `==` like many programming languages.
