pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Code pulled from GitHub successfully'
            }
        }

        stage('Build') {
    steps {
        sh 'docker --version'
        sh 'docker build -t node-mongo-app .'
    }
}

        stage('Deploy') {
            steps {
                echo 'Deploy stage completed'
            }
        }
    }
}