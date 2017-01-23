
describe("Login Tests", function(){
	
	var homePage = require('../PageObjects/HomePage.js');
    var dataItems = require('../AutomationFrameWork/DataItems.js');
    var base = require('../AutomationFrameWork/BaseLogin.js');
	
	it('Good credentials',function(){
		
		console.log("Login using Valid credentials...");

        base.loginAs(dataItems.validUsernname,dataItems.validPassword);

//		homePage.clickMyAcc();
//		homePage.setEmail('cojoacesuport@gmail.com');
//		homePage.setPassword('password');
//		homePage.clickLogin();

		expect(homePage.getMyAccName()).toContain("Cojoace Cojoacele");
		expect(homePage.getInfoMessage()).toContain("Bine ai venit!");

		console.log("User Logged in. Checking Log out function");

		homePage.clickLogout();

		expect(homePage.getMyAccName()).toContain("Contul meu");
		expect(homePage.getInfoMessage()).toContain("Ai iesit din cont");
		
		console.log("User Logged out.");

		//browser.pause();
	});

	it('Wrong credentials',function(){
		
		console.log("Login using invalid password...");

		homePage.clickMyAcc();

		homePage.setEmail('cojoacesuport@gmail.com');
		homePage.setPassword('wrongpassword');
		homePage.clickLogin();

		expect(homePage.getInfoMessage()).toContain("Ceva nu a fost introdus bine... mai incearca o data");
		
		console.log("Login using invalid username...");
		
		homePage.clearUsername();
		homePage.clearPassword();
		homePage.setEmail('something@sadasd.com');
		homePage.setPassword('password');
		homePage.clickLogin();

		expect(homePage.getInfoMessage()).toContain("Ceva nu a fost introdus bine... mai incearca o data");

		console.log("Login using empty credentials...");
		
		homePage.clearUsername();
		homePage.clearPassword();
		homePage.setEmail('');
		homePage.setPassword('');
		homePage.clickLogin();

		expect(homePage.getInfoMessage()).toContain("Ceva nu a fost introdus bine... mai incearca o data");
		
		console.log("Login using empty password...");
		
		homePage.clearUsername();
		homePage.clearPassword();
		homePage.setEmail('cojoacesuport@gmail.com');
		homePage.setPassword('');
		homePage.clickLogin();

		expect(homePage.getInfoMessage()).toContain("Ceva nu a fost introdus bine... mai incearca o data");
		
		console.log("Login using empty username...");

		homePage.clearUsername();
		homePage.clearPassword();
		homePage.setEmail('');
		homePage.setPassword('password');
		homePage.clickLogin();

		expect(homePage.getInfoMessage()).toContain("Ceva nu a fost introdus bine... mai incearca o data");
	});
	
});