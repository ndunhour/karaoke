Template.resultExp.created = function(){
};

Template.resultExp.rendered = function(){
};

Template.resultExp.helpers({
    songs: function(){
        return Session.get('bar');
    }
});

Template.resultExp.events({
    'click .js-request': function(event, template){
        Router.go('/index');
    }

});