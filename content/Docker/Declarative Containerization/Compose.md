---
modified_time: 05-05-25, 23:34
---
# Introduction

Docker Compose is a tool for defining and running multi-container Docker applications. With a simple YAML file, you can configure multiple containers, define services, networks, and volumes, and manage everything with a single command.

```sh
docker compose --version
```

# Keywords
- `version` specifies the Compose file format.
- `services` defines your containers.
- `environment` for configuration.
- `volumes` for persistent storage.
- `networks` for inter-service communication.
- `depends_on` for service *startup order*.


## Writing a Docker Compose File

A `docker-compose.yml` file is used to define services. Here’s an example:

```yml
version: '3.8'

services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
    networks:
      - frontend # speficy same network in both services if want shared
    depends_on:
      - db
    environment:
      - NGINX_HOST=localhost
    volumes:
      - web_data:/usr/share/nginx/html # similary speficy same vol in both if want shared

  db:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: example
      MYSQL_DATABASE: appdb
      MYSQL_USER: appuser
      MYSQL_PASSWORD: apppass
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - backend

volumes:
  db_data:
  web_data:

networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
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