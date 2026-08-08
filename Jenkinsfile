pipeline {
    agent {label 'srv1-zakaria'}
    stages {
        stage('Checkout'){steps{ checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/zaxrmdn/simple-apps.git']]) }}
        stage('Build')
        {    steps{ 
                sh '''
                cd apps 
                npm install''' }}

        stage('Testing')
            {steps{
                sh '''cd apps
                npm test
                npm run test:coverage'''}}


        stage('Code Review')
            {steps{
                sh '''
                cd apps
                sonar-scanner \\
                  -Dsonar.projectKey=simple-apps-zakaria \\
                  -Dsonar.sources=. \\
                  -Dsonar.host.url=http://172.23.7.105:9000 \\
                  -Dsonar.token=sqp_b887e8e70177a1695551bffba91be8c8cb3e4ba5'''
             }}

        stage('Deploy')
            {steps{
                sh 'docker compose up -d --build'
            }}
    }

}