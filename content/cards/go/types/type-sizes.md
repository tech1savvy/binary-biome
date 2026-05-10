---
noteId: 1777823470372
---

What does the size (8, 16, 32, 64, 128) represent in Go types?

---

The size represents how many **bits in memory** will be used to store the variable.

Type categories:
- **Signed integers** (no decimal): `int`, `int8`, `int16`, `int32`, `int64`
- **Unsigned integers** (non-negative): `uint`, `uint8`, `uint16`, `uint32`, `uint64`, `uintptr`
- **Signed decimals**: `float32`, `float64`
- **Complex numbers** (real + imaginary): `complex64`, `complex128`

Default types to use:
- `int` / `uint` / `float64` / `complex128`