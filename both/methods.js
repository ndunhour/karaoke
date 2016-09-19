Meteor.methods({
    // ---- SIGN IN ----
    'register': function(reg){
        return Accounts.createUser(reg);
    },
    'updateUser': function(profile){
        return Meteor.users.update({_id:this.userId},{$set: {profile: profile}});
    },
    'verifyUser': function(email){
        if(Meteor.isServer){
            var user = Accounts.findUserByEmail(email);
            return user;
        }
    },
    'deleteSong': function(songId){
        return Requests.remove({_id: songId});
    },
    'addToPlaylist': function(requestSong){
        return Requests.insert(requestSong);
    },
    'counter': function(barName, requestSong){
        var nameToCollection = function(barName) {
        var root = Meteor.isClient ? window : global;
            return root[barName];
        };
        var collection = nameToCollection(barName);
        return collection.update({ID: requestSong.ID}, {
            $inc: {request_count: 1},

        }, {upsert: true});
    },
    'insertCounter': function(barName, requestSong){
        var nameToCollection = function(barName) {
        var root = Meteor.isClient ? window : global;
            return root[barName];
        };

        var collection = nameToCollection(barName);
        return collection.update({ID: requestSong.ID},{$set: {
            request_count: 1}});
    },
    'messages': function(message){
        return Messages.insert(message);
    },
    'response': function(id, response){
        return Comments.update({_id:id}, {$push: {response: response}});
    },

    // admin stuff
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
    'addSong': function(song){
        return UpdateList.insert(song);
    },
    'editNewSong': function(id, editSong){
        return UpdateList.update({_id:id}, {$set:{
            ID: editSong.ID,
            Title: editSong.Title,
            Artist: editSong.Artist
        }});
    },
    'removeList': function(){
        return UpdateList.remove({});
    }
});