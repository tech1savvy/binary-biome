---
noteId: 1778320499990
---

### How do I get average CPU usage across all nodes?

---

```promql
avg(
  rate(node_cpu_seconds_total{mode!="idle"}[5m])
)
```

`node_cpu_seconds_total` excludes idle CPU.
`rate(...[5m])` calculates usage over 5 minutes.
`avg(...)` averages across all CPUs and nodes.

Returns a single value (e.g., `0.42` = ~42% utilization).

0.2–0.5 → normal | 0.6–0.8 → warming up | 0.9+ → on fire
