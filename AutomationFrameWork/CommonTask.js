var CommonTask = function(){

}

var myAccountPage = require('../PageObjects/MyAccountPage.js');

//URLs
CommonTask.prototype.getAdress = function() {
	browser.get('https://www.carrefour-online.ro/');
};

module.exports = new CommonTask();