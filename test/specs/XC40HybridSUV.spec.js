const carSaftyPage = require("../pageobjects/CarSafety.page")
const xc40HybridSUVPage = require("../pageobjects/XC40HybridSUV")

describe('Volvo XC40-Hybrid SUV Page Validator', async()=> {

    it('Launch Home Page', async()=> {
        await xc40HybridSUVPage.openUrl()
        console.log('Testing - Volvo XC40-Hybrid SUV Page Validator')
    })

    it('Launch XC40-Hybrid SUV Page', async()=> {
        const xc40HBPageLink = xc40HybridSUVPage.xc40LaunchLink
        await xc40HybridSUVPage.waitThenClick(xc40HBPageLink)
    })

    it('Validate XC40-Hybrid SUV URL', async()=> {
        const xc40HBPageURL = xc40HybridSUVPage.xc40PageURL
        await expect(await browser).toHaveUrl(xc40HBPageURL)
    })

    it('Validate XC40-Hybrid SUV Page Title', async()=> {
        const xc40HBPageTitle = xc40HybridSUVPage.xc40PageTitle
        await expect(await browser).toHaveTitle(xc40HBPageTitle)
    })

    it('Validate XC40-Hybrid SUV SHOP URL Launch', async()=> {
        const xc40HBShopButton = xc40HybridSUVPage.xc40PageShopButton
        await xc40HybridSUVPage.waitThenClick(xc40HBShopButton)
    })

    it('Validate XC40-Hybrid SUV SHOP URL', async()=> {
        const xc40HBShopURL = xc40HybridSUVPage.xc40ShopURL
        await expect(await browser).toHaveUrl(xc40HBShopURL)
    })
})