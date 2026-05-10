---
noteId: 1777823469947
---

What are guard clauses?

---

Guard clauses use early returns when a given condition is met to flatten nested conditionals into a linear flow:

Nested (hard to follow):
```go
func getInsuranceAmount(status insuranceStatus) int {
  amount := 0
  if !status.hasInsurance(){
    amount = 1
  } else {
    if status.isTotaled(){
      amount = 10000
    } else {
      if status.isDented(){
        amount = 160
        if status.isBigDent(){
          amount = 270
        }
      } else {
        amount = 0
      }
    }
  }
  return amount
}
```

Flattened with guard clauses (cleaner):
```go
func getInsuranceAmount(s insuranceStatus) int {
    if !s.hasInsurance() {
        return 1
    }
    if s.isTotaled() {
        return 10000
    }
    if !s.isDented() {
        return 0
    }
    if s.isBigDent() {
        return 270
    }
    return 160
}
```


---

- Early returns reduce cognitive load by eliminating nested branches.
- Error handling in Go naturally encourages this pattern.
