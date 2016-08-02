Template.searchField.created = function(){
    var data = this.data;
    data._selectorId = new ReactiveVar(data._selectorId);
};

Template.searchField.rendered = function(){

};

Template.searchField.helpers({
    settings: function(){
        var barId = Template.instance().data._selectorId.get();
        return {
            collection:Songs.find({barId: barId}),
            fields:['ID', 'Title', 'Artist'],
            showNavigation: 'always',
            rowsPerPage: 10

        };
    },
    bar: function(){
        var barId = Template.instance().data._selectorId.get();
        return Songs.find({barId: barId});
    }
});

Template.searchField.events({
    'click #reactive-table-1 tr': function(event, template){
        console.log('temp', template.data.barId);
        var selectedId = Number(event.currentTarget.children[0].textContent);
        console.log('hi', event);
        var request = Bar.findOne({ID: selectedId});
        if(!request.hasOwnProperty('Count')){
            var updateId = request._id;
            var count = 0;
            Meteor.call('updateSongs', updateId, count, function(err, succ){
                if(err){
                    console.log(err.reason);
                }
                console.log('succ', succ);
            });
        }

        var newCount = Number(request.Count + 1);
        Meteor.call('add2Count', request._id, newCount, function(err){
            if(err){
                console.log(err.reason);
            }
        });
        var requestSong = {
            Artist: request.Artist,
            Title: request.Title,
            ID: request.ID,
        };

        Meteor.call('addToPlaylist', requestSong, function(err,succ){
            if(err){
                console.log(err);
            }
            // -- to be called when notifications are installed
            // Meteor.call('notifyDj', requestSong, function(err){
            //     if(err){
            //         console.log(err);
            //     }
            // });
        });

    }

});