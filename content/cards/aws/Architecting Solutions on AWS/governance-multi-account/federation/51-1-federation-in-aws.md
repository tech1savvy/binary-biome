### Federation in AWS

---

**Federation**:: A trust relationship between AWS and an **external identity provider (IdP)**.
<!--SR:!2026-03-09,3,250-->

Purpose:
Allow users to log in with existing credentials instead of creating IAM users.

Example identity providers:

- Active Directory
- Okta
- Google
- Facebook.

Result:
Users authenticate externally and receive **temporary AWS credentials**.
