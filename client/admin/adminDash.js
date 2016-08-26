nameToCollection = function(barName) {
    var root = Meteor.isClient ? window : global;
    return root[barName];
};

Template.adminDash.created = function(){
    console.log('this', this.data.barName);
    Meteor.subscribe(this.data.barName);
};

Template.adminDash.rendered = function(){
};

Template.adminDash.helpers({
    playlist: function(){
    console.log('helper', Template.instance().data.barName);

        var collections = nameToCollection(Template.instance().data.barName);
        console.log('coll', collections);
        return collections.find();
    }

});

Template.adminDash.events({
    'click .logout': function(event){
        event.preventDefault();
        console.log('click');
        Meteor.logout();
    }
});