pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Code fetched from GitHub dev branch'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Code Quality (Lint)') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run Automated Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to AWS Staging') {
            steps {
                withCredentials([file(credentialsId: 'aws-staging-pem', variable: 'PEM_KEY')]) {
                    sh '''
                        chmod 400 $PEM_KEY
                        ssh -o StrictHostKeyChecking=no -i $PEM_KEY ubuntu@3.25.139.144 "
                            cd ~/recipe-backend &&
                            git pull origin dev &&
                            npm ci --omit=dev &&
                            pm2 restart recipe-staging
                        "
                    '''
                }
            }
        }
    }
}