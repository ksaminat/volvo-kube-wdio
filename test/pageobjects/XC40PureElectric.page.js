import locatorTags from "../config/locators-config.json"
import validatorData from "../config/validator-data-config.json"
import BasePageConfig from "./BasePageConfig"

class XC40PureElectricPage extends BasePageConfig{
    async openUrl() {
        await super.openUrl()
    }

    async waitThenClick(e, timeout){
        await super.waitThenClick(e, timeout)
    }
    
    get launchLink(){
        return $(locatorTags.xc40PureElectric.launchLink)
    }
    
    get url(){
        return locatorTags.xc40PureElectric.url
    }

    get title(){
        return validatorData.xc40PureElectric.title
    }

    get shopButton(){
        return $(locatorTags.xc40PureElectric.shopButton)
    }

    get shopUrl(){
        return locatorTags.xc40PureElectric.shopUrl
    }

    get shopTitle(){
        return validatorData.xc40PureElectric.shopTitle
    }
}

module.exports = new XC40PureElectricPage()