---
modified_time: 07-03-25, 13:57
---
## Introduction to Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. With a simple YAML file, you can configure multiple containers, define services, networks, and volumes, and manage everything with a single command.

## Prerequisites

Before using Docker Compose, ensure that:

- Docker is installed on your system.
- Docker Compose is installed. You can verify it using:
    
    ```sh
    docker-compose --version
    ```
    

## Installing Docker Compose

### On Linux/macOS

Run the following command to install Docker Compose:

```sh
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### On Windows

Docker Compose comes bundled with Docker Desktop. Simply install Docker Desktop from the official Docker website.

## Writing a Docker Compose File

A `docker-compose.yml` file is used to define services. Here’s an example:

```yaml
version: '3.8'

services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
  db:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: example
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

This file defines two services:

- `web`: Runs an Nginx container, exposing port 8080.
- `db`: Runs a MySQL container with a persistent volume for data storage.

## Running Docker Compose

Navigate to the directory containing `docker-compose.yml` and run:

```sh
docker-compose up -d
```

This command starts the services in detached mode.

To stop the services, use:

```sh
docker-compose down
```

## Viewing Logs

To see logs from the running containers, use:

```sh
docker-compose logs -f
```

## Scaling Services

You can scale services using:

```sh
docker-compose up --scale web=3 -d
```

This runs three instances of the `web` service.

## Conclusion

Docker Compose simplifies multi-container application management. It’s useful for development, testing, and even production deployments. With minimal configuration, you can orchestrate complex setups efficiently.