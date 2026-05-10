---
tags:
  - "#flashcards/sql-or-operator"
noteId: 1777823459347
---

###### What is the **OR operator** in SQL?

OR is used in a WHERE clause to filter records based on multiple conditions. A row is selected if at least one condition is true. More flexible than AND (which requires all conditions true).

***

###### How do you use **OR with multiple conditions**?

```sql
SELECT product_name, quantity, shipment_status
FROM products
WHERE shipment_status = 'out of stock'
OR quantity BETWEEN 10 AND 100;
```

***

###### How do you use **parentheses with OR and AND**?

```sql
SELECT user_id
FROM users
WHERE (country = 'United States' OR country = 'Canada')
AND age < 18;
```

Parentheses clarify order of operations, ensuring conditions evaluate as intended.
