### What are containers and how do they compare to VMs?

---

A container is a standardized unit that packages up code and all its dependencies.

- **Isolation:** Containers create their own independent environment
- **Standardization:** They run reliably on any platform (Dev, QA, Production, Cloud)
- **Docker:** A popular container runtime that simplifies management of the OS stack

**Containers vs. Virtual Machines (VMs):**

| Feature | Containers | Virtual Machines (EC2) |
| :--- | :--- | :--- |
| OS/Kernel | Share the host's OS and kernel | Each VM has its own guest OS |
| Weight | Lightweight (MBs) | Heavyweight (GBs) |
| Startup Time | Almost instant (seconds) | Minutes (full boot sequence) |
