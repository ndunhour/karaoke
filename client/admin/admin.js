Template.admin.created = function(){
    console.log('this', this.data._id);
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
        };
        template._barName.set($('.name').val());
        Meteor.call('newBar', bar, function(err){
            if(err){
                console.log(err.reason);
            }
        });
    },
    'click .listBars p': function(event, template){
        template._barName.set(event.currentTarget.textContent);
    },
    'click .js-newSong': function(event, template){
        var barId = Bar.findOne({name: template._barName.get()})._id;
        console.log('temp', barId);
        var newSong = {
            Title: $('.title').val(),
            Artist: $('.artist').val(),
            ID: $('.songId').val(),
            barId: barId
        };
        console.log('barId', newSong);

        Meteor.call('newSong', newSong, function(err){
            if(err){
                console.log(err.reason);
            }
        });
        // Meteor.call('insertBar', id, newSong, function(err){
        //     if(err){
        //         console.log(err.reason);
        //     }
        // });
        $('.name').val("");
        $('.title').val("");
        $('.artist').val("");
        $('.songId').val("");
    }

});