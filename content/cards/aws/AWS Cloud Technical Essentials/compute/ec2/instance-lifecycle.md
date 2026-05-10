### What are the key EC2 instance lifecycle concepts?

---

**Rebooting vs. Stop/Start:**
- **Reboot:** Equivalent to restarting an OS. Maintains both public and private IP addresses. Stays on the same physical host.
- **Stop/Start:** Equivalent to powering down. Loses its public IP address (new one assigned on restart) but maintains the same private IP address. May move to a new physical host.

**Stop vs. Stop-Hibernate:**
- **Stop:** Data in RAM is lost. Use for cost savings when an application can be completely shut down.
- **Stop-Hibernate:** Saves RAM contents to the Amazon EBS root volume. Resumes where it left off — useful for applications with long startup times.

**Termination:** Permanent. Instance store data is erased, both public and private IPs are lost. Termination Protection can be enabled to prevent accidental deletion.

**Cost Optimization:** AWS bills for running instances on a per-second basis (minimum 60 seconds). Right-Sizing: start small, monitor, then stop and modify instance type if needed.
