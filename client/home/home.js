Template.home.created = function(){
};

Template.home.rendered = function(){

};

Template.home.helpers({
    songs: function(){
        return Session.get('songs');
    },
});

Template.home.events({

});
