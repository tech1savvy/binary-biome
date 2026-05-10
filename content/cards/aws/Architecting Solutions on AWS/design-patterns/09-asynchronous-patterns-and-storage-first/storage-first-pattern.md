### Storage-First Pattern

---

Idea: **store request first, process later.**

Mechanism:

- API Gateway sends request directly to storage
- Processing happens asynchronously

Advantages:

- Lower latency
- Fewer components in request path
- Built-in buffering

API Gateway can integrate directly with AWS services without Lambda.

Example:

API Gateway → SQS
