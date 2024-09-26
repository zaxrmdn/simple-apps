pipeline {
    // Run Script on server 1
    agent {
     label 'server1-zakaria'
    }

    // Setup Tools Nodejs
    tools {nodejs 'nodejs'}

    // Running CI/CD pipeline
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
                sonar-scanner \
                -Dsonar.projectKey=simple-apps \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://172.23.10.106:9000 \
                -Dsonar.login=sqp_e9e796d039ff623200b8267de82719910a2b8831'''
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