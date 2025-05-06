---
modified_time: 06-05-25, 08:31
---
In Jenkins **Declarative Pipelines**, the script is structured using various **blocks** that define how the pipeline behaves. Each block has a specific purpose, and knowing them helps you write clean, maintainable pipelines.

# `pipeline {}`

- root block: wraps the entire pipeline definition.

# `agent {}`

- defines where the pipeline or a stage will run.
```groovy
agent any // any available agent
agent none // no agent at the top level
agent { label 'linux' } // specific labeled node
agent { docker 'node:14' } // docker container with specific image
```

# `stages {}`, `stage{}`, `steps{}`

```groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
            }
        }
        stage('Test') {
            steps {
            }
        }
        stage('Deploy') {
            steps {
            }
        }
    }
}
```

# `environment {}`

- used to define environment variables, ethier globally or per stage if nested
```groovy
envirnment {
	NODE_ENV = 'production'
}
```

# `post {}`
- defines post-build actions, which run after the stages - useful for cleanup or notifications.
```groovy
post {
	always {
		echo 'This runs no matter what!'
	}
	success {
		echo 'Job Succeeded!'
	}
	failure {
		echo 'Job Failed!'
	}
}
```

# `options {}`
- Set optional pipeline-level settings, like timeouts, retry policies, or disabling concurrent builds.
```groovy
options {
    // Aborts the entire pipeline if it runs longer than the specified time
	timeout(time: 10, unit: 'MINUTES')
	// Prevents multiple builds of this pipeline from running concurrently
	disableConcurrentBuilds()
}
```

# `parameters {}`
- defines input parameters for manual or automated job runs.
```groovy
parameters {
	string(name: 'BRANCH', defaultValue: 'main', description: 'Branch to build')
	password(name: 'MY_SECRET', defaultValue: '', description: 'Enter your secret password')
}
```

# `triggers {}`
- set up automatic build triggers, like cron jobs or SCM polling.
```groovy
triggers {
    // Scheduled build: every 10 minutes
    cron('H/10 * * * *')
    // Format: MINUTE HOUR DAY_OF_MONTH MONTH DAY_OF_WEEK
	// Ex: 15 13 * * * - every day at 1:15 PM
    
    // Poll SCM: check for changes in the repository every 15 minutes
    pollSCM('H/15 * * * *')
    
    // Upstream: trigger when 'job1' or 'job2' completes successfully
    upstream(upstreamProjects: 'job1,job2', threshold: hudson.model.Result.SUCCESS)
}
```

# `tools {}`
- Automatically installs and adds tools like Maven, JDK, or Node.js to the PATH.
```groovy
tools {
    maven 'Maven 3.8.1'
    jdk 'JDK11'
}
```

# `when {}`
- conditional execution of stages.
```groovy
when {
	branch 'main'
}
```

# `parallel {}`
- The `parallel` block is used inside a `stage` to execute multiple sub-stages at the same time, which is especially useful for speeding up builds
```groovy
stage('Parallel Testing') {
	parallel {
		stage('Unit Tests') {
			steps {
				echo 'Running unit tests...'
				sh 'sleep 3' // Simulate long test
			}
		}
		stage('Integration Tests') {
			steps {
				echo 'Running integration tests...'
				sh 'sleep 3'
			}
		}
		stage('UI Tests') {
			steps {
				echo 'Running UI tests...'
				sh 'sleep 3'
			}
		}
	}
```


# `input {}`
- used for manual approvals during the pipeline.
```groovy
stage('Approval') {
    steps {
        input message: 'Deploy to production?'
    }
}
```

>[!note]
> does not prompt the user to type a message, but rather pauses the pipeline and waits for a manual approval from a user in the Jenkins UI.

## Optionally: Specify Who Can Approve
You can restrict it to specific users or roles:
```groovy
input message: 'Approve deployment?', submitter: 'dev_team'
```