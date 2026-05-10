### NAT Options

---

| Feature     | NAT Instance                      | NAT Gateway                |
| ----------- | --------------------------------- | -------------------------- |
| Type        | EC2 instance running NAT software | Managed AWS service        |
| Maintenance | User-managed                      | AWS-managed                |
| Scaling     | Limited by instance size          | Automatic (up to ~45 Gbps) |
| Redundancy  | Must configure manually           | Built-in HA in AZ          |
| Decision    | Rejected                          | Selected                   |

Reason:

- less operational overhead
- higher reliability
- automatic scaling.
