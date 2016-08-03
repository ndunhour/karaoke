Meteor.methods({
    // ---- SIGN IN ----
    'newBar': function(bar){
        return Bar.insert(bar);
    },
    'newSong': function(newSong){
        var update = Songs.insert(newSong);
        return update;
    },
    'signIn': function(signIn){
        return Cust.insert(signIn);
    },
    // 'requestSong': function(signIn){
    //     console.log('barId', this.params._id);
    //     return Requests.insert({_id:this.params._id});
    // },
    'addToPlaylist': function(requestSong){
        return Requests.insert(requestSong);
    },


    // 'insertBar': function(song){
    //     var insertBar = Bar.insert({$push: {songs: song}});
    //     console.log('insertBar', insertBar);
    //     return insertBar;
    // }






    // 'findSong': function(input){
    //     return Bar.find({});
    // },
    // 'notifyDj': function(request){
    //     var notifyDj = {
    //         Artist: request.Artist,
    //         ID: request.ID,
    //         Title: request.Title,
    //         _id: request._id
    //     };
        // return Push.send({
        //     Artist: request.Artist,
        //     ID: request.ID,
        //     Title: request.Title,
            // Room: request.Room#
        // });
    // },
    // 'deleteSong': function(songId){
    //     return Playlist.remove({_id: songId});
    // },
    // 'updateSongs': function(updateId, count){
    //     console.log('metCount', count);
    //     return Bar.update({_id: updateId}, {$set: {"Count": count}});
    // },
    // 'add2Count': function(id, newCount){
    //     console.log('a22c', Bar.find({_id:id}));
    //     console.log('a2c', newCount);
    //     return Bar.update({_id: id}, {$set: {'Count': newCount}});
    // },

    // ---- BAR METHODS ---- //

});