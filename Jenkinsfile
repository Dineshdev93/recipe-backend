pipeline {
    agent any

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
                // Agar aapke package.json mein test script hai toh niche wali line chala sakte hain:
                // sh 'npm test'
            }
        }
    }
}