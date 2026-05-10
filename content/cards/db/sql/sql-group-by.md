---
tags:
  - "#flashcards/sql-group-by"
noteId: 1777823459096
---

###### What is the **GROUP BY clause** in SQL?

GROUP BY arranges identical data into groups. It's used with aggregate functions (SUM, COUNT, AVG, etc.) to perform operations on grouped data, returning a single summary row for each group.

***

###### How do you **count songs per album** using GROUP BY?

```sql
SELECT album_id, COUNT(song_id)
FROM songs
GROUP BY album_id;
```

***

###### How do you **sum transactions** for each user?

```sql
SELECT user_id, SUM(amount) AS balance
FROM transactions
WHERE status = 'successful'
GROUP BY user_id;
```
