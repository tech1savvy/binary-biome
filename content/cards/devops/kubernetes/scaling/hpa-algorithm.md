---
noteId: 1777822470796
---

### How does the HPA scaling algorithm work?

---

HPA calculates desired replicas using a simple ratio:

```
desiredReplicas = ceil(currentReplicas × currentMetricValue / desiredMetricValue)
```

- Current 200m, target 100m → **doubles** replicas (`200 ÷ 100 = 2.0`)
- Current 50m, target 100m → **halves** replicas (`50 ÷ 100 = 0.5`)
- No scaling action if ratio is close to `1.0` (tolerance: `0.1` by default)

---

The controller evaluates this periodically and applies the ceiling function to always round up.
