---
id: networking
aliases: []
tags: []
sources:
  - https://youtu.be/xj_GjnD4uyI
noteId: 1777823480247
---

> Networking Fundamentals

# Bare Metal Networking

## IP Address

- A unique identifier assigned to each device on a network
- Used to locate and communicate with devices

---

## DNS (Domain Name System)

- Translates human-readable domain names into IP addresses
- Allows browsers to find the correct server
- Works like a contacts app (name → number mapping)

---

## Ports

- Logical communication channels on a device
- Range: **1 to 65535**
- Each application listens on a specific port
- Ports must be unique per device (per protocol)

### Common Ports

- **80** → HTTP
- **443** → HTTPS
- **3000** → Grafana (default)
- **9090** → Prometheus
- **6443** → Kubernetes API Server
- **8472 (UDP)** → Flannel (VXLAN)

---

## Network Segmentation

### Subnets

- Divide a network into smaller, isolated sections
- Improve security and organization

### Example Architecture

- **Public Subnet** → Frontend (internet-facing)
- **Private Subnet 1** → Application / Backend
- **Private Subnet 2** → Database

---

## Routing

- Determines how data travels between networks
- Works like a GPS for network traffic
- Routes packets from source to destination

---

## Firewalls

- Control incoming and outgoing traffic based on rules

### Types

- **Host Firewall**
  - Runs on individual machines
  - Example:
    - Database only allows traffic on port **3306 (MySQL)**
    - Only from backend subnet IPs

- **Network Firewall**
  - Sits between subnets
  - Example:
    - Allow ports **80 & 443** to frontend
    - Block all other traffic

---

## NAT (Network Address Translation)

- Allows multiple private IPs to share one public IP
- Enables outbound internet access for private systems
- Keeps internal systems hidden from direct exposure

---

# Cloud Networking

## VPC (Virtual Private Cloud)

- Isolated virtual network within a cloud provider
- Comparable to renting a private section of a larger network

---

## Subnets

- Divide VPC into logical sections

### Types

- **Public Subnet**
  - Accessible from the internet

- **Private Subnet**
  - No direct internet access

---

## Internet Gateway

- Connects public subnets to the internet
- Acts as the entry/exit point

---

## Route Tables

- Define how traffic is directed within the VPC
- Map destinations to targets (gateways, subnets, etc.)

---

## NAT Gateway

- Allows private subnet resources to access the internet (outbound only)
- Prevents inbound internet access
- Enhances security

---

# Container Networking

## Bridge Network

- Default network on a single host
- Containers can communicate using container names
- Isolated to that host

---

## Port Mapping

- Maps a host port to a container port

### Example

- Traffic on `host:8080` → forwarded to `container:80`

---

## Overlay Network

- Spans multiple hosts
- Allows containers across different machines to communicate
- Makes distributed systems appear as a single network

---

# Kubernetes Networking

## Services

- Provide a **stable IP and DNS name**
- Abstract away dynamic pod IPs (since pods are ephemeral)
- Enable consistent communication

---

## Ingress

- Manages external access to services inside the cluster
- Routes traffic based on rules:

### Types of Routing

- **Host-based routing** (e.g., api.example.com)
- **Path-based routing** (e.g., /api, /app)

- Acts like an entry point (HTTP/HTTPS router) into the cluster
