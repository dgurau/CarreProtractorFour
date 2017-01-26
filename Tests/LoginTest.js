
describe("Login Tests", function(){
	
	var myAccountPage = require('../PageObjects/MyAccountPage.js');
    var DataItems = require('../AutomationFrameWork/DataItems.js');
    var base = require('../AutomationFrameWork/BaseLogin.js');

	/*beforeEach(function(){
	    myAccountPage.getAdress();
	});*/

	it('Login Good credentials',function(){
		console.log("Login using Valid credentials...");

        base.loginAs(DataItems.validUsername,DataItems.validPassword);

		expect(myAccountPage.getMyAccName()).toEqual("Cojoace Cojoacele");
		expect(myAccountPage.getInfoMessage()).toContain(DataItems.welcomeMessage);
	});

	it('Log Out functionality',function(){
        console.log("User Logged in. Checking Log out function");

        myAccountPage.clickLogout();

        expect(myAccountPage.getMyAccName()).toEqual("Contul meu");
        expect(myAccountPage.getInfoMessage()).toContain(DataItems.logoutMessage);

        console.log("User Logged out.");
    });

	it('Wrong credentials',function(){

	    console.log("Login using invalid password...");
        base.loginAs(DataItems.validUsername,"dfdsafadsfsd");

        expect(myAccountPage.getInfoMessage()).toContain(DataItems.failureMessage);
	});

    it('Wrong credentials',function(){

        console.log("Login using invalid username...");
        base.loginAs("ddsafasd",DataItems.validPassword);

        expect(myAccountPage.getInfoMessage()).toContain(DataItems.failureMessage);
    });

    it('Wrong credentials',function(){

        console.log("Login using empty credentials...");
        base.loginAs("","");

        expect(myAccountPage.getInfoMessage()).toContain(DataItems.failureMessage);
    });

    it('Wrong credentials',function(){

        console.log("Login using empty password...");
        base.loginAs(DataItems.validUsername,"");

        expect(myAccountPage.getInfoMessage()).toContain(DataItems.failureMessage);
    });

    it('Wrong credentials',function(){

        console.log("Login using empty username...");
        base.loginAs("",DataItems.validPassword);

        expect(myAccountPage.getInfoMessage()).toContain(DataItems.failureMessage);
    });
	
});