pipeline {
    agent {label 'srv1-devops4'}
    
    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'main', url: 'https://github.com/zaxrmdn/simple-apps.git'
            }
        }
        stage('Build') {
            steps {
                sh '''cd apps
                npm install'''
            }
        }
        stage('Testing') {
            steps {
                sh '''cd apps
                npm test
                npm run test:coverage'''
            }
        }
        stage('Code Review') {
            steps {
                sh '''cd apps
                sonar \
                -Dsonar.host.url=http://172.23.13.114:9000 \
                -Dsonar.token=sqp_2a21dc48a21ec2a7a52ec28fa72f0de30724f7ce \
                -Dsonar.projectKey=simple-apps'''
            }
        }
        stage('Deploy compose') {
            steps {
                sh '''
                docker compose build
                docker compose up -d
                '''
            }
        }
    }
}