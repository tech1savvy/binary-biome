---
modified_time: 05-05-25, 15:41
---
- On CentOS (Red Hat-based systems), the Apache web server package and service are called **httpd**, while on Ubuntu (Debian-based systems) they are called **apache2**-the software is functionally the same, only the naming and configuration file locations differ.

# What is Apache?
**Apache** is an open-source _web server_ known for its flexibility, modularity, and ability to process both static and dynamic content natively. It is widely used to serve web pages and supports extensive customization through modules.

## Key Features

- **Dynamic content processing**: Handles dynamic content internally with modules (e.g., PHP, Python).
- **Static content serving**: Efficiently delivers HTML, CSS, and JavaScript files.
- **Modular architecture**: Supports dynamically loadable modules for extra features.
- **Per-directory configuration**: Allows fine-tuned settings using `.htaccess` files.
- **Process-based architecture**: Creates a new process or thread for each request, offering flexibility but using more resources than event-driven servers like NGINX.

# Example: Delivering a Basic HTML Page with Apache in Docker (CentOS 7)

## Dockerfile: Installing Apache on `centos:7`

```Dockerfile
FROM centos:7
MAINTAINER Your_Name

# Install Apache
RUN yum install -y httpd

# Create a simple HTML page
RUN echo "This website is running in Container" > /var/www/html/index.html

# Expose port 80
EXPOSE 80

# Set environment variable
ENV NAME Docker

# Run Apache in the foreground
CMD ["httpd", "-D", "FOREGROUND"]
````

## Explanation: `-D FOREGROUND`

- The `-D FOREGROUND` option tells Apache to run in the foreground instead of as a daemon.
- This is crucial in Docker since the container expects the main process to stay active.
- If Apache were to run as a background service, Docker would interpret it as the container finishing execution and stop it.
- Running in the foreground ensures Apache keeps the container alive.

## Bash Commands

```bash
# Build the Docker image
docker build -t apache:0.0.1 .

# Run the container, mapping port 80 of host to container
docker run -d -p 80:80 apache:0.0.1

# Test the setup
curl http://localhost:80/index.html
```

## `/index.html` (Created Automatically)

The Dockerfile creates the file `/var/www/html/index.html` with the content:
```
This website is running in Container
```
