pipeline {
    agent { label 'devops1-zakaria' }

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

        stage('Set ENV') {
            steps {
                withCredentials ([
                    string(credentialsId:'db-name', variable: 'db-name'),
                    string(credentialsId:'db-user', variable: 'db-user'),
                    string(credentialsId:'db-password', variable: 'db-password'),
                    string(credentialsId:'db-host', variable: 'db-host'),
                    string(credentialsId:'app-port', variable: 'app-port'),
                ]) 
                {
                script {
                writeFile file: '.env', text: """
                DB_NAME=${db-name} 
                DB_HOST=${db-host} 
                DB_USER=${db-user} 
                DB_PASS=${db-password} 
                APP_PORT=${app-port} 
                """.stripIndent ()
                }
            }
        }
        
        stage('Testing') {
            steps {
                sh'''
                cd apps
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
                -Dsonar.host.url=http://172.23.13.196:9000 \
                -Dsonar.token=sqp_4c4da067248353e77f369cae13cdc4fefecdb896
                '''
            }
        }
        
        stage('Deploy') {
            steps {
                withCredentials ([
                    string(credentialsId:'db-name', variable: 'db-name'),
                    string(credentialsId:'db-user', variable: 'db-user'),
                    string(credentialsId:'db-password', variable: 'db-password'),
                    string(credentialsId:'db-host-container', variable: 'db-host-container'),
                    string(credentialsId:'app-port', variable: 'app-port'),
                ])
                {
                sh'''
                docker compose up --build -d
                '''
                }
            }
        }
        
        
    }
}