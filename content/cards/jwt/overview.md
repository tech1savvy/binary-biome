---
id: jwt/overview
aliases: []
tags:
  - null
noteId: 1777823474771
---

###### Why are JWTs secure for stateless authentication?

***
> Because they cannot be altered

- Once a JWT is created by a server, the data inside cannot be changed without the server knowing. This is powered by cryptographic MACs, HMACs, and digital signatures.

###### Are JWTs encrypted?

***
> No

- JWTs are not encrypted. Anyone who has the token can read the data inside (like the expiry and user id). Only the signature is verified - the payload is plain text. Don't store sensitive information in a JWT.
