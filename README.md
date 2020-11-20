# SAT Page Simple Availability Dates Check
This is a small piece of code for an automation testing challenge requesting to validate if there are any dates available for the following request:
URL: https://citas.sat.gob.mx/citasat/agregarcita.aspx
"Yucatán -> Módulo Yucatán/ADSC Yucatán "1" -> e.firma de Personas Físicas"

It is requested to display the days available and not available and also grab a screenshot of the calendar displayed.

One basic test is present in this code:
1. Validate the number of days available is greater than 0.

This is a work expected to be improved implementing page objects and parameters configurable in a separate data file. Also, it is expected to add more test cases to the program

# Code style
JS Standard was used as coding style

# Tech/framework used
- Mocha
- Chai

# Installation
- `npm install`
- `npm install selenium webdriver`
- `npm install chromedriver`
- `npm install mocha`
- `npm install chai`
- `npm install @antiadmin/anticaptchaofficial`
- AntiCaptcha USER KEY to be added to test/sat.js file

# How to use?
- Add the Anticaptcha USER KEY to test/sat.js file
- `npm test`

# Credits
The amazing @antiadmin/anticaptchaofficial library that helped me to solve this anticaptcha problem

Luis Cardeña
