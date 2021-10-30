# Quick Guide

### 1) Run using Docker-Compose

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
```sh
npm run docker-stop
```

9. To generate and view reports follow `Reports Generation`


### 2) Run using Kubernetes

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
```sh 
npm run kube-stop
```

10. To generate and view reports follow `Reports Generation`


### 3) Report Generation

1. To execute allure report
- Install allure CLI
```sh
npm install -g allure-commandline --save-dev
```
- Generate the HTML report
```sh
allure generate -c allure-results/ && allure open
```

2. To view Timeline reports,
    - .json reports will be generated under './reports'

<img width="1680" alt="allure-report-Testcases-status" src="https://user-images.githubusercontent.com/13710428/139401906-8e02ecd8-9048-44ca-b57f-84a43545c7e3.png">
<img width="1680" alt="Test-Suite-Report" src="https://user-images.githubusercontent.com/13710428/139401376-6e5ace32-8816-43e5-8753-56035258d593.png">
<img width="1680" alt="Graph-Status" src="https://user-images.githubusercontent.com/13710428/139402101-153350b5-2367-41b7-87fd-9c2477249713.png">
<img width="1680" alt="car-safty-page" src="https://user-images.githubusercontent.com/13710428/139402080-e635d978-aafa-439d-bee0-5319e0e0926b.png">
<img width="1680" alt="XC40-Hybrid-SUV-Page" src="https://user-images.githubusercontent.com/13710428/139402119-6e8cb67f-834e-4743-bea5-2520c3375813.png">
