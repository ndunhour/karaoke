Template.playlist.created = function(){
    Meteor.subscribe('playlist');
};

Template.playlist.rendered = function(){
};

Template.playlist.helpers({
    playlist: function(){
        return Playlist.find({}).fetch();
    }
});

Template.playlist.events({

});