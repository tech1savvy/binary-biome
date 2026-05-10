---
id: uri-format
aliases: []
tags: []
noteId: 1777823458597
---

What is the format for a MongoDB connection URI?

---

## Schema:

- **Standard:** `mongodb://[username:password@]host[:port][/[defaultauthdb][?options]]`

## Components:

- **Scheme**: `mongodb://`
- **Credentials**: Optional `username:password@`
- **Hosts/Ports**: `host[:port]` The default port is `27017`
- **Database**: Optional `/[database]` for the default authentication database
- **Options**: Query parameters like

## Examples

- **Local instance:** `mongodb://localhost:27017/mydatabase`

---

- **Cluster**: `mongodb://user:password@host1:27017,host2:27017/?authSource=admin`

- Supports multiple hosts:
  - `mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]`

## Another scheme for MongoDB URI is:

- **TLS/SSL (DNS Seedlist):** `mongodb+srv://[username:password@]host[/[defaultauthdb][?options]]`
