nameToCollection = function(barName) {
    var root = Meteor.isClient ? window : global;
    return root[barName];
};


Template.search.created = function(){
    var data = this.data; // return barId and name
    console.log('data', data.collection.name);
    data.barName = new ReactiveVar(data.collection.name);
};

Template.search.rendered = function(){
};

Template.search.helpers({
    settings: function(){
        var collection = nameToCollection(Template.instance().data.barName.get());
        return {
            collection: collection.find({}),
            fields:['ID', 'Title', 'Artist'],
            showNavigation: 'always',
            rowsPerPage: 10

        };
    },
    songs: function(){
        var collection = nameToCollection(Template.instance().data.barName.get());
        return collection.find({});
    }
});

Template.search.events({
    'click #reactive-table-1 tr': function(event, template){
        var collection = nameToCollection(Template.instance().data.barName.get());

        var selectedId = event.currentTarget.children[0].textContent;
        console.log('selectedId', selectedId);
        var req = collection.findOne({ $and: [ {ID: selectedId} , {barName:template.data.barName.get()}]});
        var requestSong = {
            Artist: req.Artist,
            Title: req.Title,
            ID: req.ID,
            barName: template.data.barName,
            customerName: template.data.customerName,
            date: Date(Date.now())

        };
        console.log('reqSong', requestSong);

        Meteor.call('addToPlaylist', requestSong, function(err, succ){
            if(err){
                console.log(err);
            }
        });
        var modal = Requests.findOne({},{sort:{date:-1}});

        $('.request').text("Your request to sing " + modal.Title + " by " + modal.Artist + " will be played shortly");
    }

});