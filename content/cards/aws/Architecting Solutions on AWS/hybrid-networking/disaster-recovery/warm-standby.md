### 3. Warm Standby

---

Strategy:

- smaller version of production always running.

During disaster:

1. scale resources up
2. route traffic to standby environment.

Characteristics:

- low RTO
- higher cost than pilot light.

Environment includes:

- running app servers
- running databases
- minimal capacity.
