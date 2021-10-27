import locatorTags from "../config/locators-config.json"
import validatorData from "../config/validator-data-config.json"
const baseConfig = require("../pageobjects/BaseConfig")

class CarSaftyPage{
    async openCarSaftyPage() {
      await baseConfig.openUrl()
      await baseConfig.handleCookies()
    }

      get title() {
        return validatorData.carSafety.title
      }

      get learnMoreAbtCarSftyLink() {
        return $(locatorTags.carSafety.learnModeLink);
    }
    
      get learnMoreAbtCarSftyPageTitle() {
        return validatorData.carSafety.learnMoreTitle;
      }
    
      get driverAssistanceSystemLink() {
          return $(locatorTags.carSafety.driverAssistanceLink)
      }
      
      get driverAssistanceSystemTitle() {
        return validatorData.carSafety.driverAssistanceTitle
      }

      get childSaftyLink(){
        return $(locatorTags.carSafety.childSaftyLink)
      }

      get childSaftyPageTitle(){
        return validatorData.carSafety.childSafety
      }

      get moreAboutInnovationLink() {
        return $('/html/body/div[4]/div/div/main/div[6]/section/div[1]/div[2]/div/div/div/div[3]/div/div/a');
      }
    
      get moreAboutInnovation() {
        return "Safety innovations | Volvo Cars";
      }
}

module.exports = new CarSaftyPage(); 
