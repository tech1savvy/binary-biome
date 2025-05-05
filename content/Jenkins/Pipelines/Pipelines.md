---
modified_time: 03-05-25, 17:57
---

# Basic Hello World Pipeline

```groovy
pipeline{
	agent any
	stages {
		stage('Greet'){
			steps{
				echo 'Hello, Jenkins Pipeline!'
			}
		}
	}
}
```

# Setting Environment Variables

```groovy
pipeline{
	agent any
	envirnment {
		TYPE = 'production'
		PLATFORM = 'ubuntu'
	}
	stages{
		stage('Print ENV Variables){
			steps{
				echo "APP_ENV: ${APP_ENV}"
				echo "PLATFROM: ${PLATFROM}"	
			}
		}
	}
}
```

# Running a Shell CMD

```groovy
pipelone {
	agent any
	stages {
		stage('Run Shell Scripts'){
			steps{
				sh 'docker ps'
			}
		}
	}
}
```

# Running a Windows CMD

```groovy
pipelone {
	agent any
	stages {
		stage('Run Shell Scripts'){
			steps{
				bat 'docker ps'
			}
		}
	}
}
```

