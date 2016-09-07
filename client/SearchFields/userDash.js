Template.userDash.created = function(){
    Meteor.subscribe(Session.get('barName'));
    var data = this.data; // return barId and name
};

Template.userDash.onRendered = function(){
    $('.reactive-table-input').focus();
};

Template.userDash.helpers({
    settings: function(){
        var collection = nameToCollection(Session.get('barName'));
        return {
            collection: collection.find({}),
            fields:['ID', 'Title', 'Artist'],
            showNavigation: 'always',
            rowsPerPage: 10,
            showFilter: true,
        };
    },
    songs: function(){
        var collection = nameToCollection(Session.get('barName'));
        return collection.find({});
    },
    nameOfBar: function(){
        return Session.get('barName');
    },
});

Template.userDash.events({
    'click .reactive-table tbody tr': function(event, template){
        var barName = Session.get('barName');
        var requestSong = {
            Artist: this.Artist,
            Title: this.Title,
            ID: this.ID,
            barName: barName,
            custName: Meteor.user().profile.userName,
            custId: Meteor.userId(),
            date: Date(Date.now()),
        };
        var collection = nameToCollection(barName);
        Meteor.call('addToPlaylist', requestSong, function(err, succ){
            if(err){
                console.log('here',err.reason);
            }
            Session.set('reqNum', succ);
            $('.reactive-table-input').trigger('keyup');
        });

        // adding 1 to request_count
        var find = collection.findOne({ID:requestSong.ID});
        if(find, {"request_counter" : { "$exists" : true}}){
            Meteor.call('counter', barName, requestSong);
        }else{
            Meteor.call('insertCounter', barName, requestSong);
        }

        // inform user request has been made
        var modal = Requests.findOne({},{sort:{date:-1}});
        $('.request').css({'display': 'block'});
        $('.msg').text("Your request to sing " + modal.Title + " by " + modal.Artist + " will be played shortly").css({'background': 'red'});
        $('.main').css({'display': 'none'});

    },
    'click .js-close': function(event, template){
        $('.request').css({'display': 'none'});
        $('.main').css({'display': 'inline'});
    }

});
