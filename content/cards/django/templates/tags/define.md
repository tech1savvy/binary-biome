---
id: define
aliases: []
noteId: 1777823466522
---

What are template tags in Django?

---

Template tags are Django-specific syntax that provide logic, control flow, and functionality beyond simple variable display. They use `{% tag %}` syntax.

---

Template tags allow you to:
- **Control flow**: Use `{% if %}` for conditionals, `{% for %}` for loops
- **Template logic**: Extend templates, include other templates, load custom tags
- **URL generation**: Create links using `{% url %}` tag
- **Comments**: Add template comments that don't appear in HTML

Unlike variables `{{ }}` which display data, tags `{% %}` perform actions and control how the template is processed.

Common tag categories:
- **Control tags**: if, for, with
- **Template structure**: extends, block, include
- **Utility tags**: url, load, comment 