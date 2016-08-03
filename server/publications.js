Meteor.publish('bar', function(){
    return Bar.find({});
});

Meteor.publish('songs', function(){
    return Songs.find({});
});
Meteor.publish('cust', function(){
    return Cust.find({});
});
Meteor.publish('requests', function(){
    return Requests.find({});
});
