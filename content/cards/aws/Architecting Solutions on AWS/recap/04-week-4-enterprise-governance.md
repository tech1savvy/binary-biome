### Week 4: Enterprise Governance

---

Goal: Securely manage many AWS accounts.

Architecture:

```
AWS Organizations
↓
Organizational Units (OUs)

Identity
IAM Identity Center (SSO)

Governance
Service Control Policies (SCPs)

Logging
CloudTrail centralized logging

Automation
Control Tower (account vending)
Service Catalog (approved infrastructure)
```

Key Concepts:

- Landing Zone
- Multi-account architecture
- Guardrails and compliance
- Centralized identity
- Automated infrastructure provisioning
