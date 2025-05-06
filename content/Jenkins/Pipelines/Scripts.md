---
modified_time: 06-05-25, 09:58
---


# Examples
## Parallel

```groovy
pipeline{
    agent any
    stages{
        stage('Clone Repo'){
            steps{
                git url:'https://github.com/tech1savvy/lpu-cse-devops-etp', branch:'main'
            }
        }
        stage('Prallel Test'){
            parallel{
                stage('Run A.sh'){
                    steps{
                        sh 'chmod +x A.sh && ./A.sh'
                    }
                }
                stage('Run B.sh'){
                    steps{
                        sh 'chmod +x B.sh && ./B.sh'
                    }
                }
            }
        }
    }
}
```
##  Dockerhub
```groovy
pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'devakay/app:latest'
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/tech1savvy/lpu-cse-devops-etp.git', branch: 'main'
            }
        }

        stage('Build Image') {
            steps {
                sh "docker build -t devakay/app:latest ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                    docker login -u $DOCKER_USER -p $DOCKER_PASS
                    docker push ${DOCKER_IMAGE}
                    docker logout
                    """
                }
            }
        }

        stage('Deploy with Compose') {
            steps {
                sh """
                docker compose down
                docker compose up -d
                """
            }
        }
    }
    post {
        always {
            sh "docker rmi ${DOCKER_IMAGE} || true"
        }
    }
}
```