const {Builder, By, until} = require('selenium-webdriver');
let fs = require('fs');
const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

(async function myFunction() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://citas.sat.gob.mx/citasat/agregarcita.aspx');

    //Seleccionar Yucatan
    await driver.findElement(By.id('ArbolAdministracionest188')).click();

    //Seleccionar ADSC Yucatan 1
    await driver.findElement(By.id('ArbolAdministracionest189')).click();

    //Seleccionar EFirma Personas Fisicas
    await driver.findElement(By.id('RBLServicios_4')).click();

    //Cierra alerta mensaje
    await driver.findElement(By.xpath('//*[@id="ModalMensajeServicio"]/div/div/div[3]/button')).click();

    // Resolver anticaptcha

    /*const anticaptcha = require('anticaptcha');
    await anticaptcha('97ba849834f8d9a155e64ee177d2588e');
    await anticaptcha.getBalance()
         .then(balance => console.log('my balance is $'+balance))
         .catch(error => console.log('received error '+error));

    anticaptcha.setMinLength(5);

    const taskId = await anticaptcha.createTask<INoCaptchaTaskProxyless>({
          type: TaskTypes.NOCAPTCHA_PROXYLESS,
          websiteKey: "6LcBhOQZAAAAANCvwTqjlCWnD-2w0ORIMJOJ9_ct",
          websiteURL: "https://citas.sat.gob.mx/citasat/agregarcita.aspx"
          });

    const response = await anticaptcha.getTaskResult<INoCaptchaTaskProxylessResult>(taskId);
    console.log('Response Code: ${response.solution.gRecaptchaResponse}');*/

    // Espera hasta que el usuario complete captcha
    await snooze(15000); //until user fills CAPTCHA
    await driver.findElement(By.id('cmdSiguiente')).click(); //Envio de formulario

    // LLenar data en siguiente forma
    await driver.findElement(By.id('TXTNombreContribuyente')).sendKeys('Luis Cardena'); //llenar Nombre
    await driver.findElement(By.name('TXTRFC')).sendKeys('CAML8510213G0'); //llenar RFC
    await driver.findElement(By.id('TXTCorreoElectronico')).sendKeys('lcard54@gmail.com'); //llenar correo electronico
    await driver.findElement(By.id('TXTCorreoElectronico')).sendKeys('lcard54@gmail.com');//llenar correo electronico de nuevo
    await driver.findElement(By.id('TXTTelefono')).sendKeys('9999999999');;//llenar telefono de tal forma que se despliegue el calendario

    //tomamos screenshot

    //Recorremos el calendario y guardamos los dias disponibles/no disponibles en una variable
    //Iniciamos variables necesarias
    var tr_value = 3; //valores de TR van del 3 al 8 (uno y dos son únicamente elementos sin información)
    var td_value = 1; //valores de TD van del 1 al 7 (dias  de la semana)
    var days_available = 0;
    var days_not_available = 0;


    //Recorremos el calendario por medio de for loops anidados, obteniendo el atributo style para determinar si el background color pertenece a dia disponible o no
    for (tr_value = 3; tr_value <= 8; tr_value++) {
      for (td_value = 1; td_value <= 7; td_value++) {
        var current_xpath = "//*[@id=\"Calendario\"]/tbody/tr[" + tr_value.toString() + "]/td[" + td_value.toString() + "]";
        var temp_attribute = await driver.findElement(By.xpath(current_xpath)).getAttribute("style");//.includes("background-color: white");
        //dias marcados como rojo en el calendario
        if (temp_attribute.includes("background-color: rgb(242, 222, 222", 24)) {
          days_not_available += 1;
        } //dias marcados como blanco en el calendario
        else if (temp_attribute.includes("background-color: white", 24)) {
          days_not_available += 1;
        } //dias marcados como azul en el calendario -- no hay ninguno actualmente
        else {
          days_available += 1;
        }
      }
    }

//imprimimos en terminal el resultado
console.log("Días disponibles: " + days_available);
console.log("Días NO disponibles: " + days_not_available);

/* PENDIENTES

-- CAPTCHA Resolver
-- Screenshot Calendario
-- Guardar en un array los dias disponibles
-- Guardar en un array los dias NO disponibles
-- Tests con Mocha/Chai
-- Github actions para ejecutar manualmente

*/

})();
