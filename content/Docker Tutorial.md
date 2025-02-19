---
tags:
  - docker
  - containerization
modified_time: 19-02-25, 18:54
---
## Commands

> `docker ps`
---
Lists running containers with details like container ID, image, status, ports, and names.

```sh
docker ps  # Shows only running containers  
docker ps -a  # Shows all containers (including stopped ones)  
```

# Container Creation
## 1. Pull Base Image

Download the required base image from Docker Hub. By default, it pulls the latest version.

```sh
docker pull ubuntu  # Pulls the ubuntu:latest image  
```

## 2. Check Available Images

List the images available locally to confirm the download.

```sh
docker images  
```

## 3. Run a Container

Start a new container in detached mode, assign it a name, and expose port 8080.
- **Detached Mode**: Runs a container in the background without attaching to its terminal. The container keeps running independently.

```sh
docker run -it -d -p 8080:8080 --name my_container ubuntu  
```

## 4. Access the Running Container

Attach to the container's shell to interact with it.

```sh
docker exec -it my_container bash  
```

## 5. Install Python

Update package lists and install Python inside the container.

```sh
apt update && apt install -y python3  
```

## 6. Create a Python File

Use a text editor inside the container to create a simple Python script.

```sh
echo 'print("Hello from Docker!")' > script.py  
```

## 7. Run the Python Script

Execute the script inside the container.

```sh
python3 script.py  
```

## 8. Stop the Container

Gracefully stop the running container.

```sh
docker stop my_container  
```

## 9. Push Updated Image to Docker Hub

### 9.1 Commit Changes to a New Image

Save the container’s current state as a new image.

```sh
docker commit my_container my_username/my_image:latest  
```

### 9.2 Log in to Docker Hub

Ensure you are authenticated before pushing the image.

```sh
docker login  
```
- Enter your **Docker Hub username and password** when prompted.
### 9.3 Push the Image to Docker Hub

Upload the new image to Docker Hub.

```sh
docker push my_username/my_image:latest  
```