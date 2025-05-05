---
modified_time: 05-05-25, 16:28
---
# List Images
```sh
docker images
```

# Delete a Image
```sh
docker rmi <image_name or id>
```

# Delete Dangling Images
- Dangling images are images that are not tagged and not referenced by any container.
```sh
docker image prune
```

# Convert a Container to Image

- Stop running container
```bash
docker stop <container_name_or_id>
```

- Commit the container to a image
```bash
docker commit <container_name_or_id> my-new-image:latest
```

# Push an Image to Dockerhub

- Log in to Docker Hub,
  enter your **Docker Hub username and password** when prompted.
```sh
docker login  
```

- Give a unique name to the image, one trick is to append yout username to it
```sh
docker tag my-custom-image:latest userName/my-custom-image:0.0.1
```

- Upload the new image to Docker Hub.
```sh
docker push my_username/my_image:latest  
```