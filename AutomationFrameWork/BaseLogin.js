var BaseLogin = function(){

}

var homePage = require('../PageObjects/HomePage.js');
var commonTask = require('../AutomationFrameWork/CommonTask.js');

BaseLogin.prototype.loginAs = function(username,password){
    commonTask.getAdress();
    homePage.clickMyAcc();
    homePage.setEmail(username);
    homePage.setPassword(password);
    homePage.clickLogin();
};

module.exports = new BaseLogin();