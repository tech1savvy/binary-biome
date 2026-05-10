### Monolith → Decoupled Architecture

---

**Current issue**

- Monolithic service
- Downstream failures crash the entire system
- Creates a **Single Point of Failure (SPOF)**

**Approach**

- Split service into independent components
- Reduce dependency between services

**Architecture Pattern**

- **Event-Driven Architecture (EDA)**
- Services react to events (e.g., order placed)

Benefits:

- Better resilience
- Easier scaling
- Independent service operation
