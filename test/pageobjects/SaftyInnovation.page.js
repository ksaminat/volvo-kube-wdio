class SaftyInnovationPage{
    get saftyInnovationsLink() {
        return $("//*[@id=\"ImageWithText-4\"]/section/div[1]/div[2]/div/div/div/div[3]/div/div/a")
      }

      get saftyInnovationsLinkTitle() {
          return "Safety innovations | Volvo Cars"
      }

      get evaInitiativeLink() {
          return $("//*[@id=\"ImageWithText-3\"]/section/div[1]/div[2]/div/div/div/div[3]/div/div/a")
      }

      get evaInitiativeLinkTitle() {
          return "The E.V.A. Initiative | Cars safe for all"
      }

      get evaInitiativeVideoButton() {
          return $("//*[@id=\"Video-1\"]/section/div/div/div/button")
      }

      get evaVideoPlayerLink(){
          return $("//*[@id=\"Video-1\"]/section/div/button/div/video")
      }
}

module.exports = new SaftyInnovationPage()