---
id: jwt/revocation
aliases: []
tags:
  - null
noteId: 1777823474796
---

###### Why is revoking JWTs a problem?
***
> Because JWTs are stateless

Once a JWT is issued, there's no way to invalidate it before expiration. The server doesn't store any state about issued tokens. If a token is stolen, anyone who has it can use it until it expires.

###### What is the solution to JWT revocation?
***
> Use access tokens + refresh tokens

Access tokens (JWTs) are stateless - no server storage needed, short-lived (15m-24h). Being short-lived limits damage if stolen. Refresh tokens(Unique Hashed Strings, not JWTs) are stateful (stored on server), long-lived (24h-60d), and revocable - they get new access tokens. This gives best of both worlds.
