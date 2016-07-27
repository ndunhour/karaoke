Meteor.methods({
    'findSong': function(input){
        return Songs.find({});
    },
    'addToPlaylist': function(request){
        return Playlist.insert(request);
    },

});