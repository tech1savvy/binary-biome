---
noteId: 1778320500015
---

### How do I get HTTP request rate for a specific service?

---

```promql
rate(http_requests_total{job="my-service"}[5m])
```

`http_requests_total` counter → `rate(...[5m])` converts to req/sec.

Grouped by endpoint:
```promql
sum by (path) (
  rate(http_requests_total{job="my-service"}[5m])
)
```

Output:
```
path           value
/api/login     12.3
/api/data      45.7
```

Sudden spike = traffic surge or attack. Sudden drop = service down.
