---
modified_time: 06-05-25, 00:16
---
# List Containers

- Lists **running** containers:
```sh
docker ps
```

- Lists **all** containers (running and stopped):
```sh
docker ps -a
```


---

# Delete a Container

- Removes a stopped container:
```sh
docker rm 
```

- Force removes a **running** container (sends SIGKILL):
```sh
docker rm -f 
```


---

# Delete All Stopped Containers

- Removes all stopped containers (prompts for confirmation):
```sh
docker container prune
```
---

# Stop a Running Container

- Gracefully stops a running container (sends SIGTERM, then SIGKILL if needed):
```sh
docker stop 
```

---

# Start a Stopped Container

- Starts a stopped container:
```sh
docker start 
```

---

# Restart a Container

- Stops and then starts a container:
```sh
docker restart 
```

---

# Expose / Map Container Ports form  Container to Host

```bash
-p <host_port>:<container_port>
```

# Adding Environment Variable

```bash
docker run -e MY_VAR=value httpd env #env cmd prints the env vars
```