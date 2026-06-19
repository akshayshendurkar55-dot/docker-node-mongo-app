pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Code pulled from GitHub'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t docker-node-mongo-app .'
            }
        }
    }
}