---
tags:
  - "#flashcards/sql-exclusive-joins"
noteId: 1777823459071
---

###### What is an **Exclusive Join** in SQL?

An exclusive join returns rows from one table that have no matching rows in another table. It uses LEFT/RIGHT JOIN combined with a WHERE NULL check.

***

###### How do you write a **Left Exclusive Join**?

```sql
SELECT students.name
FROM students
LEFT JOIN courses ON students.course_id = courses.course_id
WHERE courses.course_id IS NULL;
```

Returns students not enrolled in any course.

***

###### How do you write a **Right Exclusive Join**?

```sql
SELECT courses.course_name
FROM students
RIGHT JOIN courses ON students.course_id = courses.course_id
WHERE students.student_id IS NULL;
```

Returns courses with no students enrolled.

***

###### Is a **foreign key required** to perform a JOIN?

No, foreign keys are not required. JOINs can be performed on any columns with logical relationships, but foreign keys are best practice for referential integrity.
