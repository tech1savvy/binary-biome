---
modified_time: 02-04-25, 20:15
aliases:
  - "Docker Swarm: A Beginner's Guide"
---

# What is Docker Swarm?

Docker Swarm is a *container orchestration tool* which is *built into Docker* that 
- allows you to *manage* a *cluster of Docker nodes* (machines running Docker) *as* a *single virtual system*.
- It helps with scalability, high availability, and load balancing of containerized applications.

---

# Key Features of Docker Swarm
- **Cluster Management**: Groups multiple Docker nodes into a swarm.
- **Service Scaling**: Easily scale services up or down.
- **Load Balancing**: Distributes traffic automatically.
- **Self-healing**: Detects and restarts failed containers.
- ! **Declarative Service Model**: Defines the desired state of services.

---

# Docker Swarm Architecture

A Docker Swarm consists of two types of nodes:

1️⃣ **Manager Nodes**:

- Manage the swarm cluster.
- Schedule services across worker nodes.
- Maintain cluster state and perform leader election.

2️⃣ **Worker Nodes**:

- Run the containerized applications.
- Accept tasks assigned by manager nodes.

---

# Setting Up a Docker Swarm

- Since working with docker swarm requires multiple systems or virtual machines to setup, we can use [[Docker Labs - Play with Docker]]

##### **Step 1: Install Docker**

Ensure Docker is installed on all machines in the cluster.

```sh
docker --version  # Check Docker installation
```

##### **Step 2: Initialize the Swarm**

Run the following command on the **manager node**:

```sh
docker swarm init --advertise-addr <MANAGER-IP>
```

- `--advertise-addr <MANAGER-IP>`: Specifies the IP address of the manager node. 
  (IP of the machine where you are running this command)
![[Pasted image 20250402195431.png]]

##### **Step 3: Add Worker Nodes**

After initializing the swarm, Docker provides a command to join worker nodes:

```sh
docker swarm join --token <TOKEN> <MANAGER-IP>:<PORT>
```

Run this command on each worker node to add them to the swarm.

##### **Step 4: Verify the Swarm Status**

On the manager node, check if all nodes are part of the swarm:

```sh
docker node ls
```

This will list all nodes with their roles (Manager/Worker).
![[Pasted image 20250402195305.png]]

---

#### **5. Deploying a Service in Docker Swarm** 
> Run these cmd on Manager Node

##### **Step 1: Create a Service**

To deploy a service (e.g., an Nginx web server), use:

```sh
docker service create --name web --replicas 3 -p 8080:80 nginx
```

- `--name web` → Name of the service
- `--replicas 3` → Runs 3 instances of the service
- `-p 8080:80` → Maps port 8080 to port 80 inside containers
- `nginx` → Image to use

![[Pasted image 20250402195341.png]]

##### **Step 2: List Running Services**

```sh
docker service ls
```

##### **Step 3: Inspect the Service**

```sh
docker service ps web
```

This shows which nodes are running the service.
![[Pasted image 20250402200533.png]]
> Can observe that containers (replicas) are running on different nodes. 

##### **Step 4: Scale the Service**

```sh
docker service scale web=5
```
![[Pasted image 20250402195812.png]]

This increases the number of running replicas to 5.

![[Pasted image 20250402200300.png]]

- Alternately we can descale by decreasing the number of replicas.
```sh
docker service scale web=2
```

##### **Step 5: Remove the Service**

```sh
docker service rm web
```

---

#### **6. Managing Nodes in Docker Swarm**

##### **Promote a Worker to Manager**

```sh
docker node promote <NODE-ID-/or/-HOST-NAME>
```
![[Pasted image 20250402200902.png]]
> It can be observed that the promoted node is given the status of manager but with *reachable* status, where as the first manager node we created , where swarm was initialized is stated as *leader*.
##### **Demote a Manager to Worker**

```sh
docker node demote <NODE-ID>
```


##### **Remove a Node from the Swarm**

```sh
docker node rm <NODE-ID>
```

To force remove a node:

```sh
docker node rm --force <NODE-ID>
```

##### **Leave the Swarm**

On a worker node:

```sh
docker swarm leave
```

On a manager node (to destroy the swarm):

```sh
docker swarm leave --force
```

---

#### **7. Deploying a Stack in Docker Swarm**

A **Docker stack** allows deploying multiple services together using a **YAML file**.

##### **Step 1: Create a `docker-compose.yml` File**

```yaml
version: "3"
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  redis:
    image: redis
```

##### **Step 2: Deploy the Stack**

```sh
docker stack deploy -c docker-compose.yml my_stack
```

##### **Step 3: List Running Stacks**

```sh
docker stack ls
```

##### **Step 4: Remove the Stack**

```sh
docker stack rm my_stack
```

---

#### **8. Monitoring Docker Swarm**

##### **Check Swarm Logs**

```sh
docker service logs web
```

##### **Monitor Nodes**

```sh
docker node ls
```

##### **Monitor Services**

```sh
docker service ls
```

##### **Inspect a Node**

```sh
docker node inspect <NODE-ID>
```

---

#### **9. When to Use Docker Swarm**

Use Docker Swarm when: ✅ You need **built-in** orchestration in Docker.  
✅ You want **simple setup and management**.  
✅ You require **lightweight orchestration** without Kubernetes complexity.

---

#### **10. Docker Swarm vs Kubernetes**

|Feature|Docker Swarm|Kubernetes|
|---|---|---|
|Ease of Use|Simple|Complex|
|Setup|Quick|Requires more configuration|
|Scaling|Manual or auto|Advanced auto-scaling|
|Networking|Easy to configure|More complex|
|Load Balancing|Built-in|Needs additional setup|

---

#### **Conclusion**

Docker Swarm is a powerful and **lightweight orchestration tool** for managing containers across multiple nodes. It simplifies deployment, scaling, and service management while being easier to set up compared to Kubernetes.

Would you like a hands-on example with a real application? 🚀