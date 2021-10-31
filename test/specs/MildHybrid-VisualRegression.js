const mildHybridPage = require("../pageobjects/MildHybrid.page")
const pageTitle = mildHybridPage.url

describe('Visual Regression Test Suite, Mild-Hybrid Page', async()=>{

    beforeEach(async () => {
        await mildHybridPage.openMyUrl()
    })

    it('Handle Cookies', async()=>{
        await mildHybridPage.handleCookies()
    })

    it('Validate Mild Hybrid Page - Header', async()=>{
        const headerLink = mildHybridPage.pageHeader
        const headerText = mildHybridPage.pageHeaderText
        await expect(await headerLink).toHaveText(headerText)
    })

    it('Mild-Hybrid Page, Initial Screen Save', async()=>{
        browser.waitUntil(()=>  browser.getUrl() == pageTitle, 6000)
        await browser.saveScreen("mildscreen", {})
    })

    it('Validate Mild-Hybrid Page, Initial Screen Save', async()=>{
        await browser.pause(1000)
        await expect(await browser.checkScreen("mildscreen", {})).toEqual(0)
     })

    it('FullScreen Capture, Mild-Hybrid Page', async()=>{
        await browser.pause(1000)
        await browser.saveFullPageScreen('mildsfullpage', {})
    })

    it('Validate FullScree Capture, Mild-Hybrid Page', async()=>{
        await browser.pause(1000)
        await expect(await browser.checkFullPageScreen('mildsfullpage', {})).toEqual(0)
    })

    it('Tabbed Screen Test, Mild-Hybrid Page', async()=>{
        await browser.pause(1000)
        await browser.saveTabbablePage('mildstabbedpage', {})
    })

    it('Validate Tabbed Screen Captured, Mild-Hybrid Page', async()=>{
        await browser.pause(1000)
        await expect(await browser.checkTabbablePage('mildstabbedpage', {})).toEqual(0)
    })
})