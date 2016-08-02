Meteor.publish('bar', function(){
    return Bar.find({});
});

Meteor.publish('songs', function(){
    return Songs.find({});
});

Meteor.publish('barSongbook', function(){
    return Bar.find({});
});