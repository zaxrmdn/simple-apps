pipeline {
    agent { label 'host1-zakaria' }
    parameters {
        choice(name: 'ENVIRONMENT', choices: ['staging', 'production'], description: 'Pilih environment')
    }

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
             script {
                def userInput = input (
                    message: "Lanjutkan? ${params.ENVIRONMENT}"
                    parameters: [
                            booleanParam(defaultValue: true, description: 'Setujui deployment?', name: 'APPROVE_STATUS')
                        ]
                )
                if (userInput == true) {
                        echo "Approval diberikan! Melanjutkan deployment..."
                        env.DEPLOY_STATUS = 'APPROVED'
                } else {
                        echo "Deployment dibatalkan oleh user."
                        env.DEPLOY_STATUS = 'REJECTED'
                    }
                }
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