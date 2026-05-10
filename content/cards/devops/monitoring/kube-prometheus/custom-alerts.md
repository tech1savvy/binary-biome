---
noteId: 1778320499815
---

### How do I add custom high CPU and memory alerts via kube-prometheus-stack Helm values?

---

Create a `custom-alerts-values.yaml` with rules under `prometheus.additionalPrometheusRulesMap`:

```yaml
prometheus:
  additionalPrometheusRulesMap:
    custom-resource-alerts:
      groups:
        - name: resource-usage
          rules:
            - alert: HighCpuUsage
              expr: sum(rate(container_cpu_usage_seconds_total{container!="POD",container!=""}[5m])) by (pod) > 0.8
              for: 5m
              labels:
                severity: warning
              annotations:
                summary: "High CPU usage detected"
                description: "Pod {{ $labels.pod }} CPU usage exceeds 80%"
            - alert: HighMemoryUsage
              expr: sum(container_memory_working_set_bytes{container!="POD",container!=""}) by (pod) / sum(container_spec_memory_limit_bytes{container!="POD",container!=""}) by (pod) > 0.8
              for: 5m
              labels:
                severity: warning
              annotations:
                summary: "High memory usage detected"
                description: "Pod {{ $labels.pod }} memory usage exceeds 80%"
```

Upgrade the Helm release to apply:
```bash
helm upgrade kube-prometheus prometheus-community/kube-prometheus-stack -n monitoring -f custom-alerts-values.yaml
```
