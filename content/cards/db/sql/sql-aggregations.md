---
tags:
  - "#flashcards/sql-aggregations"
noteId: 1777823458823
---

###### What are **aggregations** in SQL?

Aggregations are operations that process multiple rows to produce a single summarizing value. Common functions include COUNT, SUM, AVG, MIN, and MAX.

***

###### How do you **count records with a condition**?

```sql
SELECT COUNT(*)
FROM orders
WHERE status = 'completed';
```

***

###### How do you **calculate the total sum** of a numeric column?

```sql
SELECT SUM(salary) FROM employees;
```

SUM returns the total sum of a numeric column, ignoring NULL values.

***

###### How do you **filter data before summing**?

```sql
SELECT SUM(amount)
FROM transactions
WHERE user_id = 9 AND status = 'successful';
```

SUM is commonly used for financial data like salaries or transaction amounts. Returns a single record with the aggregated value.

***

###### How do you **calculate the average** of a numeric column?

```sql
SELECT AVG(salary) FROM employees;
```

AVG returns the average value, ignoring NULL values.

***

###### How do you use **AVG with filtering**?

```sql
-- Average age for US users
SELECT AVG(age) AS average_user_age
FROM users
WHERE country_code = 'US';
```

AVG computes the arithmetic mean of all non-NULL values. Useful for data analysis insights.

***

###### How do you **find the minimum value**?

```sql
SELECT MIN(salary) FROM employees;
```

MIN returns the smallest value of the selected column.

***

###### How do you **find the maximum value**?

```sql
SELECT MAX(salary) FROM employees;
```

MAX returns the largest value of the selected column.

***

###### How do you use **MAX/MIN with filtering**?

```sql
-- Highest price for a product
SELECT MAX(price) FROM products;

-- Highest transaction for a user
SELECT user_id, MAX(amount)
FROM transactions
WHERE was_successful = true;

-- Lowest price
SELECT MIN(price) FROM products;
```

MAX/MIN only return the value from the specified column, not other data.

***

###### What is the **ROUND function**?

ROUND() rounds numeric values to a specified precision.

```sql
-- Round to nearest whole number
SELECT ROUND(123.456) AS rounded_value;  -- Result: 123

-- Round to one decimal place
SELECT song_name, ROUND(AVG(song_length), 1) AS rounded_length
FROM songs;
```

Syntax: `ROUND(value, precision)` - precision defaults to 0 if omitted.
