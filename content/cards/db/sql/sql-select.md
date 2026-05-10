---
tags:
  - "#flashcards/sql-select"
noteId: 1777823459396
---

###### What is a **SELECT statement** in SQL?

A SELECT statement is the fundamental way to query and retrieve data from one or more tables without modifying the data. It uses the FROM clause to specify the table and concludes with a semicolon.

***

###### How do you **select a single field**?

```sql
SELECT id FROM users;
```

***

###### How do you **select multiple fields**?

```sql
SELECT id, name FROM users;
```

***

###### How do you **select all fields** from a table?

```sql
SELECT * FROM users;
```

***

###### What is **SELECT DISTINCT**?

DISTINCT removes duplicate records from query results, returning only unique rows.

```sql
-- Unique company names
SELECT DISTINCT company_name FROM employees;

-- Unique country codes
SELECT DISTINCT country_code FROM users;
```

Useful for reports or analytics where only unique entries matter.

