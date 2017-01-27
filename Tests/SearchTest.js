describe("",function(){

    var myAccountPage = require('../PageObjects/MyAccountPage.js');
    var DataItems = require('../AutomationFrameWork/DataItems.js');
    var base = require('../AutomationFrameWork/BaseLogin.js');
    var homePage = require('../PageObjects/HomePage.js');
    

    it("Basic Search functionality",function(){
        base.loginAs(DataItems.validUsername,DataItems.validPassword);
        homePage.setSearchField("mici");
        homePage.clickSearchButton();
    });
});