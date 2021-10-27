import locatorTags from "../config/locators-config.json"
import validatorData from "../config/validator-data-config.json"

class XC40HybridSUV{
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
        return $(locatorTags.xc40HybridSUV.shopeButton)
    }

    get xc40ShopURL(){
        return locatorTags.xc40HybridSUV.shopeurl
    }
}

module.exports = new XC40HybridSUV()