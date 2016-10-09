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
Meteor.publish('users', function(){
    return Meteor.users.find({});
});
Meteor.publish('messages', function(){
    return Messages.find();
});
// Meteor.publish('UserMessages', function(){
//     console.log('thisPub', this._id);
//     return Messages.findOne();
// });
Meteor.publish('updateList', function(){
    return UpdateList.find();
});