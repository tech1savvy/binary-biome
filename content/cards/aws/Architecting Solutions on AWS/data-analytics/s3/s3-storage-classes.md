### S3 Storage Classes

---

| Storage Class        | Access Pattern           | Key Idea                          |
| -------------------- | ------------------------ | --------------------------------- |
| S3 Standard          | Frequent access          | General-purpose storage           |
| Intelligent-Tiering  | Unknown access           | Auto moves between tiers          |
| Standard-IA          | Infrequent access        | Lower storage cost, retrieval fee |
| One Zone-IA          | Infrequent               | Stored in single AZ               |
| Glacier Instant      | Archive, quick retrieval | Millisecond restore               |
| Glacier Flexible     | Archive                  | Minutes–hours retrieval           |
| Glacier Deep Archive | Long-term archive        | Lowest cost, ~12 hr retrieval     |

All classes maintain **11 nines durability**.
