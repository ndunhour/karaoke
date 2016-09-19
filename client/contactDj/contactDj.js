Template.contactDj.created = function(){
    Meteor.subscribe('messages');

};

Template.contactDj.rendered = function(){

};

Template.contactDj.helpers({
    messages: function() {
        var barName = Session.get('barName');
        return Messages.find({barName: barName}, {$sort: -1});
    },
    isAdmin: function(admin){
        return admin === true;
    }
});

Template.contactDj.events({
    'click input.js-msg': function(event) {
        var name;
        if (Meteor.user()){
            name = Meteor.user().profile.userName;
        }else{
            name = 'Anonymous';
        }
        var message = $('#message').val();
        var date = new Date();

        var messages = {
            message: message,
            userName: name,
            userId: Meteor.userId(),
            date: time(date),
            barName: Session.get('barName'),
            admin: Meteor.user().profile.admin
        };
        Meteor.call('messages', messages, function(err){
            if(err){
                console.log(err.reason);
            }
        });

        $('#message').val("");
    },
    'click li.msg':function(event, template){
        var id = event.currentTarget.id;
        Session.set('msgId', id);

        $('.confirmDeleteMsg').css('display', 'block');
        $('.contactDj').css('display', 'none');

    },
    'click .js-deleteMsg': function(event, template){
        var msg = Messages.findOne({_id:Session.get('msgId')});
        if(Meteor.user().profile.admin === true || Meteor.userId() === msg.userId){
            Meteor.call('deleteMsg', Session.get('msgId'), function(err){
                if(err){
                    console.log(err.reason);
                }
                $('.confirmDeleteMsg').css('display', 'none');
                $('.contactDj').css('display', 'block');
            });
        }else{
            $('.contactDj').css('display', 'block');
            $('.confirmDeleteMsg').css('display', 'none');
            $('.deleteError').text('You are only allowed to delete your song').fadeIn(400).delay(1800).fadeOut(500);
        }

    },
    'click .js-cancel': function(event, template){
        $('.confirmDeleteMsg').css('display', 'none');
        $('.contactDj').css('display', 'block');
    }

});
