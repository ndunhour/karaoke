Template.searchField.created = function(){
};

Template.searchField.rendered = function(){
};

Template.searchField.helpers({
    settings: function(){
        return {
            collection:Songs.find({}),
            fields:['ID', 'Title', 'Artist'],
            showNavigation: 'always',
            rowsPerPage: 10
        };
    }
});

Template.searchField.events({
    'click #reactive-table-1 tr': function(event, template){
        var selectedId = Number(event.currentTarget.children[0].textContent);
        var request = Songs.findOne({ID: selectedId});
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