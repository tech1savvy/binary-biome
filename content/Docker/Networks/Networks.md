---
modified_time: 05-05-25, 22:43
---

- Docker networks configure communications between neighboring containers and external services. 

- The communication routes available to the container depend on the network connections it has. You can create custom, user-defined networks, and connect multiple containers to the same network. Once connected to a user-defined network, containers can communicate with each other using container IP addresses or container names.


# Commands

## Create a Network

You can create a new Docker network with the default settings:

```bash
docker network create my_network # creates bridge network by-default
````

## Specify the Network Driver

To specify a driver (e.g., `bridge`):

```bash
docker network create --driver bridge my_bridge_network
```

## List Networks

To list all existing Docker networks:

```bash
docker network ls
```

## Inspect a Network

To view detailed information about a specific network:

```bash
docker network inspect my_network
```

## Connect a Container to a Network

To connect an existing container to a network:

```bash
docker network connect my_network my_container
```

## Create a New Container with a Specific Network

You can create and run a new container attached to a specific network:

```bash
docker run -d --name my_container --network my_network nginx
```

# Types
Docker comes with five built-in network drivers:

- [[Bridge]]
- <u>Host</u> : container shares the host’s networking namespace, using the *host’s IP* and ports directly.
```bash
docker network create --driver host my-host-nw
```
- <u>Overlay</u> : enables communication between containers *across multiple Docker hosts*, useful for *Docker Swarm*. 
```bash
docker network create --driver overlay my-cluster
```
- <u>IPVLAN</u> : 
	- allows containers to be **assigned IP** addresses *directly from the physical network*, sharing the parent interface’s MAC address, making it ideal for advanced networking scenarios.
	- **operates** at networking *layer 2 or 3* and **supports** *VLAN tagging*.
```bash
docker network create --driver ipvlan my-ipvlan-nw
```
- <u>Macvlan</u> :
	-  Assigns a MAC address to a container, making it appear as a physical device on the network.
```bash
docker network create --driver macvlan my-macvlan-nw
```
- <u>None</u> : *Disables networking* for the container, providing complete isolation.
	- also called *loopback interface*.
```bash
docker network create --driver none nw
```
