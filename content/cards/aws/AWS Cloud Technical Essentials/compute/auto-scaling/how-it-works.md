### How does Auto Scaling work?

---

**Core Components:**

**Launch Template (The "What"):** A versioned blueprint for instances. Parameters include AMI ID, instance type, security groups, EBS volumes, IAM role, and User Data. Supports versioning and rollbacks.

**Auto Scaling Group / ASG (The "Where" and "How Many"):** Defines deployment boundaries and capacity rules:
- VPC & Subnets (best practice: at least two AZs)
- Can mix On-Demand and Spot instances
- **Minimum:** Absolute floor of instances (even with zero traffic)
- **Maximum:** Absolute ceiling to prevent runaway costs
- **Desired Capacity:** The number of instances the group attempts to maintain

**Scaling Policies (The "When"):**
- **Target Tracking (Recommended):** Set a target value for a specific metric (e.g., "Keep average CPU at 60%"). AWS handles the math and creates CloudWatch Alarms automatically.
- **Step Scaling:** Responds to additional alarms even while a previous scaling activity is in progress. Supports "steps" (e.g., add 1 instance at 70% CPU, add 3 more at 90%).
- **Simple Scaling:** Waits for a cooldown period after a scaling event before evaluating further alarms.

**Fleet Management:**
- **Self-Healing:** If an instance becomes unhealthy, the ASG automatically terminates it and launches a fresh replacement.
- **ELB Integration:** New instances are automatically registered with the load balancer's Target Group.
- **Connection Draining (Deregistration Delay):** When scaling in, ELB ensures the ASG doesn't terminate an instance until all active connections are completed.
