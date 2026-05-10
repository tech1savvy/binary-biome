---
id: PATTERN
aliases: []
tags: []
noteId: 1777823458772
---

###### How to create a SQL card?

---

## Structure

```markdown
---
id: {action-object}      # hyphenated, e.g., empty-a-table
aliases: []
tags: []
---

###### How to {action} {object}?

---

```sql
{SQL code}
```
```

## Rules

1. **Filename & ID**: Use the action and object hyphenated (e.g., `empty-a-table.md` → `id: empty-a-table`)
2. **Question format**: Use `######` (h6) with "How to {action} {object}?" phrasing
3. **Frontmatter**: Always include `id`, `aliases: []`, and `tags: []`
4. **Separator**: Place `---` after frontmatter and after the question
5. **Code block**: Use fenced SQL code block with `sql` language tag

## Examples

**empty-a-table.md**
```markdown
---
id: empty-a-table
aliases: []
tags: []
---

###### How to empty a table without deleting its schema?

---

```sql
TRUNCATE TABLE table_name;
```
```

**delete-a-col.md**
```markdown
---
id: delete-a-col
aliases: []
tags: []
---

###### How to delete a column from a table?

---

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```
```
