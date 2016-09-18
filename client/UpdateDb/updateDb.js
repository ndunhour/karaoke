Template.updateDb.created = function(){
    Meteor.subscribe(Session.get('barName'));
    Meteor.subscribe('updateList');
};

Template.updateDb.rendered = function(){
};

Template.updateDb.helpers({
    songList: function(){
        return UpdateList.find();
    }

});

Template.updateDb.events({
    'click input.js-newSong': function(event, template){
        var song = {
            ID: $('#ID').val(),
            Title: $('#Title').val(),
            Artist: $('#Artist').val()
        };
        Meteor.call('addSong', song, function(err){
            if(err){
                console.log(err.reason);
            }
        });

        $('#ID').val("");
        $('#Title').val("");
        $('#Artist').val("");
    },
    'click .js-editBtn': function(event,template){
        var row = $(this)[0];
        $('.editWindow').css({'display': 'block'});
        $('.updateMain').css({'display': 'none'});
        $('.editId').text(row.ID);
        $('.editTitle').text(row.Title);
        $('.editArtist').text(row.Artist);
        Session.set('thisID', row.ID);
        Session.set('thisTitle', row.Title);
        Session.set('thisArtist', row.Artist);
        Session.set('this_id', row._id);

    },
    'click .js-newBtn': function(event, template){
        var ID;
        var Title;
        var Artist;
        if($('.newID').val() === ""){
            ID = Session.get('thisID');
        }else(
            ID = $('.newID').val()
        );

        if($('.newTitle').val() === ""){
            Title = Session.get('thisTitle');
        }else(
            Title = $('.newTitle').val()
        );

        if($('.newArtist').val() === ""){
            Artist = Session.get('thisArtist');
        }else(
            Artist = $('.newArtist').val()
        );

        var editSong = {
            ID: ID,
            Title: Title,
            Artist: Artist,
        };
        Meteor.call('editNewSong', Session.get('this_id'), editSong, function(err){
            if(err){
                console.log(err.reason);
            }
            $('.editWindow').css({'display': 'none'});
            $('.updateMain').css({'display': 'block'});
        });
    },
    'click .js-close': function(event, template){
        $('.editWindow').css({'display': 'none'});
        $('.updateMain').css({'display': 'block'});
    },
    'click .js-submit': function(event, template){
        var updateList = [];
        var bar = Session.get('barName');
        for(var i=0; i<UpdateList.find().count(); i++){
            updateList.push(UpdateList.find().fetch()[i]);
        }

        Meteor.call('insertNewSongs', Session.get('barName'), updateList, function(err, succ){
            if(err){
                console.log(err.reason);
            }
            Meteor.call('removeList', function(err){
                if(err){
                    console.log(err.reason);
                }
            });
        });
    }
});