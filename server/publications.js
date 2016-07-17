
Meteor.publish('songs', function(){
    return Songs.find({});
});
if(Meteor.isServer){
    Meteor.publish('searchFor', function(){
        return Songs.find({$or: [{Title: {$eq: search}}, {Artist: {$eq: search}}]});
    });
}