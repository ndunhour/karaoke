Meteor.publish('bar', function(){
    return Bar.find({});
});
Meteor.publish('requests', function(){
    return Requests.find({});
});
Meteor.publish('HMC', function(){
    return HMC.find({});
});
Meteor.publish('AB', function(){
    return AB.find({});
});
Meteor.publish('users', function(id){
    return Meteor.users.find({_id: id});
});
Meteor.publish('admin', function(id){
    return Meteor.users.find({_id: id});
});
Meteor.publish('messages', function(){
    return Messages.find();
});