Meteor.methods({
    // ---- SIGN IN ----
    'newBar': function(bar){
        return Bar.insert(bar);
    },
    'newSong': function(id, newSong){
        var update = Bar.update({_id:id}, {$push: {song:newSong}});
        console.log('update', Bar.find({}));
        return update;
    },






    'findSong': function(input){
        return Bar.find({});
    },
    'addToPlaylist': function(request){
        var req = {
            Title: request.Title,
            Artist: request.Artist,
            ID: request.ID
        };
        return Playlist.insert(req);
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
    },
    'updateSongs': function(updateId, count){
        console.log('metCount', count);
        return Bar.update({_id: updateId}, {$set: {"Count": count}});
    },
    'add2Count': function(id, newCount){
        console.log('a22c', Bar.find({_id:id}));
        console.log('a2c', newCount);
        return Bar.update({_id: id}, {$set: {'Count': newCount}});
    },

    // ---- BAR METHODS ---- //

});