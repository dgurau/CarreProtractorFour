var HomePage = function(){
    
};

var searchField = element(by.id("search-input"))
var searchButton = $(".search-button");

//Clicks
HomePage.prototype.clickSearchButton = function (){
    searchField.click();
};

//Sets
HomePage.prototype.setSearchField = function (item){
    searchField.sendKeys(item);
};

//gets


//Clears


module.exports = new HomePage();