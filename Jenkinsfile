pipeline {
    agent {label 'zakariar.com'}

    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'dev', url: 'https://github.com/zaxrmdn/simple-apps.git'
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
