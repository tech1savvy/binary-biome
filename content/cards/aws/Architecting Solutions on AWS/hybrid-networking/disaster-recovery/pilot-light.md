### 2. Pilot Light

---

Strategy:

- critical data always running in secondary region
- application servers not running.

During disaster:

1. start application servers
2. scale infrastructure
3. redirect traffic.

Characteristics:

- moderate RTO
- moderate cost.

Typical components always active:

- database replication
- storage replication.
