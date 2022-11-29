pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd /var/www/octaneadvisory'
                sh 'sh /var/www/deploy_octaneadvisory.sh'
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}