class CarSaftyPage{
    openCarSaftyPage() {
        browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
      }

      getTitle() {
        return "A million more | Volvo Cars - International";
      }
      getInternationaVolvoTitle() {
        return "International | Volvo Cars";
      }
    
      getLearnMoreAbtCarSftyLink() {
        return $("//*[@id=\"IconCallouts-1\"]/section/div/div[2]/div/a");
    }
    
      getLearnMoreAbtCarSftyPageTitle() {
        return "Car safety | Volvo Cars - International";
      }
    
      get driverAssistanceSystemLink() {
          return $("//*[@id=\"ImageWithText-1\"]/section/div[1]/div[2]/div/div/div/div[3]/div/div/a")
      }
      
      get driverAssistanceSystemTitle() {
        return "Driver assistance systems | Volvo Cars"
      }

      get childSaftyLink(){
        return $("//*[@id=\"ImageWithText-2\"]/section/div[1]/div[2]/div/div/div/div[3]/div/div/a")
      }

      get childSaftyPageTitle(){
        return "Child Safety innovations for our most precious passengers | Volvo Cars"
      }

      

      get moreAboutInnovationLink() {
        return $('/html/body/div[4]/div/div/main/div[6]/section/div[1]/div[2]/div/div/div/div[3]/div/div/a');
      }
    
      get moreAboutInnovation() {
        return "Safety innovations | Volvo Cars";
      }
    
      getModelsListPreviousButton() {
        return $("/html/body/div[4]/div/div/main/div[7]/section/div[1]/div/div/div[1]/div[2]/div/button[1]");
      }
    
      getModelsListNextButton() {
        return $("/html/body/div[4]/div/div/main/div[7]/section/div[1]/div/div/div[1]/div[2]/div/button[2]");
      }
      getInternationalVolvoAnchor() {
        return $('[href="/intl"]');
      }
      getSiteNavigationOthersButton() {
        return $("/html/body/div[3]/div/div/div[3]/nav/div[4]/button");
      }
      getBuildYourOwnLink() {
        return $("/html/body/div[6]/div/nav/div[2]/div[1]");
      }
      getBuildYourOwnElem() {
        return $("/html/body/div[6]/div/nav/div[3]/div/div/div[1]/div/a/em");
      }
      getWatchTheStoryButton() {
        return $("/html/body/div[4]/div/div/main/div[2]/section/div/div/div/button");
      }
      getVideoPlayer() {
        return $("//*[@id=\"movie_player\"]/div[1]/video");
      }
}

module.exports = new CarSaftyPage(); 
