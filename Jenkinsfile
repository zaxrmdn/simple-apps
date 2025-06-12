pipeline {
    agent { label 'devops1-zakaria' }

    stages {
        stage('Pull SCM') {
            steps {git branch: 'main', url: 'https://github.com/zaxrmdn/simple-apps.git'}
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
                cd apps
                sonar-scanner \
                    -Dsonar.projectKey=simple-apps \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=http://172.23.11.17:9000 \
                    -Dsonar.login=sqp_ea71c9e8e26dab42d64437721b7a36b3e58a0092
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