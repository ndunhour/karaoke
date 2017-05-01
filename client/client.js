
Template.countries.rendered = function () {
  Meteor.call('getCountryList', function(err,result){
    console.log(result);
    Session.set('countryList', result);
  });
};

Template.countries.helpers({
  countryList: function () {
    console.log('hi');
    return Session.get('countryList');
  }
});