const carSaftyPage = require("../pageobjects/CarSafety.page")
const saftyInnovationPage = require("../pageobjects/SaftyInnovation.page")

describe('Volvo Cars Safety Page Validator', async()=> {

    it('Launch Volvo Home', async()=> {
        await carSaftyPage.openUrl()
        console.log('Testing - Volvo Cars Safety Page Validator')
    })

    it('Validate Title', async()=> {
        const title = carSaftyPage.title;
        //browser.waitUntil(()=> browser.getTitle() == title, 5000)
        await expect(browser).toHaveTitle(title)
        
    })

    it('Validate Care Safety Link', async()=> {
        const carSaftyLink = carSaftyPage.learnMoreAbtCarSftyLink
        //console.log(await carSaftyLink.isDisplayed())
        //expect(await carSaftyLink.isDisplayed()).toEqual(true)
        //const carSaftyHelpElem = $("//*[@id=\"IconCallouts-1\"]/section/div/div[1]/div[2]/div[2]/em")
        //await carSaftyHelpElem.scrollIntoView()
        await carSaftyPage.waitThenClick(carSaftyLink)
    })

    it('Validate Car Safety Title', async()=> {
        const carSaftyPageTitle = carSaftyPage.learnMoreAbtCarSftyPageTitle;
        browser.waitUntil(()=> browser.getTitle() == carSaftyPageTitle, 6000)
        await expect(await browser).toHaveTitle(carSaftyPageTitle)
        //await console.log("Browser title safty - ", await browser.getTitle())
    })

    it('Validate Driver assistance Link', async()=> {
        const driverAssistLink = carSaftyPage.driverAssistanceSystemLink
        //console.log(await carSaftyLink.isDisplayed())
        //expect(await carSaftyLink.isDisplayed()).toEqual(true)
        const driverAssistLinkHelpElem = $("//*[@id=\"ImageWithText-1\"]/section/div[1]/div[2]/div/div/div/h2")
        await driverAssistLinkHelpElem.scrollIntoView()
        await carSaftyPage.waitThenClick(driverAssistLink)
        //await driverAssistLink.click()
    })

    it('Validate Driver assistance Title', async()=> {
        const driverAssistTitle = carSaftyPage.driverAssistanceSystemTitle;
        browser.waitUntil(()=> browser.getTitle() == driverAssistTitle, 6000)
        await expect(await browser).toHaveTitle(driverAssistTitle)
        //await console.log("Browser title safty - ", await browser.getTitle())
        await browser.back()
    })

    it('Validate Child Safety Link', async()=> {
        const childSaftyLink = carSaftyPage.childSaftyLink
        //console.log(await carSaftyLink.isDisplayed())
        //expect(await carSaftyLink.isDisplayed()).toEqual(true)
        const childSaftyLinkHelpElem = $("//*[@id=\"ImageWithText-2\"]/section/div[1]/div[2]/div/div/div/h2")
        await childSaftyLinkHelpElem.scrollIntoView()
        await carSaftyPage.waitThenClick(childSaftyLink)
    })

    it('Validate Child Safety Title', async()=> {
        const childSaftyTitle = carSaftyPage.childSaftyPageTitle
        //console.log("childSaftyPageTitle - ", childSaftyTitle)
        browser.waitUntil(()=> browser.getTitle() == childSaftyTitle, 6000)
        await expect(await browser).toHaveTitle(childSaftyTitle)
        //await console.log("Browser title safty - ", await browser.getTitle())
        await browser.back()
    })
    
    it('Validate EVA Initiative Link', async()=> {
        const evaInitiativeLink = saftyInnovationPage.evaInitiativeLink
        browser.waitUntil(()=> evaInitiativeLink.isDisplayedInViewport(), 6000)
        /*await expect( await evaInitiativeLink.isDisplayedInViewport()).toEqual(true)
        await console.log("initiative printing - ", await evaInitiativeLink.isDisplayedInViewport())
        await browser.pause(6000)
        //await evaInitiativeLink.waitForDisplayed(6000)
        //await browser.pause(3000)
        //await evaInitiativeLink.moveTo()
        //await browser.pause(6000)*/
        await evaInitiativeLink.click()
    })

    it('Validate EVA Initiative Title', async()=> {
        const evaInitiativeLinkTitle = saftyInnovationPage.evaInitiativeLinkTitle
        await expect(await browser).toHaveTitle(evaInitiativeLinkTitle)
    })

    it('Validate EVA Initiative Video', async()=> {
        const evaInitiativeVideoButton = saftyInnovationPage.evaInitiativeVideoButton
        await evaInitiativeVideoButton.click()
        await browser.pause(10000)

        const evaInitiativeVideoPlayer = saftyInnovationPage.evaVideoPlayerLink
        await expect(await evaInitiativeVideoPlayer).toBeDefined()
    })
})