---
id: delete
noteId: 1777823479972
---

What HTTP status codes are used for DELETE operations?

---

**Success codes:**
- **204 No Content** - Resource deleted successfully, no response body (most common)
- **200 OK** - Resource deleted, with response body containing details
- **202 Accepted** - Deletion accepted but not yet completed (async)

**Error code:**
- **404 Not Found** - Resource doesn't exist

---

- 204 is the standard for simple deletion confirmations
- 200 when you need to return deletion details
- 202 for asynchronous delete operations
- 404 when the target resource is not found
