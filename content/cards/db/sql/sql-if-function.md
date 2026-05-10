---
tags:
  - "#flashcards/sql-if-function"
noteId: 1777823459147
---

###### What is the **IF function** in SQL?

The IF function returns one of two values based on whether a condition is true or false. It's a simpler alternative to CASE for basic conditions.

```sql
IF(condition, value_if_true, value_if_false);
```

***

###### How do you **categorize data with IF**?

```sql
SELECT std_id, std_name, std_percentage,
IF(std_percentage > 90, 'TOP',
IF(std_percentage BETWEEN 34 AND 89, 'PASS',
'Fail')) AS category
FROM student;
```

***

###### What is the difference between **CASE and IF**?

- CASE is more readable for multiple conditions
- IF has slightly better time complexity
- CASE works in all SQL databases; IF is MySQL-specific

***

###### How do you **find the Nth highest value**?

```sql
-- Find 2nd highest salary
SELECT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;  -- OFFSET = n-1
```

***

###### How do you **find the Nth lowest value**?

```sql
-- Find 2nd lowest salary
SELECT salary
FROM employees
ORDER BY salary ASC
LIMIT 1 OFFSET 1;  -- OFFSET = n-1
```

***

###### How do you **compare to aggregate values**?

```sql
-- Employees older than minimum age
SELECT * FROM employees WHERE age > (SELECT MIN(age) FROM employees);

-- Employees earning more than minimum
SELECT * FROM employees WHERE salary > (SELECT MIN(salary) FROM employees);
```

***

###### How do you **find records with minimum value**?

```sql
SELECT * FROM employees WHERE age = (SELECT MIN(age) FROM employees);
```

***

###### How do you **select aggregate alongside columns**?

```sql
SELECT (SELECT AVG(age) FROM employee) AS avgAge, age FROM employee;
```

Shows the average age next to each employee's age.

***

###### What is **GROUP_CONCAT**?

GROUP_CONCAT concatenates values from multiple rows into a single string for each group.

```sql
SELECT subject, GROUP_CONCAT(name) AS students
FROM students
GROUP BY subject;
```

Returns comma-separated list of student names per subject.

***

###### What is the **IIF function** in SQLite?

IIF is SQLite's ternary operator that evaluates a condition and returns one of two values. It works like a simplified IF function.

```sql
IIF(condition, true_result, false_result)
```

***

###### How do you use **IIF for calculated columns**?

```sql
SELECT quantity,
    IIF(quantity < 10, 'Order more', 'In Stock') AS directive
FROM products;
```

Creates dynamic columns based on conditions, similar to Excel formulas.
