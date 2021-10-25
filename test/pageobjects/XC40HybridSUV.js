class XC40HybridSUV{

    get xc40LaunchLink(){
        return $("//*[@id=\"ProductListCarousel-1\"]/section/div[1]/div/div/div/div[1]/div/div/div/div/div[3]/div/a/div[2]/picture")
    }

    get xc40PageURL(){
        return "https://www.volvocars.com/intl/v/cars/xc40-hybrid"
    }

    get xc40PageTitle(){
        return "Volvo XC40 Recharge plug-in hybrid | Volvo Cars"
    }

    get xc40PageHeader(){
        return $("//*[@id=\"PdpSubmenu-1\"]/div[3]/h2")
    }

    get xc40PageHeaderText(){
        return "Volvo XC40 Recharge"
    }

    get xc40PageShopButton(){
        return $("//*[@id=\"PdpSubmenu-1\"]/div[2]/div/section/div[1]/div[2]/div/div/a")
    }

    get xc40ShopURL(){
        return "https://www.volvocars.com/intl/build/xc40-hybrid"
    }
}

module.exports = new XC40HybridSUV()