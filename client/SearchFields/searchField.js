Template.searchField.created = function(){
};

Template.searchField.rendered = function(){
};

Template.searchField.helpers({
    settings: function(){
        return {
            collection:Bar.find({}),
            fields:['ID', 'Title', 'Artist'],
            showNavigation: 'always',
            rowsPerPage: 10
        };
    }
});

Template.searchField.events({
    'click #reactive-table-1 tr': function(event, template){
        var selectedId = Number(event.currentTarget.children[0].textContent);
        var request = Bar.findOne({ID: selectedId});
        if(!request.hasOwnProperty('Count')){
            var updateId = request._id;
            var count = 0;
            Meteor.call('updateSongs', updateId, count, function(err, succ){
                if(err){
                    console.log(err.reason);
                }
                console.log('succ', succ);
            });
        }

        console.log('sf', Bar.find({_id: request._id}));
        var newCount = Number(request.Count + 1);
        Meteor.call('add2Count', request._id, newCount, function(err){
            if(err){
                console.log(err.reason);
            }
        });
        var requestSong = {
            Artist: request.Artist,
            Title: request.Title,
            ID: request.ID,
        };

        Meteor.call('addToPlaylist', requestSong, function(err,succ){
            if(err){
                console.log(err);
            }
            // -- to be called when notifications are installed
            // Meteor.call('notifyDj', requestSong, function(err){
            //     if(err){
            //         console.log(err);
            //     }
            // });
        });

    }

});