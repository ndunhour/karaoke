Template.topTen.created = function(){
};

Template.topTen.rendered = function(){
};

Template.topTen.helpers({
    'topTen': function(){
        return Bar.find({},{sort: {Count:-1}});
    }

});

Template.topTen.events({

});