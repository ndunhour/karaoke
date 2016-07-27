Template.results.created = function(){
};

Template.results.rendered = function(){
};

Template.results.helpers({
    songs: function(){
        return Session.get('songs');
    }
});

Template.results.events({
    'click .js-doSomething': function(event, template){
        Router.go('/resultExp');
    }
});