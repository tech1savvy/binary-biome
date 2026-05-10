---
noteId: 1777823470222
---

When should you use specific types vs default types in Go?

---

Default types to use unless you have a specific performance reason not to:
- `bool`, `string`, `int`, `uint`, `byte`, `rune`, `float64`, `complex128`

Use specific types (e.g., `uint16`, `int8`) only when:
- You need to reduce memory usage in resource-constrained applications
- You need a specific range of values (e.g., `uint64` for large unsigned integers)

Excessive type conversions make code slow and hard to read.