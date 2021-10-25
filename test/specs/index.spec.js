describe('Volvo Testing', ()=> {

    it('Login Title Validation', async()=> {
        await browser.url("https://www.volvocars.com/in/v/car-safety/a-million-more")
        const cookieButton = $('/html/body/div[1]/div[2]/div[4]/div[2]/div/button')

        await (await cookieButton).click()

        await expect(browser).toHaveTitleContaining("million more")
        
    })

    it('Loging Title Validation not working', async()=> {
        await expect(browser).toHaveTitleContaining("Cars")
    })
})