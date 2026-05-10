### Application Management

---

Parameter Store

- centralized storage for configuration values and secrets.

Uses:

- API keys
- DB connection strings
- app configuration

Features:

- hierarchical parameters
- SecureString encryption.

Best practice:
keep constants outside code so you don’t redeploy when values change.
