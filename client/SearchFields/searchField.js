Template.searchField.created = function(){
    var data = this.data; // return barId and name
    console.log('search', data);
    data.barId = new ReactiveVar(data.barId);
    data._reqId = new ReactiveVar();
    data._custId = new ReactiveVar(data._id);
};

Template.searchField.rendered = function(){
};

Template.searchField.helpers({
    settings: function(){
        console.log('settings', Template.instance().data.barName);
        return {
            collection: Songs.find({barName: Template.instance().data.barName}),
            fields:['ID', 'Title', 'Artist'],
            showNavigation: 'always',
            rowsPerPage: 10

        };
    }
});

Template.searchField.events({
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