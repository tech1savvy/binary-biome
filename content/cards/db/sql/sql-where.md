---
tags:
  - "#flashcards/sql-where"
noteId: 1777823459496
---

###### What is the **WHERE clause** in SQL?

The WHERE clause filters rows based on a specific condition, extracting only records that fulfill the specified criteria.

***

###### How do you **filter rows with WHERE**?

```sql
SELECT * FROM employees WHERE age >= 20;
```

***

###### How do you use **WHERE with SELECT**?

```sql
SELECT email FROM users WHERE subscribed = true;
```

Selects only subscribed users.

***

###### How do you use **WHERE with UPDATE**?

```sql
UPDATE users SET status = 'active' WHERE last_login > '2023-01-01';
```

WHERE works with SELECT, UPDATE, and DELETE to target specific records, making operations more efficient and precise.
