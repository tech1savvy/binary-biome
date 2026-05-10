---
noteId: 1777823470072
---

What are interfaces in Go?

---

Interfaces are **collections of method signatures** that define a set of behaviors a type must implement. A type satisfies an interface if it has all the methods defined by the interface.

Key points:
- Used for **polymorphism** — different types can be used interchangeably if they implement the same interface
- Interfaces are **implemented implicitly** — no explicit declaration needed
- If a type has all the methods in an interface, it automatically implements that interface