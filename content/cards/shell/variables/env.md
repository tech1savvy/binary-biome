---
id: env
aliases: []
tags: []
noteId: 1777823483246
---

###### Why do .env variables not work with psql even after sourcing the file?

---

`.env` sets variables (they become available to top level shell commands only) but doesn't export them to child processes (say, `psql` calls some child processes that also need the values of these variables, but they do not find them set)
instead you need to add export to each variable in `.env`

```bash .env
export PGHOST=localhost
export PGPORT=5432
export PGUSER=postgres
export PGDATABASE=chirpy
export PGPASSWORD=postgres
```

```sh
source .env
psql
```
