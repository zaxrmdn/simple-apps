pipeline {
    agent { label 'server1-zakaria' }

    stages {
        stage('Pull SCM') {
            steps {
                git branch: 'main', url: 'https://github.com/zaxrmdn/simple-apps.git'
            }
        }
        
        stage('Build') {
            steps {
                sh'''
                cd apps
                npm install
                '''
            }
        }
        
        stage('Testing') {
            steps {
                sh'''
                cd apps
                npm test
                npm run test:coverage
                '''
            }
        }
        
        stage('Code Review') {
            steps {
                sh'''
                sonar-scanner \
                  -Dsonar.projectKey=simple-apps \
                  -Dsonar.sources=. \
                  -Dsonar.host.url=http://172.23.14.51:9000 \
                  -Dsonar.login=sqp_addc4dd59d15e6d5126278997a028ed4767ba74a
                '''
            }
        }
        
        stage('Change file .env ') {
            steps {
                sh'''
                cd apps
                sed -i 's/localhost/db/g' .env
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh'''
                docker compose up --build -d
                '''
            }
        }
        
        stage('Backup') {
            steps {
                 sh 'docker compose push' 
            }
        }
    }
}