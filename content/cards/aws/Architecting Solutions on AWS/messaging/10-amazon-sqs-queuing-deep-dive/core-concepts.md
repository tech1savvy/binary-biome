### Core Concepts

---

**Decoupling**

- Producers send messages to queue
- Consumers retrieve and process them later

**Polling**
Consumers request messages from the queue.

Types:

- **Short Polling**
  - Default
  - Fast but may return empty results

- **Long Polling**
  - Waits up to **20 seconds**
  - Fewer empty responses
  - Lower cost
