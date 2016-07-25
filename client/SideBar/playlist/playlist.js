Template.playlist.created = function(){
    Meteor.subscribe('playlist');
};

Template.playlist.rendered = function(){
};

Template.playlist.helpers({
    playlist: function(){
        return Playlist.find({}).fetch();
    },
    songDetail: function(){
        var songDetail = Session.get('songDetail');
        return Playlist.findOne({_id:songDetail});
    }
});

Template.playlist.events({
    'click .playlist li': function(event,template){
        var songId = event.currentTarget.className;
        var songDetail = Playlist.findOne({_id: songId});
        Session.set('songDetail', songId);
        $('.js-deleteSong').click(function(){
            Meteor.call('deleteSong', songId, function(err){
                if(err){
                    console.log(err.reason);
                }
            });
        });
    },

});