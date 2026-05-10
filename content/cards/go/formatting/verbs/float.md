---
noteId: 1777823469646
---

How do I format a float with specific decimal places in Go?

---

Use `%.nf` where `n` is the number of decimal places.

- `%.1f` rounds to the tenths place
- `%.2f` rounds to the hundredths place

```go
fmt.Printf("%.1f\n", 10.523)
// 10.5

fmt.Printf("%.2f\n", 10.523)
// 10.53

fmt.Printf("%.3f\n", 10.523524)
// 10.524