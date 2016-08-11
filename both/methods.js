Meteor.methods({
    // ---- SIGN IN ----
    'users': function(id){
        console.log("id", Meteor.users.find({_id: id}));
        return Meteor.users.find({_id: id});
    },
    'newBar': function(bar){
        return Bar.insert(bar);
    },
    'newSong': function(newSong){
        return Songs.insert(newSong);
    },
    'signIn': function(signIn){
        return Cust.insert(signIn);
    },
    'deleteSong': function(songId){
        return Requests.remove({_id: songId});
    },
    'addToPlaylist': function(requestSong){
        return Requests.insert(requestSong);
    },
    'addName': function(cust){
        return Meteor.users.update({_id:this.userId},{$set: {profile: cust}});
    }
});
