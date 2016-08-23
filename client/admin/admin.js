Template.admin.created = function(){
    this._barName = new ReactiveVar("Establishment Name");
    this._img = new ReactiveVar();
};

Template.admin.rendered = function(){
};

Template.admin.helpers({
    bars: function(){
        return Bar.find({});
    },
    listBars: function(){
        return Template.instance()._barName.get();
    },
    img: function(){
        return Template.instance()._img.get();
    }

});

Template.admin.events({
    'click .js-createBar': function(event, template){
        var bar = {
            barName: $('.barName').val()
        };
        template._barName.set($('.barName').val());
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
        var barId = Bar.findOne({barName: template._barName.get()})._id;
        var newSong = {
            Title: $('.title').val(),
            Artist: $('.artist').val(),
            ID: $('.songId').val(),
            barId: barId,
            barName: template._barName.get()
        };
        Meteor.call('insertSong', newSong.barName, newSong, function(err){
            if(err){
                console.log(err.reason);
            }
        });
        $('.barName').val("");
        $('.title').val("");
        $('.artist').val("");
        $('.songId').val("");
    },


});