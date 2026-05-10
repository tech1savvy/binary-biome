---
tags:
  - "#flashcards/sql-data-types"
noteId: 1777823459021
---

###### What are the **integer data types** in SQL?
| Type | Range (Signed) | Storage |
|------|----------------|---------|
| TINYINT | -128 to 127 | 1 byte |
| INT | -2,147,483,648 to 2,147,483,647 | 4 bytes |
| BIGINT | -9.2 quintillion to 9.2 quintillion | 8 bytes |

***

###### What are the **floating-point data types** in SQL?

| Type | Precision | Storage |
|------|-----------|---------|
| FLOAT | ~7 digits | 4 bytes |
| DOUBLE | ~15 digits | 8 bytes |

- Both store approximate values and may have rounding errors
- `DOUBLE(p,s)` allows specifying precision and scale (e.g., `DOUBLE(10,2)`)

***

###### What are the **character data types** in SQL?

| Type | Usage | Description |
|------|-------|-------------|
| CHAR(n) | Fixed-length | Right-pads with spaces if shorter |
| VARCHAR(n) | Variable-length | Stores only what's used |
| TEXT | Large text | For large blocks of text |

***

###### What are the **date/time data types** in SQL?

| Type | Stores |
|------|--------|
| DATE | Year, month, day |
| TIME | Hours, minutes, seconds |
| DATETIME | Date + time combined |
| TIMESTAMP | Date + time with timezone awareness |
| YEAR | Year value only (2-4 digits) |

***

###### What are **BLOB** and **BOOLEAN** data types?

- **BLOB** - Binary Large Object for images, audio, video; stored as exact bytes
- **BOOLEAN** - Stores TRUE/FALSE; internally maps to 1/0 or 't'/'f'
  - PostgreSQL: native boolean
  - MySQL: alias for TINYINT(1)
  - SQL Server: uses BIT

***

###### What are the **SQLite storage classes**?

SQLite uses simplified storage classes:
- **NULL** - Null value
- **INTEGER** - Signed integer (0-8 bytes)
- **REAL** - 64-bit floating point
- **TEXT** - Text string (UTF-8)
- **BLOB** - Binary data
- **BOOLEAN** - Stored as integer (0=false, 1=true)

```sql
CREATE TABLE Characters (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    health REAL,
    inventory BLOB,
    is_active BOOLEAN
);
```
