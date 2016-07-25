Meteor.methods({
    'findSong': function(input){
        return Songs.find({});
    },
    'addToPlaylist': function(request){
        return Playlist.insert(request);
    },
    'notifyDj': function(request){
        var notifyDj = {
            Artist: request.Artist,
            ID: request.ID,
            Title: request.Title,
            _id: request._id
        };
        // return Push.send({
        //     Artist: request.Artist,
        //     ID: request.ID,
        //     Title: request.Title,
            // Room: request.Room#
        // });
    },
    'deleteSong': function(songId){
        return Playlist.remove({_id: songId});
    }

});