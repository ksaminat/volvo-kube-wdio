
const execSync = require('child_process').execSync;

export function getSeleniumHost(){
    const output = execSync('kubectl describe service selenium-router', { encoding: 'utf-8' });
    const startIndexKey = 'LoadBalancer Ingress:'
    const endIndexKey = 'Port:'
   
    const startIndex = output.search(startIndexKey) + startIndexKey.length
    const endIndex = output.search(endIndexKey)

    let ip = output.substring(startIndex, endIndex)
    ip = ip.trimStart().trimEnd()
    console.log(ip)
  
    return ip
}