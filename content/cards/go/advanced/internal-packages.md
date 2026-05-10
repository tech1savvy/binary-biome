---
noteId: 1777823468672
---

What are internal packages in Go?

---

Internal packages restrict visibility - only code in the parent directory and its subdirectories can import them.

Use to reduce public API surface area. See: https://dave.cheney.net/2019/10/06/use-internal-packages-to-reduce-your-public-api-surface