import config from "../config/locators-config.json"

export default class BasePageConfig{

    async openUrl(){
        await browser.url(config.base.url);
        await browser.maximizeWindow()

        await browser.pause(3000)
        const cookieButton = $(config.base.cookieButton)
        await (await cookieButton).click()

        console.log(await browser.getTitle())
    }

    async handleCookies(){
        const cookieButton = $(config.base.cookieButton)
        await (await cookieButton).click()

        console.log(await browser.getTitle())
    }

    async waitThenClick(e, timeout){
        await e.waitForDisplayed(timeout)
        await e.click()
    }
}
