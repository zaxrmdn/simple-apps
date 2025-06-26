pipeline {
    agent {label 'server1-zakaria'}
   
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
                -Dsonar.projectKey=Simple-Apps \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://172.23.14.107:9000 \
                -Dsonar.login=sqp_0718933dad4bad716659bc4f15baca819265fd5e'''
            }
        }