pipeline {
    agent any
    tools {
	maven 'maven'
    }		

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Dion57/KommyStitches.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh 'mvn sonar:sonar'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t deonshelli/my-react-app .'
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'docker run --rm trivy deonshelli/my-react-app analyze'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
            ansible-playbook -i inventory deployment.yml
        '''
            }
        }
    }
}
