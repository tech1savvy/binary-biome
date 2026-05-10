---
noteId: 1777823470347
---

How do you convert between types in Go?

---

Use type conversion syntax:
```go
temperatureFloat := 88.26
temperatureInt := int64(temperatureFloat)
```

Casting a float to an integer truncates the decimal portion.

Note: Only convert when needed - prefer default types (`int`, `uint`, `float64`) to avoid excessive conversions.