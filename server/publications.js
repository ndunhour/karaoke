Meteor.publish('bar', function(){
    return Bar.find({});
});