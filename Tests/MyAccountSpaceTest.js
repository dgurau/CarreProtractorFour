describe("My Space",function(){

    var myAccountPage = require('../PageObjects/MyAccountPage.js');
    var DataItems = require('../AutomationFrameWork/DataItems.js');
    var base = require('../AutomationFrameWork/BaseLogin.js');
    var mySpacePage = require('../PageObjects/MyAccSpacePage.js');

    it("Editing Account Info",function(){

        base.loginAs(DataItems.validUsername,DataItems.validPassword);
        myAccountPage.clickMySpace();

        mySpacePage.clickEditFirstName();
        
    

    });
});