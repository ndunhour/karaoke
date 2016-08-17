Template.search.created = function(){
    var data = this.data; // return barId and name
    console.log('search', data);
    data.barId = new ReactiveVar(data._selectorId);
    data._reqId = new ReactiveVar();
    data._custId = new ReactiveVar(data._id);
};

Template.search.rendered = function(){
};

Template.search.helpers({
    settings: function(){
        return {
            collection: Bar.find({barId:Template.instance().data.barId.get()}),
            fields:['ID', 'Title', 'Artist'],
            showNavigation: 'always',
            rowsPerPage: 10

        };
    },
    songs: function(){
        console.log('hi', Template.instance().data.barId.get());
        return Bar.find({barId:Template.instance().data.barId.get()});

    }
});

Template.search.events({
    'click #reactive-table-1 tr': function(event, template){
        var selectedId = event.currentTarget.children[0].textContent;
        console.log('selectedId', selectedId);
        var req = Songs.findOne({ $and: [ {ID: selectedId} , {barId:template.data.barId.get()}]});
        var requestSong = {
            Artist: req.Artist,
            Title: req.Title,
            ID: req.ID,
            barId: template.data.barId,
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