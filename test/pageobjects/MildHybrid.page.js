import locatorTags from "../config/locators-config.json"
import validatorData from "../config/validator-data-config.json"
import BasePageConfig from "./BasePageConfig"

class MildHybridPage extends BasePageConfig{
    async openUrl() {
        await super.openUrl()
    }

    async waitThenClick(e, timeout){
        await super.waitThenClick(e, timeout)
    }

    get launchLink(){
        return $(locatorTags.mildHybrid.launchLink)
    }

    get url(){
        return locatorTags.mildHybrid.url
    }

    get pageHeader(){
        return $(locatorTags.mildHybrid.pageHeader)
    }

    get pageHeaderText(){
        return validatorData.mildHybrid.pageHeaderText
    }
}

module.exports = new MildHybridPage()