import config from "../config/locators-config.json"
import timeouts from "../config/timeout-settings.json"

export default class BasePageConfig{

    async openUrl(){
        await browser.url(config.base.url);
        await browser.maximizeWindow()

        await browser.pause(3000)
        const cookieButton = $(config.base.cookieButton)
        await (await cookieButton).click()

        //console.log(await browser.getTitle())
    }

    async openUrl(url){
        await browser.url(url);
    }

    async handleCookies(){
        await browser.maximizeWindow()
        await browser.pause(3000)
        const cookieButton = $(config.base.cookieButton)
        await (await cookieButton).click()
    }

    async waitThenClick(e, timeout){
        await e.waitForDisplayed(timeout)
        await e.click()
    }

    async waitThenClick(e){
        await e.waitForDisplayed(timeouts.global.click)
        await e.click()
    }
}
