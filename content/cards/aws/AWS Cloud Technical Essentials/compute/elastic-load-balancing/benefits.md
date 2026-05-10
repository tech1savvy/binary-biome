### What are the benefits and selection criteria for ELB?

---

**Selection Guide:**

| Requirement | Best Choice |
| :--- | :--- |
| Simple HTTP/Web traffic | **ALB** |
| Path-based routing / Microservices | **ALB** |
| Static IP requirements | **NLB** |
| Ultra-low latency / Millions of reqs | **NLB** |
| Non-HTTP protocols (gaming, VOIP) | **NLB** |

**Security & Optimization:**
- **TLS/SSL Offloading:** ALB handles encryption/decryption, reducing CPU load on backend servers. Certificates managed via Amazon Certificate Manager (ACM)
- **User Authentication:** Authenticates users (SAML, LDAP, OIDC) before they reach the application
- **Sticky Sessions (ALB):** Uses HTTP cookies to ensure a client remains connected to the same backend server (required for stateful apps)
