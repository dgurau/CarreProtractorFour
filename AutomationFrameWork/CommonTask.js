var CommonTask = function(){

}

var homePage = require('../PageObjects/HomePage.js');

//URLs
CommonTask.prototype.getAdress = function() {
	browser.get('https://www.carrefour-online.ro/');
};

module.exports = new CommonTask();