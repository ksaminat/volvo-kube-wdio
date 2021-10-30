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


### 4) Sample Output

#### Allure HTML Report

<img width="1680" alt="Overall-Test-Result" src="https://user-images.githubusercontent.com/13710428/139538753-4a4396b4-b76f-4fad-a507-e3a05fe243b7.png">
<img width="1680" alt="Suites-Wise-Result" src="https://user-images.githubusercontent.com/13710428/139538767-8e390b65-71c1-422f-9d14-7d6123c6e5d7.png">
<img width="1680" alt="Graphical-Result" src="https://user-images.githubusercontent.com/13710428/139538791-52b1a692-7a09-421c-b50b-3fd65c280f63.png">
<img width="1680" alt="Behaviour-Result" src="https://user-images.githubusercontent.com/13710428/139538802-7d904f7b-01c4-4aff-87bd-347ca04df2e4.png">
<img width="1680" alt="test1" src="https://user-images.githubusercontent.com/13710428/139538807-94130641-5660-4a6d-9193-291494a0c8d5.png">

#### Spec-Report Sample

<img width="1680" alt="Spec1" src="https://user-images.githubusercontent.com/13710428/139538855-6bf7e4e4-238a-4344-ae12-5cdce4e2b190.png">
<img width="1680" alt="spec2" src="https://user-images.githubusercontent.com/13710428/139538864-29401223-0080-4853-8253-ab7dd0a3c8e0.png">
<img width="1680" alt="spec3" src="https://user-images.githubusercontent.com/13710428/139538867-d2505112-7d82-4502-a66a-a552fa9ffca1.png">

