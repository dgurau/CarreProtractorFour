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

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  onPrepare: function() {
       browser.driver.manage().window().maximize();
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  suites: {
      homepage: ['../Tests/LoginTest.js']
      //search: ['tests/e2e/contact_search/**/*Spec.js']
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
	showColors: true,
    defaultTimeoutInterval: 30000
  }
};
