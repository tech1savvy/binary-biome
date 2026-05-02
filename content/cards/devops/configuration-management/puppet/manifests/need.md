---
id: need
noteId: 1777728480140
---

Why do we need a manifest in Puppet?

---

- **Define Desired State**: Describes how a system should look (e.g., a package installed, a service running).
- **Automation**: Automatically applies the desired state, avoiding manual configuration.
- **Consistency**: Ensures multiple systems have the same configuration, reducing errors.
- **Idempotency (Self-Healing)**: Detects and corrects any system changes that deviate from the manifest.
- **Scalability**: Manages large infrastructures by applying one manifest to many servers.
- **Reusability**: Allows code to be reused across different projects with classes and modules.
