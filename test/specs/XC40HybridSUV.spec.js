const carSaftyPage = require("../pageobjects/CarSafety.page")
const xc40HybridSUVPage = require("../pageobjects/XC40HybridSUV")

describe('Volvo XC40-Hybrid SUV Page Validator', async()=> {

    it('Launc Home Page', async()=> {
        await carSaftyPage.openCarSaftyPage()
    })

    it('Validate XC40-Hybrid SUV Link', async()=> {
        const xc40HBPageLink = xc40HybridSUVPage.xc40LaunchLink
        await xc40HBPageLink.click()
    })

    it('Validate XC40-Hybrid SUV URL', async()=> {
        const xc40HBPageURL = xc40HybridSUVPage.xc40PageURL
        await expect(await browser).toHaveUrl(xc40HBPageURL)
    })

    it('Validate XC40-Hybrid SUV Page Title', async()=> {
        const xc40HBPageTitle = xc40HybridSUVPage.xc40PageTitle
        await expect(await browser).toHaveTitle(xc40HBPageTitle)
    })

    /*it('Validate XC40-Hybrid SUV Page Headline', async()=> {
        const xc40HBPageHeaderLink = xc40HybridSUVPage.xc40PageHeader
        const xc40HBPagerHeaderText = xc40HybridSUVPage.xc40PageHeaderText
        await browser.pause(3000)
        await expect(await xc40HBPageHeaderLink).toHaveText(xc40HBPagerHeaderText)
    })*/

    it('Validate XC40-Hybrid SUV SHOP URL Launch', async()=> {
        const xc40HBShopButton = xc40HybridSUVPage.xc40PageShopButton
        await xc40HBShopButton.click()
    })

    it('Validate XC40-Hybrid SUV SHOP URL', async()=> {
        const xc40HBShopURL = xc40HybridSUVPage.xc40ShopURL
        await expect(await browser).toHaveUrl(xc40HBShopURL)
    })
})