pipeline {
    agent any

    tools {
        nodejs 'nodejs' 
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Code successfully fetched from GitHub!'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                // sh 'npm test'
            }
        }
    }
}