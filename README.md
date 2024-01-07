SauceDemo automated tests using javascript and webdriverIO

# Requirements

# Installation of dependencies
npm install wdio . --y

# Run tests
npx wdio wdio.conf.js  - run all tests

# Run a specific test
npx wdio wdio.conf.js --spec ./project/webTests/login.js 

# Reporting
allure generate allure-report --clean -clean old reports
allure generate allure-report -generate the report
alure serve allure-report -open the server with report

# Start selenium-standalone-grid
selenium-standalone start -- -role hub
