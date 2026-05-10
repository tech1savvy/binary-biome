---
id: meta-class
noteId: 1777823465297
---

What is a Django model's `Meta` class and when should you use it?

---

- The inner `class Meta:` on a model configures model-wide behavior without adding fields.
- Common uses: naming, ordering, app/table behavior, permissions, and constraints.

Example:
```python
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    published_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        db_table = "cms_article"                  # custom table name
        ordering = ["-published_at", "title"]    # default ordering for QuerySets
        verbose_name = "article"
        verbose_name_plural = "articles"
        get_latest_by = "published_at"            # used by latest()
        default_related_name = "articles"         # reverse name from related models
        indexes = [models.Index(fields=["published_at"])]
        constraints = [
            models.UniqueConstraint(
                fields=["title"], name="unique_article_title"
            )
        ]
        # managed = True                          # Django manages migrations (default)
        # app_label = "myapp"                     # only needed for models outside apps
        # abstract = False                         # True for abstract base classes
        # proxy = False                            # True for proxy models
```

---

Common `Meta` options (high level):
- Naming/labels: `verbose_name`, `verbose_name_plural`, `default_related_name`.
- Database/table: `db_table`, `db_tablespace`, `managed`, `app_label`.
- Query behavior: `ordering`, `get_latest_by`.
- Integrity/performance: `constraints` (e.g., `UniqueConstraint`), `indexes`.
- Inheritance/model type: `abstract`, `proxy`.

Use `Meta` to centralize conventions and DB behavior; keep business logic in fields/methods, not in `Meta`.
