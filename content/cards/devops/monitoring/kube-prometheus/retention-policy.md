---
noteId: 1778320499890
---

### How do I change the Prometheus retention policy in kube-prometheus-stack?

---

Set retention duration via Helm values under `prometheus.prometheusSpec.retention`:

```yaml
prometheus:
  prometheusSpec:
    retention: 30d
```

Upgrade the release to apply changes:

```bash
helm upgrade kube-prometheus prometheus-community/kube-prometheus-stack -n monitoring -f retention-values.yaml
```

- Default retention is `10d`; valid units: `d` (days), `w` (weeks), `y` (years).

---

Verify retention — check pod args:
```bash
kubectl get pod -l app.kubernetes.io/name=prometheus -o yaml | grep retention
```

You should see:
```
--storage.tsdb.retention.time=15d
```
