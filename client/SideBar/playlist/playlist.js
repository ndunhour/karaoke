Template.playlist.created = function(){
    Meteor.subscribe('requests');
};

Template.playlist.rendered = function(){
};

Template.playlist.helpers({
    playlist: function(){
        return Requests.find({barName: Template.instance().data.barName});
    },
    songDetail: function(){
        var songDetail = Session.get('songDetail');
        return Requests.findOne({_id:songDetail});
    },
});

Template.playlist.events({
    'click .playlist tr': function(event,template){
        var songId = event.currentTarget.className;
        var songDetail = Requests.findOne({_id: songId});
        Session.set('songDetail', songId);
        $('.js-deleteSong').click(function(){
            Meteor.call('deleteSong', songId, function(err){
                if(err){
                    console.log(err.reason);
                }
            });
        });
    },

});