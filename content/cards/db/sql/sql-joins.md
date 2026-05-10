---
tags:
  - "#flashcards/sql-joins"
noteId: 1777823459272
---

###### What is a **JOIN** in SQL?

A JOIN combines rows from two or more tables based on a related column between them.

***

###### What are the **types of JOINs**?

- `INNER JOIN` - Returns matching records from both tables
- `LEFT JOIN` - Returns all from left table + matched from right
- `RIGHT JOIN` - Returns all from right table + matched from left
- `FULL OUTER JOIN` - Returns all records when match in either table
- `SELF JOIN` - Joins a table with itself
- `CROSS JOIN` - Returns Cartesian product of two tables

***

###### How does an **INNER JOIN** work?

```sql
SELECT students.name, courses.course_name
FROM students
INNER JOIN courses ON students.course_id = courses.course_id;
```

Returns only records with matching values in both tables.

***

###### How does a **LEFT JOIN** work?

```sql
SELECT students.name, courses.course_name
FROM students
LEFT JOIN courses ON students.course_id = courses.course_id;
```

Returns all records from the left table; unmatched right side shows `NULL`.

***

###### How does a **RIGHT JOIN** work?

```sql
SELECT students.name, courses.course_name
FROM students
RIGHT JOIN courses ON students.course_id = courses.course_id;
```

Returns all records from the right table; unmatched left side shows `NULL`.

***

###### How does a **SELF JOIN** work?

```sql
SELECT e1.emp_name as employee, e2.emp_name as manager
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.emp_id;
```

Joins a table with itself using aliases to distinguish the instances.

***

###### How does a **CROSS JOIN** work?

```sql
SELECT students.name, courses.course_name
FROM students
CROSS JOIN courses;
```

Returns Cartesian product - every combination of rows from both tables.

***

###### What is a **NATURAL JOIN**?

NATURAL JOIN automatically joins tables based on columns with the same name and data type. It eliminates the need to specify the ON clause.

```sql
SELECT * FROM students NATURAL JOIN courses;
```

- Works only when column names match exactly
- Considered less explicit - many developers prefer explicit ON clauses for clarity

***

###### Why are **aliases important** in JOINs?

When two tables share column names, use table aliases to specify which table's column you're referring to. Aliases make queries less verbose but should be used carefully for clarity.

```sql
SELECT e.name, d.name
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;
```

***

###### What is **namespacing** in SQL?

Namespacing uses dot notation (`table_name.column_name`) to specify which table a column belongs to. Useful when different tables have columns with the same name.

```sql
SELECT students.name, classes.name
FROM students
INNER JOIN classes ON classes.class_id = students.class_id;
```

Avoids ambiguity and ensures correct data retrieval.
