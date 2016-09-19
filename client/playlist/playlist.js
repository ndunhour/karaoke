Template.playlist.created = function(){
    Meteor.subscribe(Session.get('barName'));
};

Template.playlist.rendered = function(){
};

Template.playlist.helpers({
    'playlist': function(){
        return Requests.find();
    }
});

Template.playlist.events({
    'click .js-confirm': function(event, template){
        event.preventDefault();
        var findCustId = Requests.findOne({_id: event.currentTarget.id});
        Session.set('songId', event.currentTarget.id);
        Session.set('custId', findCustId.custId);
        $('.confirm').css('display', 'block');
        $('.playlist').css('display', 'none');
    },
    'click .js-cancel': function(event, template){
        event.preventDefault();
        $('.confirm').css('display', 'none');
        $('.playlist').css('display', 'block');
    },
    'click .js-deleteSong': function(event, template){
        event.preventDefault();
        if(Meteor.userId() === Session.get('custId') || Meteor.user().profile.admin === true){
            Meteor.call('deleteSong', Session.get('songId'), function(err){
                if(err){
                    console.log(err.reason);
                }
                $('.confirm').css('display', 'none');
                $('.playlist').css('display', 'block');
            });
        }else{
            $('.playlist').css('display', 'block');
            $('.confirm').css('display', 'none');
            $('.deleteError').text('You are only allowed to delete your song').fadeIn(400).delay(1800).fadeOut(500);
        }
    },
});