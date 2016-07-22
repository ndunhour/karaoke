Meteor.methods({
    'updateSong': function(updateSong, id){
        console.log('counterMethod', updateSong);
        var countInc = counter.count + 1;
        return Songs.update({_id:id},{$set:{

        }});

    },
    'findSong': function(input){
        return Songs.find({});
    }

});