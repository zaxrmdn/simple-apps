pipeline {
    agent { label 'host1-zakaria' }

    stages {
        stage('Pull SCM') {
            steps {
                git branch: 'main', url: 'https://github.com/zaxrmdn/simple-apps.git'
            }
        }
        
        stage('Build') {
            steps {
                sh'''
                cd app
                npm install
                '''
            }
        }
        
        stage('Testing') {
            steps {
                sh'''
                cd app
                npm test
                npm run test:coverage
                '''
            }
        }
        
        stage('Code Review') {
            steps {
                sh'''
                cd app
                sonar-scanner \
                -Dsonar.projectKey=simple-apps \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://172.23.4.119:9000 \
                -Dsonar.token=squ_941438e87b0d12b91babdd213efb6823a68e978d
                '''
            }
        }

        stage('Deliver') {
            steps {
                input message: 'Apakah anda sudah yakin untuk deploy ke production?', ok: 'Deploy Sekarang!'
            }
        }
        
        stage('Deploy') {
            steps {
                sh'''
                docker compose up --build -d
                '''
            }
        }
        
        
    }
}