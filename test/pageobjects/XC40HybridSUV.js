import locatorTags from "../config/locators-config.json"
import validatorData from "../config/validator-data-config.json"
import BasePageConfig from "./BasePageConfig"

class XC40HybridSUV extends BasePageConfig{
    async openUrl() {
        await super.openUrl()
    }

    async waitThenClick(e, timeout){
        await super.waitThenClick(e, timeout)
    }
    
    async waitThenClick(e){
        await super.waitThenClick(e)
    }
    
    get xc40LaunchLink(){
        return $(locatorTags.xc40HybridSUV.launchLink)
    }

    get xc40PageURL(){
        return locatorTags.xc40HybridSUV.url
    }

    get xc40PageTitle(){
        return validatorData.xc40HybridSUV.title
    }

    get xc40PageHeader(){
        return $(locatorTags.xc40HybridSUV.pageHeader)
    }

    get xc40PageHeaderText(){
        return validatorData.xc40HybridSUV.headerText
    }

    get xc40PageShopButton(){
        return $(locatorTags.xc40HybridSUV.shopButton)
    }

    get xc40ShopURL(){
        return locatorTags.xc40HybridSUV.shopUrl
    }
}

module.exports = new XC40HybridSUV()