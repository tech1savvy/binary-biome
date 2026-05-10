---
noteId: 1778320499115
---

### What are the Ingress path types?

---

Controls how the `path` field is matched. Three types in `networking.k8s.io/v1`:

| Type | Matching behavior |
|------|-------------------|
| `Exact` | Path must match exactly (e.g., `/api` matches only `/api`) |
| `Prefix` | Prefix match (e.g., `/api` matches `/api`, `/api/users`, `/api/v2`) |
| `ImplementationSpecific` | Controller decides — often behaves like `Prefix` |

```yaml
paths:
- path: /api
  pathType: Exact          # only /api
  backend: ...
- path: /api
  pathType: Prefix         # /api, /api/users, /api/v2
  backend: ...
```

```bash
kubectl explain ingress.spec.rules.http.paths.pathType
```

---

Use `Prefix` for most cases. `Exact` is rarely needed since Ingress doesn't support regex natively.
