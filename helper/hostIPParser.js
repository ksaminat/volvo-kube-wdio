const execSync = require('child_process').execSync;

export function getSeleniumHost(){
    const jsonResult = execSync('kubectl get service selenium-router  -o json', { encoding: 'utf-8' });
    //console.log(jsonResult)

    const jsonResultObj = JSON.parse(jsonResult)
    const ip = jsonResultObj.status.loadBalancer.ingress[0].ip

    console.log(ip)
    return ip
}
