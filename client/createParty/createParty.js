Template.createParty.created = function(){
};

Template.createParty.rendered = function(){
};

Template.createParty.helpers({
    songs: function(){
        return Session.get('songs');
    }
});

Template.createParty.events({
    'click .js-createParty': function(event, template){
        Router.go('/index');
    }
});