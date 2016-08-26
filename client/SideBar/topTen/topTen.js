nameToCollection = function(barName) {
    var root = Meteor.isClient ? window : global;
    return root[barName];
};


Template.topTen.created = function(){
    this.barName = ReactiveVar();
    this.barName.set(this.data.collection.name);
};

Template.topTen.rendered = function(){
};

Template.topTen.helpers({
    'topTen': function(){
        var collection = nameToCollection(Template.instance().barName.get());
        return collection.find({}, {sort: {request_count:-1}});

    }

});

Template.topTen.events({

});