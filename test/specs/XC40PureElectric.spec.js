const carSaftyPage = require("../pageobjects/CarSafety.page")
const xc40PureElectricPage = require("../pageobjects/XC40PureElectric.page")

describe('Volvo XC40 Pure Electric Page Validator', async()=> {

    it('Launch Home Page', async()=> {
        await xc40PureElectricPage.openUrl()
        console.log('Testing - Volvo XC40 Pure Electric Page Validator')
    })

    it('Validate XC40 Pure Electric Link', async()=> {
        const xc40PEpageLink = xc40PureElectricPage.launchLink
        await xc40PureElectricPage.waitThenClick(xc40PEpageLink)
        //browser.waitUntil(()=> xc40PEpageLink.isDisplayedInViewport(), 6000)
        //await xc40PEpageLink.click()
    })

    it('Validate XC40 Pure Electric URL', async()=> {
        const xc40PEPageURL = xc40PureElectricPage.url
        await expect(await browser).toHaveUrl(xc40PEPageURL)
    })

    it('Validate XC40 Pure Electric Page Title', async()=> {
        const xc40PEPageTitle = xc40PureElectricPage.title
        await expect(await browser).toHaveTitle(xc40PEPageTitle)
    })

    it('Validate XC40 Pure Electric SHOP URL Launch', async()=> {
        const xc40PEShopButton = xc40PureElectricPage.shopButton
        await xc40PureElectricPage.waitThenClick(xc40PEShopButton)
        //browser.waitUntil(()=> xc40PEShopButton.isDisplayedInViewport(), 6000)
        //await xc40PEShopButton.click()
    })

    it('Validate XC40 Pure Electric SHOP Title', async()=> {
        const xc40PEShopURL = xc40PureElectricPage.shopUrl
        await expect(await browser).toHaveUrl(xc40PEShopURL)
    })

    it('Validate XC40 Pure Electric SHOP Title', async()=> {
        const xc40PEShopTitle = xc40PureElectricPage.shopTitle
        await expect(await browser).toHaveTitle(xc40PEShopTitle)
    })
})