#Requirements

#Installation of dependencies
npm install wdio . --y

#Run tests
npx wdio wdio.conf.js  - run all tests
npx wdio wdio.conf.js --spec ./project/webTests/login.js - run a specific test

#Reporting
allure generate allure-report --clean -clean old reports
allure generate allure-report -generate the report
alure serve allure-report -open the server with report

#Start selenium-standalone-grid
selenium-standalone start -- -role hub
