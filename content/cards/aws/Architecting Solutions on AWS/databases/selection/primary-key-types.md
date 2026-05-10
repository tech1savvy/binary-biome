### Primary Key Types

---

**Partition Key**

- Unique identifier
- Determines data distribution

**Sort Key (optional)**

- Used with partition key
- Enables range queries

Example composite key:

PartitionKey + SortKey

# Capacity Modes

**Provisioned**

- Fixed read/write capacity
- Best for predictable traffic

**On-Demand**

- Auto scaling
- Best for spiky workloads
