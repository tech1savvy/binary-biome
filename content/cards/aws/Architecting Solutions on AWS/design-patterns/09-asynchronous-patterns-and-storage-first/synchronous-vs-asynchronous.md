### Synchronous vs Asynchronous

---

## Synchronous (Current System)

Flow:

Client → API → Compute → Database → Downstream APIs → Response

Problems:
User waits for all steps
Slow downstream services delay response
Failures crash the request
