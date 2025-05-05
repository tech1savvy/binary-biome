---
modified_time: 03-05-25, 16:23
---


# Examples
## Script 1

```groovy
pipeline {
    agent any
    environment {
        NAME = "Jenkins"
        VERSION = "1.0"
    }
    stages {
        stage('Clone GitHub Repo') {
            steps {
                // Public repo (no credentials)
                git url: 'https://github.com/your/repo.git', branch: 'main'
                
                // Private repo example (with credentials)
                // git url: 'https://github.com/your/repo.git', branch: 'main', credentialsId: 'github-creds'
            }
        }

        stage('Run Shell Scripts in Parallel') {
            parallel {
                stage('Run Script A') {
                    steps {
                        sh '''
                            echo "Running Script A"
                            ./scriptA.sh
                        '''
                    }
                }
                stage('Run Script B') {
                    steps {
                        sh '''
                            echo "Running Script B"
                            ./scriptB.sh
                        '''
                    }
                }
            }
        }

        stage('Print Directory Contents') {
            steps {
                sh 'ls -al'
            }
        }

        stage('Print Env Variables') {
            steps {
                sh 'echo "Custom Vars: NAME=$NAME, VERSION=$VERSION"'
                sh 'echo "Jenkins Vars: BUILD_NUMBER=$BUILD_NUMBER, JOB_NAME=$JOB_NAME"'
            }
        }
    }
}
```

### Key Components

- **Git Clone**: Uses the `git` step with optional `credentialsId` for private repos.
- **Shell Script Execution**: Runs scripts via the `sh` step (inline or from cloned repo).
- **Directory Listing**: `ls -al` shows workspace contents post-clone.
- **Environment Variables**:
    - Custom variables defined in the `environment{}` block.
    - Built-in Jenkins vars (e.g., `BUILD_NUMBER`) auto-populated.

### Usage

1. Save as `Jenkinsfile` in your repo root.
2. Create a Jenkins Pipeline job, linking to this file via SCM.
3. Run the job – output will show cloned files, script results, directory list, and variables.

### Notes

- For private repos: Create credentials in Jenkins (SSH key or username/password) and reference them via `credentialsId`.
- To test without a script: Replace `./your_script.sh` with simple commands like `echo "Hello World"`.
- Make sure both scriptA.sh and scriptB.sh are present in the cloned repo or copied into the workspace before the parallel stage runs.
- You can use this structure to run tests, deployments, builds, or utilities in parallel.

##  Script 2
```groovy
pipeline {
    agent any

    stages {
        stage('Pull and Run Docker Image') {
            steps {
                script {
                    // Pull the image
                    def myImage = docker.image('nginx:latest')
                    
                    // Run the container (detached, mapping port 80)
                    myImage.run('-d -p 8080:80')
                }
            }
        }
    }
}
```