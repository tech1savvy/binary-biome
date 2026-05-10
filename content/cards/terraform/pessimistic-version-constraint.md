---
id: pessimistic-version-constraint
aliases: []
tags: []
noteId: 1777823483597
---

Which version constraint operator to use in Terraform to allow only patch updates within a specific minor version?

---

Use the **pessimistic version constraint operator** (`~>`).

- It allows versions that are greater than or equal to the specified version but less than the next minor version.
- This is useful for maintaining compatibility with a specific minor version's API while still getting bug fixes.

**Syntax:**

```hcl
version = "~> 6.18.0"
```

**Behavior:**

- **Allows:** `>= 6.18.0` and `< 6.19.0` (e.g., `6.18.1`, `6.18.2`)
- **Prevents:** `6.19.0` or higher

---

| Operator | Meaning                      |   Example   | Allowed             |
| :------: | :--------------------------- | :---------: | :------------------ |
|   `~>`   | Allows only patch updates    | `~> 6.18.0` | `>=6.18.0, <6.19.0` |
|   `^`    | Allows minor & patch updates |  `^6.18.0`  | `>=6.18.0, <7.0.0`  |
