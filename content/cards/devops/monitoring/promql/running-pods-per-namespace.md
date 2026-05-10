---
noteId: 1778320500040
---

### How do I get the total number of running Pods per namespace?

---

```promql
count by (namespace) (
  kube_pod_status_phase{phase="Running"}
)
```

`kube_pod_status_phase` from kube-state-metrics.
Filters only `Running` pods, grouped by namespace.

Output:
```
namespace     value
default       12
kube-system   8
prod          45
```

Sudden drops = crashes/evictions. Sudden spikes = scaling or runaway controllers.
