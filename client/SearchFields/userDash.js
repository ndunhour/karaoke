Template.userDash.created = function(){
    Meteor.subscribe(Session.get('barName'));
    var data = this.data; // return barId and name
    funtimes();
};

Template.userDash.onRendered = function(){

};

Template.userDash.helpers({
    settings: function(){
        var collection = nameToCollection(Session.get('barName'));
        return {
            collection: collection.find({}),
            fields:['ID', 'Title', 'Artist'],
            showNavigation: 'always',
            rowsPerPage: 30,
            showFilter: true,
        };
    },
    songs: function(){
        var collection = nameToCollection(Session.get('barName'));
        return collection.find({});
    },
    songList: function(){
        return Session.get('songList');
    },

});

Template.userDash.events({
    // testing js example
    'keyup .searchInput': function(event, template){
        Meteor.call('getCountryList', function(err, succ){

        });
    },

    'click .reactive-table tbody tr': function(event, template){
        event.preventDefault();

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
        $('.request').css({'display': 'block'});
        $('.msg').text("Your request to sing " + find.Title + " by " + find.Artist + " will be played shortly");
        $('.main').css({'display': 'none'});
    },
    'click .js-close': function(event, template){
        $('.request').css({'display': 'none'});
        $('.main').css({'display': 'inline'});
    },
    // 'click .test p': function(event, template){
    //     function funtimes(){
    //         // $(".test").text('omz');
    //         setTimeout(function(){
    //             $(".test").text('omz');
    //         },1500);
    //     }
    // }

});

// fetch data from file

