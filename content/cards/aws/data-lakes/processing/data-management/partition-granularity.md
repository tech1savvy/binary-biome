---
noteId: 1778320497115
---

###### What is the coffee grinding analogy for partitioning and compaction?

---

Just as coffee is ground differently for different beverages, dataset structure (file sizing and partition granularity) should match how the data will be queried.

Medium granularity is ideal — too coarse means scanning unnecessary data, too fine creates too many tiny files.
