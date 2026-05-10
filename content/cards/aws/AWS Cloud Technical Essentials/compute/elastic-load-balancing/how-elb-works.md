### How does ELB work?

---

**Core Concepts:**
- **High Availability:** Regional service; AWS manages maintenance across multiple AZs
- **Health Checks:** ELB only sends traffic to targets that pass health checks (e.g., successful TCP connection or HTTP 200 OK)
- **Connection Draining:** Prevents terminating instances until active requests are finished

**Load Balancer Types:**

| Feature | ALB (Layer 7 - Application) | NLB (Layer 4 - Transport) |
| :--- | :--- | :--- |
| Protocols | HTTP, HTTPS | TCP, UDP, TLS |
| Performance | High (Scalable) | Ultra-High (Millions req/sec) |
| Static IP | No (uses DNS name) | Yes (supports Elastic IPs) |
| Routing Basis | URL Path, Host, Headers, Cookies | IP Protocol, Port, Flow Hash |
| Algorithms | Round-Robin, Least Outstanding Req | Flow Hash |
| Source IP | LB IP (uses X-Forwarded-For) | Preserves Client Source IP |

**ALB Routing Algorithms:**
- **Round-Robin:** Sends requests to each server in order (default)
- **Least Outstanding Request:** Sends traffic to instances with the fewest pending requests

**NLB Features:**
- **Flow Hash Algorithm:** Routes based on a hash of Protocol, Source/Dest IP, Source/Dest Port, and TCP Sequence Number
- **Extreme Scale:** Handles sudden, massive spikes instantly
- **Sticky Sessions:** Based on Source IP address
