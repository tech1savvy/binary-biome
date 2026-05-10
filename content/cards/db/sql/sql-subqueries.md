---
tags:
  - "#flashcards/sql-subqueries"
noteId: 1777823459422
---

###### What are **subqueries** in SQL?

Subqueries (nested queries) are queries placed within another SQL statement. They retrieve data based on the result of another query. Useful when retrieving data from multiple tables that cannot be directly joined.

Operators used with subqueries: `IN`, `=`, `EXISTS`

***

###### What is the **basic syntax** for a subquery?

```sql
SELECT column_name, (SELECT another_column FROM another_table) FROM table_name;
```

***

###### How do you use **subqueries with IN**?

```sql
SELECT id, song_name, artist_id
FROM songs
WHERE artist_id IN (
    SELECT id
    FROM artists
    WHERE artist_name LIKE 'Rick%'
);
```

Returns songs by artists whose names start with "Rick".

***

###### How do you use **subqueries with =**?

```sql
SELECT *
FROM transactions
WHERE user_id = (
    SELECT id
    FROM users
    WHERE name = 'David'
);
```

Returns transactions for a specific user by name.

***

###### What is a **CASE statement** in SQL?

CASE provides conditional logic within a query, similar to a switch statement. It can be used in SELECT and UPDATE statements.

***

###### What is the **CASE statement syntax**?

```sql
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
ELSE
    resultN
END
```

***

###### How do you **categorize data with CASE**?

```sql
SELECT std_id, std_name, std_percentage,
CASE
    WHEN std_percentage > 90 THEN 'TOP'
    WHEN std_percentage BETWEEN 34 AND 89 THEN 'PASS'
ELSE
    'Fail'
END AS category
FROM student;
```
