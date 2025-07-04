# 🚢 Docker - A Beginner-Friendly Guide

Welcome to the Docker journey! This guide explains Docker from the ground up using a **simple real-world story**, key concepts, essential commands, and practical examples. Whether you're just getting started or want a quick reference, this README has you covered.

---

## 🧠 Why Do We Need Docker?

### A Simple Story: Two Developers, One Problem

Meet **Alice** and **Bob**, developers working in the same company.

- Alice builds an app on her machine. It works perfectly.
- Bob clones the repo and runs the app. 💥 Boom! Errors everywhere: “module not found,” “wrong Node version,” or "database not found."

This is called **Dependency Hell** – when different environments (OS, libraries, config) break the code.

### 🔥 The Solutions to Dependency Hell

| Solution        | Tools Used                  | Summary                                  |
|----------------|-----------------------------|------------------------------------------|
| Virtual Machines | VMware, VirtualBox          | Heavyweight, emulates full OS            |
| Containers       | Docker, Podman              | Lightweight, shares host OS kernel       |

**Docker** solves this by packaging everything the app needs (code + dependencies + environment) into a **container** that works anywhere — your laptop, Bob's laptop, or production server.

---

## 🐳 What is Docker?

**Docker** is a containerization platform that lets you build, ship, and run applications in **isolated environments**.

It ensures:
- **Consistency** across development, testing, and production.
- **Simplicity** in managing dependencies.
- **Portability** across platforms.

---

## 🚀 What Can Be Done With Docker?

- Run apps without installing dependencies manually.
- Create isolated environments for projects.
- Package and deploy software as lightweight containers.
- Share development environments.
- Automate testing and deployment pipelines.

---

## 📦 Docker Basics

### ✅ Docker Image
A **read-only template** with everything needed to run your app: code, libraries, and OS files.

> Think of it like a snapshot or recipe.

### ✅ Docker Container
A **running instance** of a Docker image. It's like launching the image into a self-contained mini-computer.

---

## 🔧 Docker Essential Commands

```bash
# Pull a Docker image from Docker Hub
docker pull nginx

# List all downloaded Docker images
docker images

# Run a container in detached mode (background)
docker run -d nginx:latest

# List running containers
docker container ls
# or
docker ps

# Stop a running container
docker stop <container_id>

# Run container with port mapping (host:container)
docker run -d -p 8080:80 nginx:latest

# Map multiple ports
docker run -d -p 8080:80 -p 3000:80 nginx:latest

# Get help for docker ps
docker ps --help

# Show all containers (running and stopped)
docker ps -a

# Show only container IDs
docker ps -aq

# Restart a stopped container
docker start <container_id>

# Force remove all containers
docker rm -f $(docker ps -aq)

# Run container with a custom name
docker run --name website -d -p 8080:80 nginx:latest
```

## 📁 What is Docker Volume?
A volume lets you share files between your host system and Docker container. Useful for persistence or live development.
```bash
docker run --name website \
-v /host/path:/container/path \
-d -p 8080:80 nginx:latest
```
## 📄 What is a Dockerfile?
A Dockerfile defines how to build a Docker image from your source code.
```bash
FROM node:latest
WORKDIR /app
ADD . .
RUN npm install
CMD ["node", "index.js"]
```
### Build & Run:
```bash
docker build -t simple-app .
docker run --rm simple-app
```
---
## ❌ .dockerignore File
Works like .gitignore. It excludes files/folders from being copied to the image during build.
> Example .dockerignore:
```bash
node_modules
.git
.env
```
## 🏷️ Tagging & Versioning
Tagging helps version your images.
```bash
docker build -t myapp:1.0 .
docker tag myapp:1.0 username/myapp:1.0
```
You can push tagged images to Docker Hub.
## 📤 Push Local Image to DockerHub
Log in to DockerHub:
```bash
docker login
```
Push your image:
```bash
docker push username/container-name:tagname
```
## 📦 Real Example:
```bash
docker run --name website --rm -p 3000:5173 \
-v /app/node_modules \
-v ${PWD}:/app \
-e CHOKIDAR_USE_POLLING=true test
```
---
## 📝 Docker Logs
To view the output (logs) of a container:
```bash
docker logs <container_id or name>
```
Use -f to follow logs in real time:
```bash
docker logs -f website
```
## ⚙️ Docker Compose
Docker Compose lets you define multi-container applications using a YAML file.
> 📄 Example docker-compose.yml:
```bash
version: '3'
services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
```
Run:
```bash
docker-compose up -d
```
---

## ✅ Summary
Docker helps avoid the "it works on my machine" problem by packaging your app and environment together. It's fast, consistent, and scalable.
### 💡 Next Steps
- Try building and running your own Dockerfile.
- Explore Docker Compose with databases.
- Push your image to DockerHub and share it with friends or teams.
