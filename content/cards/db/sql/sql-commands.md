---
tags:
  - "#flashcards/sql-commands"
noteId: 1777823458946
---

###### What are the **5 categories** of SQL commands?

- **DDL** (Data Definition Language) - Define database structure
- **DML** (Data Manipulation Language) - Manipulate data
- **DQL** (Data Query Language) - Query data
- **DCL** (Data Control Language) - Control access
- **TCL** (Transaction Control Language) - Manage transactions

***

###### What are the **DDL** commands?

- `CREATE` - Create databases/tables
- `RENAME` - Rename objects
- `ALTER` - Modify structure
- `DROP` - Delete objects
- `TRUNCATE` - Remove all rows

***

###### What are the **DML** commands?

- `INSERT` - Add new records
- `UPDATE` - Modify existing records
- `DELETE` - Remove records

***

###### What are the **DQL** commands?

- `SELECT` - Query and retrieve data

***

###### What are the **DCL** commands?

- `GRANT` - Give privileges
- `REVOKE` - Remove privileges

***

###### What are the **TCL** commands?

- `COMMIT` - Save changes permanently
- `ROLLBACK` - Undo changes
- `SAVEPOINT` - Create a checkpoint to rollback to

***

###### How do you use **ALTER TABLE**?

ALTER TABLE modifies the schema of an existing table without losing data.

**Rename table:**
```sql
ALTER TABLE employees
RENAME TO contractors;
```

**Rename column:**
```sql
ALTER TABLE contractors
RENAME COLUMN salary TO invoice;
```

**Add column:**
```sql
ALTER TABLE contractors
ADD COLUMN job_title TEXT;
```

**Drop column:**
```sql
ALTER TABLE contractors
DROP COLUMN is_manager;
```
