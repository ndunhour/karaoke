
Meteor.publish('songs', function(){
    return Songs.find({});
});
Meteor.publish('playlist', function(){
    return Playlist.find({});
});
Meteor.publish('barName', function(){
    return BarName.find({});
});
// Meteor.publish('sort', function(){
//     return Songs.find({},{sort: {Artist: 1}});
// });