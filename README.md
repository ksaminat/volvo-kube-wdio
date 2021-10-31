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

#### HTML Report

<img width="1680" alt="allure-output1" src="https://user-images.githubusercontent.com/13710428/139573387-e987a23c-19f1-4a5f-a712-a5a71917edfb.png">
<img width="1680" alt="suit-output" src="https://user-images.githubusercontent.com/13710428/139573433-c4ba7e5c-e0b5-424e-bd9e-afb53495855b.png">
<img width="1680" alt="behaviour-wise-output" src="https://user-images.githubusercontent.com/13710428/139573404-fbce38f4-da15-407b-8f1f-6d8de6a3a95b.png">
<img width="1680" alt="graph-output" src="https://user-images.githubusercontent.com/13710428/139573421-677e42fc-d71e-4248-8c0d-8b636f72164a.png">
<img width="1680" alt="vr-output1" src="https://user-images.githubusercontent.com/13710428/139573430-696c95cb-8f90-4c52-bc05-210d9abd956c.png">
<img width="1680" alt="vr3-output" src="https://user-images.githubusercontent.com/13710428/139573446-e3682aab-75a3-4b26-b653-5a4ec4db2978.png">


#### Spec-Report - Kubernetes

<img width="1680" alt="Kube-test1" src="https://user-images.githubusercontent.com/13710428/139573535-2472e8e9-98ea-4187-95bd-d4ffbe521e58.png">
<img width="1680" alt="Kube-test2" src="https://user-images.githubusercontent.com/13710428/139573548-87477a64-a5f3-4d1a-a2ca-b2db35cb1868.png">
<img width="1680" alt="Kube-test3" src="https://user-images.githubusercontent.com/13710428/139573563-2199ed95-2630-44a4-82e0-9812680db639.png">
<img width="1680" alt="Kube-test3" src="https://user-images.githubusercontent.com/13710428/139573752-0086e8f3-8437-4a6f-9fb0-d36ffc2a520d.png:>

#### Spec-Report - Docker

<img width="1680" alt="Docker-test1" src="https://user-images.githubusercontent.com/13710428/139573459-929c9d83-cb38-4e96-a5ae-f3eec42a4614.png">
<img width="1680" alt="Docker-test2" src="https://user-images.githubusercontent.com/13710428/139573470-49c778e2-81c1-48a4-ac45-915ac22fcb73.png">
<img width="1680" alt="Docker-test3" src="https://user-images.githubusercontent.com/13710428/139573473-e929c66d-358d-4ee9-89d0-bb661d007859.png">
<img width="1680" alt="Docker-test4" src="https://user-images.githubusercontent.com/13710428/139573490-2d8777a1-0b3f-482e-9865-d025f7147db1.png">




