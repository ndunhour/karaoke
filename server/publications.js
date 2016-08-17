Meteor.publish('bar', function(){
    return Bar.find({});
});
Meteor.publish('requests', function(){
    return Requests.find({});
});
Meteor.publish('cust', function(){
    return Cust.find({});
});
Meteor.publish('HMC', function(){
    return HMC.find({});
});
Meteor.publish('AB', function(){
    return AB.find({});
});
