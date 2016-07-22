Template.playlist.created = function(){
    Meteor.subscribe('playlist');
};

Template.playlist.rendered = function(){
};

Template.playlist.helpers({
    playlist: function(){
        console.log(Playlist.find({}));
        return Playlist.find({}).fetch();
    }
});

Template.playlist.events({

});