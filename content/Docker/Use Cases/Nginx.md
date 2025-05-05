---
modified_time: 03-05-25, 17:40
---
# What is Nginx?

**Nginx** is an open-source *web server* optimized for high concurrency and low memory usage. It is widely *used for serving static content*, acting as a reverse proxy, and load balancing.

# Key Features

- **Reverse proxy**: Routes client requests to backend servers.
- **Load balancing**: *Distributes traffic* across servers.
- **Static content serving**: Efficiently *delivers HTML, CSS, and JavaScript files*.
- **Event-driven architecture**: Handles thousands of connections per worker process.

# Example delivering a basic `html` page

## Installing nginx on `ubuntu` image

### `/Dockerfile`
```dockerfile
FROM ubuntu;
RUN apt-get update && apt-get install -y nginx
COPY index.html /var/www/html/index.html
EXPOSE 80
CMD ["nginx", "-g","damon off;"]
```

#### damon off
- The line `daemon off;` in the Nginx command tells Nginx to run in the foreground, not as a background process (daemon).
- This is important in Docker because Docker containers expect the main process (PID 1) to keep running; if it exits, the container stops. 
- By running Nginx with `daemon off;`, you ensure Nginx stays in the foreground, keeping the container alive as long as Nginx is running

### `bash`
```bash
# Build Image
docker build -t nginx:0.0.1 .
# Run Container
docker run -d -p 80:80 nginx:0.0.1
# Test
curl http://localhost:80/index.html
```

### `/index.html`
```html
<!DOCTYPE html>
<html>
    <head>
        <title>nginx</title>
    </head>
    <body>
        <h1>nginx</h1>
        <p>nginx is running!</p>
</html>
```


## Using `nginx` as base image
### `/Dockerfile`
```dockerfile
FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
```

- No need for `RUN apt-get update` or `RUN apt-get install -y nginx`.
- No need for `EXPOSE 80` or `CMD ["nginx", "-g", "daemon off;"]`-the base image already exposes port 80 and uses the correct CMD.

### `bash`
```bash
# Build Image
docker build -t nginx:0.0.1 .
# Run Container
docker run -d -p 80:80 nginx:0.0.1
# Test
curl http://localhost:80/index.html
```