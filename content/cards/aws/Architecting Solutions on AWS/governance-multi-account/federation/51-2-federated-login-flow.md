### Federated Login Flow

---

1. User logs into external Identity Provider (IdP)
2. IdP verifies identity
3. IdP sends authentication assertion to AWS
4. AWS maps user to an **IAM role**
5. AWS issues temporary credentials.

User never exists as an IAM user.
