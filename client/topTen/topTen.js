Template.topTen.created = function(){
    Meteor.subscribe(Session.get('barName'));
};

Template.topTen.rendered = function(){
};

Template.topTen.helpers({
    'topTen': function(){
        var collection = nameToCollection(Session.get('barName'));
        return collection.find({}, {sort: {request_count:-1}});
    }

});

Template.topTen.events({

});