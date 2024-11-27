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
                sh '''
                docker build -t deonshelli/my-react-app .
                docker push deonshelli/my-react-app
                '''
            }
        }

        stage('Trivy Scan') {
            steps {
                sh 'docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image deonshelli/my-react-app'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
            ansible-playbook -i localhost, ansible.yml
        '''
            }
        }
    }
}
