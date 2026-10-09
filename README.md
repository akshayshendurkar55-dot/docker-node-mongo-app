# Dockerized Node.js + MongoDB Application

A containerized message application built with Node.js, Express, MongoDB, Docker Compose, and Nginx. This repository also includes a Jenkins pipeline to practice CI/CD automation.

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Containerization:** Docker, Docker Compose
* **Web Server / Proxy:** Nginx
* **CI/CD:** Jenkins
* **Version Control:** Git and GitHub

## Features

* Node.js and Express backend
* MongoDB integration for storing messages
* Multi-container setup with Docker Compose
* Environment-based application configuration
* Nginx configuration
* Jenkins pipeline for practicing automated build and deployment workflows

## Project Structure

```text
docker-node-mongo-app/
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── nginx.conf
├── server.js
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Prerequisites

Install the following tools before running the project:

* Docker Desktop
* Git

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/akshayshendurkar55-dot/docker-node-mongo-app.git
cd docker-node-mongo-app
```

### 2. Create your local environment file

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Keep `.env` local and do not commit it to GitHub.

### 3. Start the containers

```bash
docker compose up --build
```

Open the application using the port and URL configured in `docker-compose.yml` and `nginx.conf`.

### 4. Stop the containers

```bash
docker compose down
```

## Jenkins CI/CD

The repository includes a `Jenkinsfile` for practicing a pipeline workflow, including source checkout, Docker image building, and a deployment stage.

Pipeline behavior depends on the Jenkins configuration and the commands defined in the `Jenkinsfile`.

## DevOps Concepts Practiced

* Docker images and containers
* Multi-container application setup
* Environment variable management
* Reverse-proxy configuration
* CI/CD pipeline fundamentals
* Application and database integration

## Future Improvements

* Add automated tests to the pipeline
* Add pipeline validation and failure handling
* Improve container health checks and security
* Deploy to a cloud environment when appropriate

---

**Author:** Laxmikant Shendurkar
**Focus:** Cloud Computing and DevOps
