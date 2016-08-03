Template.searchField.created = function(){
    var data = this.data;
    data.barId = new ReactiveVar(data.barId);
    data._reqId = new ReactiveVar();
};

Template.searchField.rendered = function(){
};

Template.searchField.helpers({
    settings: function(){
        var barId = Template.instance().data.barId.get();
        return {
            collection:Songs.find({barId: barId}),
            fields:['ID', 'Title', 'Artist'],
            showNavigation: 'always',
            rowsPerPage: 10

        };
    },
    bar: function(){
        var barId = Template.instance().data.barId.get();
        return Songs.find({barId: barId});
    },
    request: function(){
        return Requests.find({_id:Session.get('request')});
    }
});

Template.searchField.events({
    'click #reactive-table-1 tr': function(event, template){
        var selectedId = event.currentTarget.children[0].textContent;
        var request = Songs.findOne({ID: selectedId});

        var requestSong = {
            Artist: request.Artist,
            Title: request.Title,
            ID: request.ID,
            barId: template.data.barId,
            barName: template.data.barName,
            customerName: template.data.customerName

        };

        Meteor.call('addToPlaylist', requestSong, function(err, succ){
            if(err){
                console.log(err);
            }
            Session.set('request', succ);
        });

    }

});