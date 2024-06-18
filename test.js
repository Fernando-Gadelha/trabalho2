const {Builder, By, Key, until} = require("selenium-webdriver")

async function openSite(){
    try{
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.manage().window().maximize()
        await driver.get("https://www.picoshop.com.br/")
        await driver.sleep(5000)

        //Conseguir desconto 
        const emailDiscount = await driver.wait(until.elementLocated(By.id("email")), 10000)
        await emailDiscount.sendKeys("meuemail@gmail.com")
        await driver.executeScript(`document.evaluate("//div[@class='_text_1vm0o_33']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)

        //Login
        await driver.executeScript(`document.evaluate("//a[@href='/account/login']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)
        const emailInput = await driver.findElement(By.id("CustomerEmail"))
        await emailInput.sendKeys("meuemail@gmail.com")
        const passwordInput = await driver.findElement(By.id("CustomerPassword"))
        await passwordInput.sendKeys("minhasenha123")
        await driver.sleep(2000)
        await driver.executeScript(`
            var button = document.evaluate("//form[@id='customer_login']//button", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            button.click();
        `)
        await driver.sleep(3000)
        await driver.get("https://www.picoshop.com.br/")
        await driver.sleep(5000)


        //Rota não existente
        await driver.get("https://www.picoshop.com.br/naoexisto")
        const backButton = await driver.findElement(By.css("a[href='/collections/all']"))
        await backButton.click()
        await driver.sleep(5000)        
        
        //Selecionando produto e adicionando ao carrinho
        await driver.executeScript(`document.evaluate("//a[@href='/products/carpenter-jeans-pants-light-blue']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)
        driver.sleep(5000)
        const addOnCart = driver.findElement(By.name("add"))
        await addOnCart.click()
        driver.sleep(5000)
            
        //Navegação
        await driver.executeScript(`document.evaluate("//a[@href='/pages/sobre-nos']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)
        await driver.sleep(4000)
        await driver.executeScript(`document.evaluate("//a[@href='/']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)

    } catch (e) {
        console.log(e)
    }
}

openSite()