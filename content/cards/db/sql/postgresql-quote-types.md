---
id: postgresql-quote-types
aliases: []
tags: []
noteId: 1777823458797
---

###### What is the difference between single and double quotes in PostgreSQL?

> **PostgreSQL-specific:** This behavior applies to PostgreSQL. Other databases may differ (e.g., MySQL uses backticks for identifiers, SQL Server uses brackets).

---

**Single quotes `' '`** - String literals (values)

```sql
DEFAULT 'unset'
-- or
WHERE name = 'John'
```

**Double quotes `" "`** - Identifiers (column/table names)

Use when names contain spaces, reserved words, or need case-sensitivity:

```sql
SELECT * FROM "My Table";        -- table name with space
SELECT * FROM users WHERE "Id" = 1;  -- case-sensitive column
```

**Common mistake:**
```sql
-- Wrong: double quotes reference an identifier, not a value
DEFAULT "unset"  -- ERROR: cannot use column reference

-- Correct: single quotes for string values
DEFAULT 'unset'  -- Works
```
