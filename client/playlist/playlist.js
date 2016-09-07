Template.playlist.created = function(){
    Meteor.subscribe(Session.get('barName'));
};

Template.playlist.rendered = function(){
};

Template.playlist.helpers({
    'playlist': function(){
        return Requests.find();
    }
});

Template.playlist.events({

});