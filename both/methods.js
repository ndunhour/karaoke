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
});
