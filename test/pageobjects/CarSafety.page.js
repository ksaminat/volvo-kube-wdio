import locatorTags from "../config/locators-config.json"
import validatorData from "../config/validator-data-config.json"
import BasePageConfig from "./BasePageConfig"

class CarSaftyPage extends BasePageConfig{
    async openUrl() {
      await super.openUrl()
    }

    async waitThenClick(e, timeout){
        await super.waitThenClick(e, timeout)
    }

    async waitThenClick(e){
        await super.waitThenClick(e)
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
