# Quick Guide

### 1) Run using Kubernetes

1.  Install Docker

2.  Install `minikube`

    `https://minikube.sigs.k8s.io/docs/start/`

3.  Install Node Js
    
4.  git clone https://github.com/ksaminat/volvo-kube.git

5.  To install dependencies
```sh
npm Install
```

6. Deploy Selennium Grid, Browser Drivers deployments
```sh
npm run kube-start
```
 -- Wait for 5/10 mins - Browser Drivers to get registered with Selenium Grid

7. To execute the test
```sh
npm test
```

8. Spec report will be printed in the console

9. Stop the deployments and services
    npm run kube-stop

10. To generate follow `Reports Generation`


### 2) Report Generation

1. To execute allure report
- Install allure CLI
```sh
npm install -g allure-commandline --save-dev
```
- Generate the HTML report
```sh
allure generate -c . && allure open
```

2. To view Timeline reports,
    - .json reports will be generated under './reports'



### 3) Run using Docker-Compose

1. Install Docker

2. Install Node Js

3. git clone https://github.com/ksaminat/volvo-kube.git

4. To install dependencies
```sh
npm Install
```

5. Start Selennium Grid, Browser Driver containers using docker-compose
```sh
npm run docker-start
```

6. To execute the test
```sh
npm test
```

7. Spec report will be printed in colsole.

8. Stop the conntainers
    npm run docker-stop

9. To generate follow `Reports Generation`
