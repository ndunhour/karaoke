nameToCollection = function(barName) {
    var root = Meteor.isClient ? window : global;
    return root[barName];
};


Template.playlist.created = function(){
    Session.set('barName', this.data.collection.name);
};

Template.playlist.rendered = function(){
};

Template.playlist.helpers({
    'playlist': function(){
        var bar = Session.get('barName');
        return Requests.find({barName: bar});
    }
});

Template.playlist.events({

});