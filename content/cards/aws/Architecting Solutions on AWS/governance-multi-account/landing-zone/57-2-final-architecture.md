### Final Architecture

---

Management Account (Shared Services)

Services used:

- AWS Organizations → account hierarchy
- IAM Identity Center → SSO for all users
- AWS Control Tower → automated account creation
- CloudTrail + CloudWatch Logs → centralized logging.

Purpose:
Central governance and identity management.
