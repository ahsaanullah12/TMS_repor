pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}