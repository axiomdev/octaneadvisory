pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'cd /var/www/octaneadvisory'
                sh 'sh /var/www/deploy_crm.sh'
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
server {
        listen 80;
        listen [::]:80;

        root /var/www/octaneadvisory/build;
        index index.html index.htm index.nginx-debian.html;

        server_name octaneadvisory.benodev.com;

        location / {
                try_files $uri $uri/ =404;
        }
}