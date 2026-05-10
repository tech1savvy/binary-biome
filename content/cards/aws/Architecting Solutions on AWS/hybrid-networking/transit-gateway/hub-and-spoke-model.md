### Hub-and-Spoke Model

---

Transit Gateway = **Hub**

Connected networks = **Spokes**

Example:

On-prem network  
 ↓  
Transit Gateway  
 ↙ ↓ ↘  
VPC A VPC B VPC C

Benefits:

- simpler network design
- avoids complex VPC peering
- reduces connection count

Without hub:
N × N peering connections

With hub:
1 connection per network
