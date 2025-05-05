---
modified_time: 05-05-25, 23:55
---
# Core Instructions

## FROM
- Sets the base image.
- Syntax:
```dockerfile
FROM [:tag] [AS ]
```
- Example:
```dockerfile
FROM ubuntu:22.04
FROM python:3.9-slim AS builder
```

## RUN
- Executes commands during image build.
- Syntax:
```dockerfile
RUN (shell form)
RUN ["executable", "arg1", "arg2"] (exec form)
```
- Example:
```dockerfile
RUN apt-get update && apt-get install -y curl
RUN ["/bin/bash", "-c", "echo 'Hello, Docker!'"]
```

## COPY
- Copies files/directories from host to image.
- Syntax:
```dockerfile
COPY [--chown=:] ...
```
- Example:
```dockerfile
COPY app.py /app/
COPY --chown=node:node . /usr/src/app
```

## ADD
- Like `COPY`, but supports URLs and archive extraction.
- Syntax:
```dockerfile
ADD [--chown=:] ...
```
- Example:
```dockerfile
ADD https://example.com/file.tar.gz /data
ADD config /app/config
```

## CMD
- Default command when container starts.
- Syntax:
```dockerfile
CMD ["executable", "arg1", "arg2"]
CMD command arg1 arg2
```
- Example:
```dockerfile
CMD ["python", "app.py"]
```

## ENTRYPOINT
- Makes container act like a standalone executable.
- Syntax:
```dockerfile
ENTRYPOINT ["executable", "arg1"]
```
- Example:
```dockerfile
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

## ENV
- Sets environment variables.
- Syntax:
```dockerfile
ENV = ...
```
- Example:
```dockerfile
ENV NODE_ENV=production
```

## EXPOSE
- Documents ports used by the container.
- Syntax:
```dockerfile
EXPOSE [/...]
```
- Example:
```dockerfile
EXPOSE 80/tcp
```

## WORKDIR
- Sets the working directory.
- Syntax:
```dockerfile
WORKDIR /path/to/dir
```
- Example:
```dockerfile
WORKDIR /app
```

## USER
- Sets the user/group for commands.
- Syntax:
```dockerfile
USER [:]
```
- Example:
```dockerfile
USER node
```

---

### Advanced Instructions

- ARG: Build-time variable.
```dockerfile
ARG VERSION=latest
FROM alpine:$VERSION
```

- VOLUME: Mount point for external storage.
```dockerfile
VOLUME ["/data"]
```

- HEALTHCHECK: Container health checks.
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost/ || exit 1
```

- ONBUILD: Triggers instructions in child builds.
```dockerfile
ONBUILD COPY . /app
```

---

### Best Practices

- Minimize layers by chaining commands.
```dockerfile
RUN apt-get update \
    && apt-get install -y git curl \
    && rm -rf /var/lib/apt/lists/*
```

- Use `.dockerignore` to avoid copying unnecessary files.

- Use multi-stage builds to reduce image size.
```dockerfile
FROM golang:1.21 AS builder
WORKDIR /app
COPY . .
RUN go build -o myapp

FROM alpine:latest
COPY --from=builder /app/myapp /
CMD ["/myapp"]
```

- Prefer `COPY` over `ADD` unless using remote URLs or archives.

- Avoid using the `latest` tag; use fixed versions for consistency.
