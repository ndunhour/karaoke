
Template.searchFields.created = function(){
};

Template.searchFields.rendered = function(){
};

Template.searchFields.helpers({
    songs: function(){
        return Session.get('songs');
    }
});

Template.searchFields.events({
    'click .js-searchBtn': function(event, template){

    }
});