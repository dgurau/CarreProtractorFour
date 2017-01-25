
describe("Login Tests", function(){
	
	var homePage = require('../PageObjects/HomePage.js');
    var DataItems = require('../AutomationFrameWork/DataItems.js');
    var base = require('../AutomationFrameWork/BaseLogin.js');

	/*beforeEach(function(){
	    homePage.getAdress();
	});*/

	it('Login Good credentials',function(){
		console.log("Login using Valid credentials...");

        base.loginAs(DataItems.validUsername,DataItems.validPassword);

		expect(homePage.getMyAccName()).toEqual("Cojoace Cojoacele");
		expect(homePage.getInfoMessage()).toContain(DataItems.welcomeMessage);
	});

	it('Log Out functionality',function(){
        console.log("User Logged in. Checking Log out function");

        homePage.clickLogout();

        expect(homePage.getMyAccName()).toEqual("Contul meu");
        expect(homePage.getInfoMessage()).toContain(DataItems.logoutMessage);

        console.log("User Logged out.");
    });

	it('Wrong credentials',function(){

	    console.log("Login using invalid password...");
        base.loginAs(DataItems.validUsername,"dfdsafadsfsd");

        expect(homePage.getInfoMessage()).toContain(DataItems.failureMessage);
	});

    it('Wrong credentials',function(){

        console.log("Login using invalid username...");
        base.loginAs("ddsafasd",DataItems.validPassword);

        expect(homePage.getInfoMessage()).toContain(DataItems.failureMessage);
    });

    it('Wrong credentials',function(){

        console.log("Login using empty credentials...");
        base.loginAs("","");

        expect(homePage.getInfoMessage()).toContain(DataItems.failureMessage);
    });

    it('Wrong credentials',function(){

        console.log("Login using empty password...");
        base.loginAs(DataItems.validUsername,"");

        expect(homePage.getInfoMessage()).toContain(DataItems.failureMessage);
    });

    it('Wrong credentials',function(){

        console.log("Login using empty username...");
        base.loginAs("",DataItems.validPassword);

        expect(homePage.getInfoMessage()).toContain(DataItems.failureMessage);
    });
	
});