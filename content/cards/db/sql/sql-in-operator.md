---
tags:
  - "#flashcards/sql-in-operator"
noteId: 1777823459172
---

###### What is the **IN operator** in SQL?

The IN operator filters results by checking if a value matches any value in a list. It simplifies queries by replacing multiple OR conditions with more concise syntax.

***

###### How do you **use the IN operator** to filter results?

```sql
SELECT product_name, shipment_status
FROM products
WHERE shipment_status IN ('shipped', 'preparing', 'out of stock');
```

***

###### What is the **equivalent query** using OR conditions?

```sql
SELECT product_name, shipment_status
FROM products
WHERE shipment_status = 'shipped'
   OR shipment_status = 'preparing'
   OR shipment_status = 'out of stock';
```
