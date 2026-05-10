### How DMS Works

---

Main component:

- **Replication Instance** (managed server running replication software)

Migration process:

Source Database
↓
Replication Instance (DMS)
↓
Target Database (AWS)

Steps:

1. initial full data load
2. continuous replication of new changes
3. final cutover to AWS database

Result:

- very small downtime during switchover.
