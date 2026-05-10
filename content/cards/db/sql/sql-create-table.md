---
tags:
  - "#flashcards/sql-create-table"
noteId: 1777823458996
---

###### What is the **CREATE TABLE statement** in SQL?

CREATE TABLE defines a new table within a database. It specifies the table name followed by column definitions in parentheses. Each column definition includes the column name and its datatype.

***

###### What is an example of **creating simple tables**?

```sql
CREATE TABLE students (
    student_id INTEGER,
    name TEXT,
    major TEXT,
    enrollment_year INTEGER
);

CREATE TABLE projects (
    project_id INTEGER,
    project_name TEXT,
    start_date TEXT,
    is_active BOOLEAN
);
```

***

###### What is **AUTO INCREMENT**?

AUTO INCREMENT automatically generates unique values for a column, typically for primary keys.

In SQLite, `INTEGER PRIMARY KEY` automatically increments by default:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    email TEXT
);

-- id is auto-generated
INSERT INTO users (name, email) VALUES ('Lance', 'lance@email.com');
```

Note: Does not apply to UUIDs - server must generate those.
