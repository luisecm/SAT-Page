# SAT Page Simple Availability Dates Check
This is a small piece of code for an automation testing challenge requesting to validate if there are any dates available for the following request:

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
- `npx eslint --init` (optional)
- user credentials and URL for Todoist need to be configured on an .env file, an .env.example file has been provided to use as a template, copy it and remove the .example extension to begin using it with your credentials and the Todoist URL

# Tests
A few testing scripts are included in the package.json for right away use, you can also create a local testCafe config file and just call the "npm test" script to use it instead, please refer to the testcafe documentation for instructions on how to create a local config file

- Defaults to local config file: `npm run test`
- Test with Edge Browser: `npm run test:edge`
- Test with Chrome Browser: `npm run test:chrome`
- Test with Headless Edge Browser: `npm run test:edge:headless`
- Test with Headless Chrome Browser: `npm run test:chrome:headless`

# How to use?
- Copy the .env.example, fill it with the Todoist URL and your credentials (a valid account is needed), all information provided in the .env.example should be filled as dotenv-safe was used as a dependency, if all the information is not provided an execution error will be displayed.
- Choose and run any of the test scripts
- (Optional) Modify the task descriptions and number of tasks for the multiple tasks scenario

# Credits
Guillermo Pasos for giving the instructions for this exercise :+1:

Jorge Carrillo



# SATPage2
SATPageTest
Este repositorio está diseñado para poder consultar los días con disponibilidad de cita en el sitio del SAT para Yucatan, modulo Yucatán/ADSC Yucatán "1", para el trámite e.firma de Personas Físicas.

El archivo principal es sat.js
Se utiliza Node.js, Selenium Webdriver, Mocha y Chai
