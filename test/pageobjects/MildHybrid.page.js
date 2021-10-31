import locatorTags from "../config/locators-config.json"
import validatorData from "../config/validator-data-config.json"
import BasePageConfig from "./BasePageConfig"

class MildHybridPage extends BasePageConfig{
    async openUrl() {
        await super.openUrl()
    }

    async openMyUrl() {
        await browser.url(locatorTags.mildHybrid.url)
    }

    async handleCookies(){
        await super.handleCookies()
    }

    async waitThenClick(e, timeout){
        await super.waitThenClick(e, timeout)
    }

    async waitThenClick(e){
        await super.waitThenClick(e)
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