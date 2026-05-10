---
noteId: 1778392160948
---

### Asynchronous (New Design)

---

Flow:

Client → API → Buffer (Storage) → Response
↓
Background Processing

Benefits:

- Fast client response
- Backend processing happens later
- More resilient to failures
