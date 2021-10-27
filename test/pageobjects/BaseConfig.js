import config from "../config/locators-config.json"

class BaseConfig{

    async openUrl(){
        await browser.url(config.base.url);
        await browser.maximizeWindow()
    }

    async handleCookies(){
        const cookieButton = $(config.base.cookieButton)
        await (await cookieButton).click()

        console.log(await browser.getTitle())
    }
}

module.exports = new BaseConfig();