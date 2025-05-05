---
modified_time: 05-05-25, 18:20
---
# Overview
- It creates a software-based *bridge between* your *host and container*.  
- Containers connected to the network can communicate with each other, but they’re isolated from those outside the network.  
- **Each container** in the network is assigned its *own IP address*.  
- Because the network’s bridged to your host, containers are also **able to communicate on** your *LAN* and the *internet*.  
- They will *not appear as physical devices* **on** your **LAN**, however.

To enable two Docker containers to communicate with each other, the most common and reliable approach is to connect them to the same Docker network, ideally a user-defined bridge network. Here’s how you can do it:

---

### 1. Create a User-Defined Bridge Network

User-defined networks provide automatic DNS-based service discovery, allowing containers to communicate by name.

```sh
docker network create my-network
```

---

### 2. Run Both Containers on the Same Network

When launching your containers, specify the network with the `--network` flag:

```sh
docker run -d --name container1 --network my-network nginx
docker run -d --name container2 --network my-network busybox
```

Now, both containers are on `my-network` and can communicate with each other using their container names as hostnames.

---

### 3. Test Communication

You can test connectivity (for example, from `container2` to `container1`):

```sh
docker exec -it container2 ping container1
```

You should see successful ping responses, confirming network communication.

---

### Key Points

- Containers on the same user-defined network can communicate using container names.
- The default bridge network only allows communication via IP, not container names.
- For multi-host setups, use an overlay network.

---

### Summary Table

|Step|Command Example|Purpose|
|---|---|---|
|Create network|`docker network create my-network`|Set up shared network|
|Run containers|`docker run --network my-network ...`|Attach containers to the network|
|Test connectivity|`docker exec -it container2 ping container1`|Verify inter-container communication|

---

Let me know if you'd like this in a downloadable format or if you want a version tailored for Kubernetes.