---
aliases:
  - "Hands-On Example: Deploying a Web App on Docker Swarm"
modified_time: 06-05-25, 05:37
---
### **Hands-On Example: Deploying a Web App on Docker Swarm**

In this example, we will deploy a simple **Node.js + Nginx** web application on Docker Swarm.

---

## **1. Setup Docker Swarm**

### **Step 1: Initialize the Swarm**

On the **manager node**, run:

```sh
docker swarm init --advertise-addr <MANAGER-IP>
```

Copy the join token and add worker nodes using:

```sh
docker swarm join --token <TOKEN> <MANAGER-IP>:2377
```

Verify nodes:

```sh
docker node ls
```

---

## **2. Create a Web Application**

We will deploy a **Node.js API** behind an **Nginx reverse proxy** using **Docker Swarm**.

### **Step 1: Create a Project Folder**

```sh
mkdir swarm-app && cd swarm-app
```

### **Step 2: Create a Simple Node.js App**

Create a `server.js` file:

```javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from Docker Swarm!'));
app.listen(3000, () => console.log('Server running on port 3000'));
```

### **Step 3: Create a `Dockerfile`**

```Dockerfile
FROM node:18
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]
EXPOSE 3000
```

### **Step 4: Create `package.json`**

```json
{
  "name": "swarm-app",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

---

## **3. Create an Nginx Proxy**

Create an `nginx.conf` file:

```nginx
events {}

http {
    server {
        listen 80;
        location / {
            proxy_pass http://backend:3000;
        }
    }
}
```

---

## **4. Create a Docker-Compose Stack**

Create a `docker-compose.yml` file:

```yaml
version: "3.8"

services:
  backend:
    image: node-backend
    build: .
    ports:
      - "3000:3000"
    networks:
      - app-network
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure

  nginx:
    image: nginx:latest
    ports:
      - "8080:80"
    networks:
      - app-network
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - backend
    deploy:
      replicas: 1
      restart_policy:
        condition: on-failure

networks:
  app-network:
    driver: overlay
```

---

## **5. Deploy the Stack**

### **Step 1: Build the Node.js Image**

```sh
docker build -t node-backend .
```

### **Step 2: Deploy the Stack**

```sh
docker stack deploy -c docker-compose.yml swarm-app
```

### **Step 3: Verify Services**

```sh
docker service ls
```

Check running containers:

```sh
docker service ps swarm-app_backend
docker service ps swarm-app_nginx
```

### **Step 4: Test the Deployment**

Visit `http://<MANAGER-IP>:8080/` in your browser, and you should see:

```
Hello from Docker Swarm!
```

---

## **6. Scaling the Application**

To scale the backend service:

```sh
docker service scale swarm-app_backend=5
```

Verify scaling:

```sh
docker service ps swarm-app_backend
```

---

## **7. Removing the Stack**

To remove the entire application:

```sh
docker stack rm swarm-app
```

To leave the Swarm:

```sh
docker swarm leave --force
```

---

### **Conclusion**

We successfully: ✅ Initialized a Docker Swarm cluster  
✅ Created a **Node.js API** and an **Nginx reverse proxy**  
✅ Deployed the application using **Docker Stack**  
✅ Scaled the services  
✅ Accessed the app via **port 8080**

Let me know if you need modifications or further explanations! 🚀