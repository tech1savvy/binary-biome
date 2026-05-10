### 2. Tag Governance

---

Consistent tags enable:

- cost tracking
- automation
- compliance.

Tag Policies

- enforce tag structure (ex: CostCenter).
- enforce case sensitivity.

Tag Enforcement

Use SCP conditions:

Deny resource creation if required tags are missing.

Example:
block EC2 launch if CostCenter tag is null.
