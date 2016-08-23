Meteor.methods({
    // ---- SIGN IN ----
    'newBar': function(bar){
        return Bar.insert(bar);
    },
    'insertSong': function(barName, newSong){
        var nameToCollection = function(barName) {
            var root = Meteor.isClient ? window : global;
            return root[barName];
        };

        var collection = nameToCollection(barName);

        return collection.insert(newSong);
    },
    'signIn': function(reg){
        return Cust.insert(reg);
    },
    'deleteSong': function(songId){
        return Requests.remove({_id: songId});
    },
    'addToPlaylist': function(requestSong){
        return Requests.insert(requestSong);
    },
    'insertJson': function(theFile){
        return HMC.insert(theFile);
    },
    'counter': function(requestSong){
        return HMC.update({ID: requestSong.ID}, {
            $inc: {request_count: 1},

        }, {upsert: true});
    },
    'insertCounter': function(requestSong){
        return HMC.update({ID: requestSong.ID},{$set: {
            request_count: 1}});
    }
});