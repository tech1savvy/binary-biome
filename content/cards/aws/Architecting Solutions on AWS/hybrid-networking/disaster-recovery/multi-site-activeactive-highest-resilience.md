### 4. Multi-Site Active/Active (Highest Resilience)

---

Strategy:

- full production environments in multiple regions
- traffic distributed across regions.

During disaster:

- remove failed region from routing.

Characteristics:

- near zero RTO
- near zero RPO
- highest cost and complexity.

Example tools:

- Route 53 health checks
- global load balancing.
