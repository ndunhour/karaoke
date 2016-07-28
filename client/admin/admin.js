Template.admin.created = function(){
    this._barName = new ReactiveVar("Establishment Name");
};

Template.admin.rendered = function(){
};

Template.admin.helpers({
    barName: function(){
        return Bar.find({});
    },
    listBars: function(){
        return Template.instance()._barName.get();
    }

});

Template.admin.events({
    'click .js-createBar': function(event, template){
        var bar = {
            name: $('.name').val(),
            songs: {
                song:[]
            }
        };
        template._barName.set($('.name').val());
        Meteor.call('newBar', bar, function(err){
            if(err){
                console.log(err.reason);
            }
        });
    },
    'click .listBars p': function(event, template){
        console.log('target', event.currentTarget.textContent);
        template._barName.set(event.currentTarget.textContent);
    },
    'click .js-newSong': function(event, template){
        var newSong = {
            title: $('.title').val(),
            artist: $('.artist').val(),
            songId: $('.songId').val(),
        };

        var barInfo = Bar.findOne({name:bar.name});
        var barId = barInfo._id;
        console.log(barId);

        Meteor.call('newSong', barId, newSong, function(err){
            if(err){
                console.log(err.reason);
            }
        });
        $('.name').val("");
        $('.title').val("");
        $('.artist').val("");
        $('.songId').val("");
    }

});