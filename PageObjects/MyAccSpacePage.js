var MyAccSpacePage = function(){

};

var editFirstNameButton = element(by.xpath("//*[@id='my-profile']/div[7]/label/input"));

//Clicks
MyAccSpacePage.prototype.clickEditFirstName = function(){
    editFirstNameButton.click();
}

module.exports = new MyAccSpacePage();