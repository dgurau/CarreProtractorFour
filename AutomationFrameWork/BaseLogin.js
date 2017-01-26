var BaseLogin = function(){

}

var myAccountPage = require('../PageObjects/MyAccountPage.js');
var commonTask = require('../AutomationFrameWork/CommonTask.js');

BaseLogin.prototype.loginAs = function(username,password){
    commonTask.getAdress();
    myAccountPage.clickMyAcc();
    myAccountPage.setEmail(username);
    myAccountPage.setPassword(password);
    myAccountPage.clickLogin();
};

module.exports = new BaseLogin();