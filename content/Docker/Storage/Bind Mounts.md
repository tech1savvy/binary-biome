---
modified_time: 05-03-25, 13:53
---

# How do you add multiple bind mounts when starting a Docker container?
- Use multiple `-v` flags in the `docker run` command. 
## Example:
```bash
docker run -d \
  -v /host/path1:/container/path1 \
  -v /host/path2:/container/path2 \
  --name my_container image_name
```

# Can you add multiple bind mounts to an already running container?
- No, bind mounts must be specified when starting the container.