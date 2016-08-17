Meteor.publish('bar', function(){
    return Bar.find({});
});

Meteor.publish('songs', function(){
    return Songs.find({});
});

Meteor.publish('requests', function(){
    return Requests.find({});
});

Meteor.publish('cust', function(){
    return Cust.find({});
});

Meteor.publish('users', function(id){
    return Meteor.users.findOne({_id:id});
});
Meteor.publish('HMC', function(){
    return HMC.find({});
});
Meteor.publish('AB', function(){
    return AB.find({});
});
