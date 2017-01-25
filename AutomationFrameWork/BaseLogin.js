var BaseLogin = function(){

}

var homePage = require('../PageObjects/HomePage.js');

BaseLogin.prototype.loginAs = function(username,password){
    homePage.getAdress();
    homePage.clickMyAcc();
    homePage.setEmail(username);
    homePage.setPassword(password);
    homePage.clickLogin();
};

module.exports = new BaseLogin();