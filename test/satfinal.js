//Declare global constants/variables
const ac = require("@antiadmin/anticaptchaofficial");
const { Builder, By, Key, until } = require('selenium-webdriver');
const { Options: ChromeOptions } = require('selenium-webdriver/chrome');
require('chromedriver');
var fs = require('fs');
const { expect } = require('chai');
const assert = require('chai').assert;

//Assign API Key to ANTIcaptcha and get balance
ac.setAPIKey('KEYFORANTICAPTCHASERVICE'); // PLEASE ENTER YOUR KEY FOR THE SERVICE
ac.getBalance()
    .then(balance => console.log('my balance is $' + balance))
    .catch(error => console.log('received error ' + error))

//Create Test Suite on Mocha
describe('SAT Appointment portal', () => {
    const chromeOptions = new ChromeOptions();
    chromeOptions.excludeSwitches('enable-logging');
    const driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(ChromeOptions)
      .build();

//Test Case #01 - Validate Number of Days Available is greater than zero
    it('Validate Number of Days Available is > 0', async () => {
        await driver.manage().window().maximize();
        //Open URL and Navigate to the form where captcha is placed
        await driver.get('https://citas.sat.gob.mx/citasat/agregarcita.aspx');
        await driver.findElement(By.id('ArbolAdministracionest188')).click();
        await driver.findElement(By.id('ArbolAdministracionest189')).click();
        await driver.findElement(By.id('RBLServicios_4')).click();
        await driver.findElement(By.css('#ModalMensajeServicio div div div.modal-footer button')).click();
        //Starting the anti captcha process
        let captchaLabel = await driver.findElement(By.css('#captchaWrapper div div div label'));
        let captchaWebElement = await driver.findElement(By.id('captcha'));
        await driver.executeScript("arguments[0].scrollIntoView()", captchaLabel);
        await driver.sleep(300);
        let base64String = (await (captchaWebElement.getAttribute('src'))).replace("data:image/gif;base64,", "")
        ac.solveImage(base64String, true)
            .then(text => driver.findElement(By.id('txtUserInput')).sendKeys(text))
            .catch(error => console.log('test received error ' + error));
        await driver.sleep(15000);
        //await driver.sleep(20000); //line added to manually enter captcha when needed
        await driver.findElement(By.id('cmdSiguiente')).click();
        //Next page is loading and fill random data to get the calendar displayed
        await driver.sleep(9000);
        await driver.findElement(By.id('TXTNombreContribuyente')).sendKeys('QA Tester'); //Assign Name
        await driver.findElement(By.name('TXTRFC')).sendKeys('ZABL8911293G2'); //Assign RFC
        await driver.findElement(By.id('TXTCorreoElectronico')).sendKeys('test@gmail.com'); //Assign email address
        await driver.findElement(By.id('TXTCorreoElectronico')).sendKeys('test@gmail.com'); //Sometimes previous email address is removed so we add it again
        await driver.findElement(By.id('TXTTelefono')).sendKeys('9999999999');;//Assign phone number, then calendar is displayed

        //Validate elements of calendar to obtain availability based on attribute style
        let tr_value = 3; //TR values on calendar go from 3 to 8 in this case
        let td_value = 1; //TD values on calendar go from 1 to 7 in this case
        //create variables to store number of days with/without availability and arrays to store the days with/without availability
        let days_available = 0;
        let days_not_available = 0;
        let days_available_list = [];
        let days_not_available_list = [];

        for (tr_value = 3; tr_value <= 8; tr_value++) {
          for (td_value = 1; td_value <= 7; td_value++) {
            let current_xpath = "//*[@id=\"Calendario\"]/tbody/tr[" + tr_value.toString() + "]/td[" + td_value.toString() + "]";
            let temp_attribute = await driver.findElement(By.xpath(current_xpath)).getAttribute("style");
            let temp_day = await driver.findElement(By.xpath(current_xpath)).getText();
            //Days displayed as red are logged
            if (temp_attribute.includes("background-color: rgb(242, 222, 222", 24)) {
              days_not_available += 1;
              days_not_available_list.push(temp_day);
            } //Days displayed as blank are logged
            else if (temp_attribute.includes("background-color: white", 24)) {
              days_not_available += 1;
              days_not_available_list.push(temp_day);
            } //Days not displayed as red/blank are logged
            else {
              days_available += 1;
              days_available_list.push(temp_day);
            }
          }
        }

    //Zoom out and take screenshot of calendar page
    let level = 80;
    await driver.executeScript("document.body.style.zoom='" + level + "%'");
    driver.takeScreenshot().then(function(data){
      fs.writeFileSync('SATDatesScreenshot.png', data, 'base64');
    });

    //Display available/non-available dates in calendar
    console.log("Number of available days: " + days_available);
    console.log("Number of non-available days: " + days_not_available);
    console.log("List of available days: " + days_available_list);
    console.log("List of Non-Available days: " + days_not_available_list);

    //Validate that number of days available retrieved is at least one using a Chai Assert
    assert.isAtLeast(days_available, 1);

    });

    //Close driver
    after(async () => driver.quit());

});
