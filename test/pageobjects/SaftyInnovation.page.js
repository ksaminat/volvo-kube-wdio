import locatorTags from "../config/locators-config.json"
import validatorData from "../config/validator-data-config.json"

class SaftyInnovationPage{
    get saftyInnovationsLink() {
        return $(locatorTags.saftyInnovations.saftyInnovationsLink)
      }

      get saftyInnovationsLinkTitle() {
          return validatorData.safetyInnovation.safetyInnovationTitle
      }

      get evaInitiativeLink() {
          return $(locatorTags.saftyInnovations.evaInitiativeLink)
      }

      get evaInitiativeLinkTitle() {
          return validatorData.safetyInnovation.evaInitiativeLinkTitle
      }

      get evaInitiativeVideoButton() {
          return $(locatorTags.saftyInnovations.evaInitiativeVideoButton
            )
      }

      get evaVideoPlayerLink(){
          return $(locatorTags.saftyInnovations.evaInitiativeVideoLink)
      }
}

module.exports = new SaftyInnovationPage()