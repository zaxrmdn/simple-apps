pipeline {
    agent {label 'dev1-zakaria'}
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
                sh '''
                sonar-scanner \
                 -Dsonar.projectKey=simple-apps \
                 -Dsonar.sources=. \
                 -Dsonar.host.url=http://172.23.4.117:9000 \
                 -Dsonar.token=sqp_a92ed96e5469d15060944fd45852a6721181da43
                '''
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