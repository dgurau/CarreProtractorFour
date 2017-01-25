var HomePage = function(){

};

//WebElements
var myAccount = element(by.id('login-dropdown-toggle'));
var usernameField = element(by.model('email'));
var passwordField = element(by.model('password'));
var loginButton = element(by.xpath("//*[@id='login']/div/button"));
var logoutButton = element(by.xpath("//*[@class = 'user-account-data']/span"));
var informativeMessage = element(by.xpath("//*[@class = 'message ng-binding']"));
var myAccName = element(by.xpath("//*[@id='login-dropdown-toggle']/span/span"));


//Clicks
HomePage.prototype.clickMyAcc = function(){
	myAccount.click();
};

HomePage.prototype.clickLogin = function(){
	loginButton.click();
}
HomePage.prototype.clickLogout = function(){
	logoutButton.click();
};

//Sets
HomePage.prototype.setEmail = function(email){
	usernameField.sendKeys(email);
};

HomePage.prototype.setPassword = function(password){
	passwordField.sendKeys(password);
};

//Gets
HomePage.prototype.getMyAccName = function(){
	return myAccName.getText();
};

HomePage.prototype.getInfoMessage = function(){
	return informativeMessage.getText();
};

//Clear input
HomePage.prototype.clearUsername = function(){
	return usernameField.clear();
};

HomePage.prototype.clearPassword = function(){
	return passwordField.clear();
};

//Others
HomePage.prototype.clearField = function(field){
	field.clear();
}

module.exports = new HomePage();