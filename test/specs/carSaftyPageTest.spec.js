const carSaftyPage = require("../pageobjects/CarSafety.page")
const saftyInnovationPage = require("../pageobjects/SaftyInnovation.page")

describe('Volvo Cars Safety Page Validator', async()=> {

    it('Launch Volvo Home', async()=> {
        //await carSaftyPage.openCarSaftyPage()
        await browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
        await browser.maximizeWindow()
        const cookieButton = $('/html/body/div[1]/div[2]/div[4]/div[2]/div/button')
        await (await cookieButton).click()

        

        console.log(browser.getTitle())
        
    })

    it('Validate Title', async()=> {
        const title = carSaftyPage.getTitle();
        //browser.waitUntil(()=> browser.getTitle() == title, 5000)
        await expect(browser).toHaveTitle(title)
        
    })

    it('Validate Care Safety Link', async()=> {
        const carSaftyLink = carSaftyPage.getLearnMoreAbtCarSftyLink()
        //console.log(await carSaftyLink.isDisplayed())
        //expect(await carSaftyLink.isDisplayed()).toEqual(true)
        const carSaftyHelpElem = $("//*[@id=\"IconCallouts-1\"]/section/div/div[1]/div[2]/div[2]/em")
        await carSaftyHelpElem.scrollIntoView()
        await carSaftyLink.waitForDisplayed()
        await carSaftyLink.moveTo()
        //await browser.pause(3000)
        await carSaftyLink.click()
    })

    it('Validate Car Safety Title', async()=> {
        const carSaftyPageLink = carSaftyPage.getLearnMoreAbtCarSftyPageTitle();
        await expect(await browser).toHaveTitle(carSaftyPageLink)
        await console.log("Browser title safty - ", await browser.getTitle())
    })

    it('Validate Driver assistance Link', async()=> {
        const driverAssistLink = carSaftyPage.driverAssistanceSystemLink
        //console.log(await carSaftyLink.isDisplayed())
        //expect(await carSaftyLink.isDisplayed()).toEqual(true)
        const driverAssistLinkHelpElem = $("//*[@id=\"ImageWithText-1\"]/section/div[1]/div[2]/div/div/div/h2")
        await driverAssistLinkHelpElem.scrollIntoView()
        await driverAssistLink.waitForDisplayed()
        await driverAssistLink.moveTo()
        //await browser.pause(3000)
        await driverAssistLink.click()
    })

    it('Validate Driver assistance Title', async()=> {
        const driverAssistTitle = carSaftyPage.driverAssistanceSystemTitle;
        await expect(await browser).toHaveTitle(driverAssistTitle)
        await console.log("Browser title safty - ", await browser.getTitle())
        await browser.back()
    })

    it('Validate Child Safety Link', async()=> {
        const childSaftyLink = carSaftyPage.childSaftyLink
        //console.log(await carSaftyLink.isDisplayed())
        //expect(await carSaftyLink.isDisplayed()).toEqual(true)
        const childSaftyLinkHelpElem = $("//*[@id=\"ImageWithText-2\"]/section/div[1]/div[2]/div/div/div/h2")
        await childSaftyLinkHelpElem.scrollIntoView()
        await childSaftyLink.waitForDisplayed()
        await childSaftyLink.moveTo()
        //await browser.pause(3000)
        await childSaftyLink.click()
    })

    it('Validate Child Safety Title', async()=> {
        const childSaftyTitle = carSaftyPage.childSaftyPageTitle
        console.log("childSaftyPageTitle - ", childSaftyTitle)
        await expect(await browser).toHaveTitle(childSaftyTitle)
        await console.log("Browser title safty - ", await browser.getTitle())
        await browser.back()
    })

    /*it('Validate Safety Innovations Link', async()=> {
        const saftyInnvLink = saftyInnovationPage.saftyInnovationsLink
        //console.log(await carSaftyLink.isDisplayed())
        //expect(await carSaftyLink.isDisplayed()).toEqual(true)
        await saftyInnvLink.scrollIntoView()
        await saftyInnvLink.waitForDisplayed()
        await saftyInnvLink.moveTo()
        //await browser.pause(3000)
        await saftyInnvLink.click()
    })

    it('Validate Safety Innovations Title', async()=> {
        const saftyInnvTitle = saftyInnovationPage.saftyInnovationsLinkTitle
        console.log("childSaftyPageTitle - ", saftyInnvTitle)
        await expect(await browser).toHaveTitle(saftyInnvTitle)
        await console.log("Browser title safty - ", await browser.getTitle())
        await browser.back()
    })*/
    
    it('Validate EVA Initiative Link', async()=> {
        const evaInitiativeLink = saftyInnovationPage.evaInitiativeLink
        //console.log(await carSaftyLink.isDisplayed())
        //expect(await carSaftyLink.isDisplayed()).toEqual(true)
        //await expect( await evaInitiativeLink.isDisplayedInViewport()).toEqual(true)
        //await evaInitiativeLink.scrollIntoView(true)
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