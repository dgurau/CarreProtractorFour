// An example configuration file.
exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [
        {
          'browserName' : 'chrome'

        },
        /*{
          'browserName' : 'firefox'
        }*/
    ],

    //How many Tests to run at once
    shardTestFiles: true,
    maxInstances: 2,

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    //set windows size
    onPrepare: function() {
       browser.driver.manage().window().maximize();
    },

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    //Select which suites to run

    specs:["../Tests/*Test.js"],

    suites: {
      login: ['../Tests/LoginTest.js'],
      myAccount: ['../Tests/MyAccountSpaceTest.js'],
      search: ['../Tests/SearchTest.js'],
      //search: ['tests/e2e/contact_search/**/*Spec.js']
    },

    allScriptsTimeout:50000,

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000
    }
};
