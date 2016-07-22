
Meteor.publish('songs', function(){
    return Songs.find({});
});
// Meteor.publish('sort', function(){
//     return Songs.find({},{sort: {Artist: 1}});
// });