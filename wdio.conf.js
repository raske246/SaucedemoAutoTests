import ChromeService from "wdio-chromedriver-service";

export const config = {
    runner: 'local',
    specs: [
        './project/webTests/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['headless', 'incognito']},
        acceptInsecureCerts: true,
        excludeDriverLogs: ['*']
    }],
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'https://saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'allure-report',
        // disableWebdriverStepsReporting: true,
        //disableWebdriverScreenshotsReporting: false
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
   
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
}
