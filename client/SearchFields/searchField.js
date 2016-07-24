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
        }
    }
});

Template.searchField.events({
    'click #reactive-table-1 tr': function(event, template){
        var request = {
            ID: event.currentTarget.children[0].textContent,
            Title: event.currentTarget.children[1].textContent,
            Artist: event.currentTarget.children[2].textContent
        }
        Meteor.call('addToPlaylist', request, function(err){
            if(err){
                console.log(err);
            }
        })
        var songId = request.ID;
        console.log(songId);
        console.log('songID', Songs.findOne({ID: 6826}));

    }

});