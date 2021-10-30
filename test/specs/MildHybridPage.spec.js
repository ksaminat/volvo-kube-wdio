const carSaftyPage = require("../pageobjects/CarSafety.page")
const mildHybridPage = require("../pageobjects/MildHybrid.page")

describe('Volvo Mild Hybrid Page Validator', async()=> {

    it('Launch Home Page', async()=> {
        await mildHybridPage.openUrl()
    })

    it('Launch Mild Hybrid Page', async()=>{
        const navigationLink = mildHybridPage.launchLink
        const linkHelper = $("//*[@id=\"ProductListCarousel-1\"]/section/div[1]/div/div/div/div[3]")
        await linkHelper.scrollIntoView()
        await mildHybridPage.waitThenClick(navigationLink, 6000)
        //browser.waitUntil(()=> navigationLink.isDisplayedInViewport(), 6000)
        //await navigationLink.click()
    })

    it('Validate Mild Hybrid Page URL', async()=>{
        const url = mildHybridPage.url
        await expect(await browser).toHaveUrl(url)
    })

    it('Validate Mild Hybrid Page - Header', async()=>{
        const headerLink = mildHybridPage.pageHeader
        const headerText = mildHybridPage.pageHeaderText
        await expect(await headerLink).toHaveText(headerText)
    })
})