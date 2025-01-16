pipeline {
    agent {
      label 'devops1-zakaria'
    }
    
    tools {
      nodejs 'nodejs'
    }

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
                sonar-scanner \\
                -Dsonar.projectKey=Simple-Apps \\
                -Dsonar.sources=. \\
                -Dsonar.host.url=http://172.23.10.16:9000 \\
                -Dsonar.login=sqp_07bbdaa81010836e35d193c6540b5d54ca79098e'''
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