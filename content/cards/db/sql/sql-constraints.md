---
tags:
  - "#flashcards/sql-constraints"
noteId: 1777823458972
---

###### What are **constraints** in SQL?

Constraints are rules that enforce specific behaviors on data. NOT NULL ensures a column cannot have NULL values. Constraints maintain data integrity by ensuring data adheres to specified rules.

***

###### How do you **create a table with constraints**?

```sql
CREATE TABLE employees(
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE,
    title TEXT NOT NULL
);
```

***

###### What is a **NULL value** in SQL?

NULL represents missing or undefined data. It is distinct from zero or an empty string - NULL means no value has been assigned.

***

###### How do you **check for NULL values**?

```sql
-- Find users without email
SELECT * FROM users WHERE email IS NULL;

-- Find users with email
SELECT * FROM users WHERE email IS NOT NULL;
```

Use `IS NULL` or `IS NOT NULL` - never use `= NULL` (won't work).

***

###### How do you **create a table with NULL constraints**?

```sql
CREATE TABLE orders (
    order_id INT,
    order_date DATE,
    customer_id INT,
    status VARCHAR(20) NOT NULL
);
```

NOT NULL constraint prevents NULL values in that column.

***

###### Can you **add constraints to existing tables** in SQLite?

No. SQLite does not support adding constraints via ALTER TABLE. All constraints must be specified when creating the table with CREATE TABLE.

Other databases (MySQL, PostgreSQL) allow adding constraints with ALTER TABLE, but SQLite requires planning constraints at table creation.

***

###### What is a **PRIMARY KEY**?

A PRIMARY KEY uniquely identifies each record in a table. It ensures the column is unique and NOT NULL.

```sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50)
);

-- Works
INSERT INTO users (id, username) VALUES (1, 'alice');

-- Fails: duplicate id
INSERT INTO users (id, username) VALUES (1, 'charlie');
```

Convention: name primary key column `id`. Values often auto-increment.
