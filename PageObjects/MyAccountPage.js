var MyAccountPage = function(){

};

//WebElements
var myAccount = element(by.id('login-dropdown-toggle'));
var usernameField = element(by.model('email'));
var passwordField = element(by.model('password'));
var loginButton = element(by.xpath("//*[@id='login']/div/button"));
var logoutButton = element(by.xpath("//*[@class = 'user-account-data']/span"));
var informativeMessage = element(by.xpath("//*[@class = 'message ng-binding']"));
var myAccName = element(by.xpath("//*[@id='login-dropdown-toggle']/span/span"));
var mySpace = element(by.cssContainingText(".user-account-data","spatiul meu"));



//Clicks
MyAccountPage.prototype.clickMyAcc = function(){
	myAccount.click();
};

MyAccountPage.prototype.clickLogin = function(){
	loginButton.click();
}

MyAccountPage.prototype.clickLogout = function(){
	logoutButton.click();
};

MyAccountPage.prototype.clickMySpace = function(){
	mySpace.click();
};

//Sets
MyAccountPage.prototype.setEmail = function(email){
	usernameField.sendKeys(email);
};

MyAccountPage.prototype.setPassword = function(password){
	passwordField.sendKeys(password);
};

//Gets
MyAccountPage.prototype.getMyAccName = function(){
	return myAccName.getText();
};

MyAccountPage.prototype.getInfoMessage = function(){
	return informativeMessage.getText();
};

//Clear input
MyAccountPage.prototype.clearUsername = function(){
	return usernameField.clear();
};

MyAccountPage.prototype.clearPassword = function(){
	return passwordField.clear();
};

//Others
MyAccountPage.prototype.clearField = function(field){
	field.clear();
}

module.exports = new MyAccountPage();