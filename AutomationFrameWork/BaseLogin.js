var BaseLogin = function(){

}

var homePage = require('../PageObjects/HomePage.js');

BaseLogin.protype.loginAs = function(username,password){
    homePage.getAdress();
    homePage.clickMyAcc();
    homePage.setEmail(username);
    homePage.setPassword(password);
};

module.exports = new BaseLogin();