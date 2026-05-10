---
tags:
  - "#flashcards/sql-indexes"
noteId: 1777823459195
---

###### What are **indexes** in SQL?

Indexes are structures that enhance database query performance. They're typically implemented as binary trees or B-trees and allow efficient lookup of rows. PRIMARY KEY columns are indexed by default.

***

###### How do you **create an index** on a column?

```sql
CREATE INDEX email_idx ON users (email);
```

Creates an index on the email column, enhancing speed of queries that filter or sort by email.

***

###### **When should you use indexes**?

- Columns frequently used in WHERE clauses
- Columns used for sorting (ORDER BY)
- Columns used for joining tables
- PRIMARY KEY columns are indexed automatically

Indexes can be stored in memory or on disk. Trade-off: faster reads, slower writes.
