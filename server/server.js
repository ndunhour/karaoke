
Meteor.methods({
  getCountryList:function () {
    var content = Assets.getText('karokeList.json');
    var countries = JSON.parse(content);
    return countries;
 }
});