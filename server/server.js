
Meteor.methods({
  getCountryList:function () {
    var content = Assets.getText('test.json');
    var countries = JSON.parse(content);
    return countries;
 }
});