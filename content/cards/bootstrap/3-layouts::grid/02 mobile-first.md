---
id: bootstrap-grid-mobile-first
noteId: 1777823456997
---

Which approach does Bootstrap's grid system use by default for responsiveness, and how does it behave?

---

- Bootstrap's grid system uses an **upward (mobile-first)** approach by default.
- Grid classes (e.g., `.col-sm-*`) apply from their specified breakpoint (`sm` ≥576px) and **upward** to larger screens.
- On extra-small screens (<576px), columns without a base class (like plain `.col`) stack vertically and share space equally.

---

- **Responsive Cascade**: Larger breakpoints (md ≥768px, lg ≥992px) inherit and can override smaller ones, ensuring layouts scale up progressively.
