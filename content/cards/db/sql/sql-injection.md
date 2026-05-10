---
tags:
  - "#flashcards/sql-injection"
noteId: 1777823459222
---

###### What is **SQL injection**?

SQL injection is a security vulnerability that allows attackers to interfere with database queries. It occurs when user input is improperly sanitized and incorporated directly into SQL statements.

***

###### How do you **prevent SQL injection**?

Use parameterized queries or prepared statements provided by your database library, which automatically handle input sanitization. Never concatenate user input directly into SQL queries.

***

###### What is a **vulnerable query** example?

```sql
query := "SELECT * FROM users WHERE username = '" + username + "';"
```

***

###### What is a **safe parameterized query** example?

```go
err := db.QueryRow("SELECT * FROM users WHERE username = ?", username).Scan(&user)
```
