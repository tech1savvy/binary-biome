### Architectural Decisions

---

## Hybrid Container Orchestration

Requirement:

- single orchestration system across both environments.

Strategy:

- use an AWS service whose control plane can manage:
  - cloud containers
  - on-prem containers

Goal:

- consistent deployment and operations.
