---
noteId: 1777823469372
---

How does Node.js/Express handle concurrent requests?

---

Node.js servers are typically single-threaded and use an async event loop. When a request has to wait on I/O (like to a database), the server puts it on pause and does something else.