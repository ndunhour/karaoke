Template.updateDb.created = function(){
    Meteor.subscribe(Session.get('barName'));
};

Template.updateDb.rendered = function(){
};

var songList = [];

Template.updateDb.helpers({
    songList: function(){
        return Session.get('songList');
    }

});

Template.updateDb.events({
    'click input.js-newSong': function(event, template){
        var song = {
            ID: $('#ID').val(),
            Title: $('#Title').val(),
            Artist: $('#Artist').val()
        };
        songList.push(song);
        Session.set('songList', songList);

        $('#ID').val("");
        $('#Title').val("");
        $('#Artist').val("");
    },
});