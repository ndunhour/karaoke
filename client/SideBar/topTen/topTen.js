Template.topTen.created = function(){
};

Template.topTen.rendered = function(){
};

Template.topTen.helpers({
    'topTen': function(){
        return Songs.find({},{sort: {Count:-1}});
    }

});

Template.topTen.events({

});