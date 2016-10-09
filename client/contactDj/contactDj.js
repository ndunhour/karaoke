Template.contactDj.created = function(){
    Meteor.subscribe('messages');
    // Meteor.subscribe('Usermessages');

};

Template.contactDj.rendered = function(){

};

Template.contactDj.helpers({
    messages: function() {
        var user = Messages.find({userId: Meteor.userId()});
        // return messages.messages;
        // var barName = Session.get('barName');
        // var user = Meteor.userId();
        // if(Meteor.user().profile.admin === false){
        //     return Messages.find({userId: user});
        // }else{
        //     return Meteor.find({barName: barName});
        // }
    },
    isAdmin: function(admin){
        console.log('admin', admin);
        if(Meteor.user().profile.admin === true){
            return admin === true;
        }else{
            return admin === false;
        }
    },
    showMsg: function(){
        return Messages.find({});
    },
    // adminMsg: function(){
    //     var barName = Session.get('barName');
    //     return Messages.find({barName: barName});
    // },
    // replyMsg: function(){
    //     console.log(Session.get('msgId'));
    //     return Messages.find({_id: Session.get('msgId')});
    // },
});

Template.contactDj.events({
    'click input.js-msg': function(event) {
        var name;
        if (Meteor.user()){
            name = Meteor.user().profile.userName;
        }else{
            name = 'Anonymous';
        }
        var msg = {
            fromMsg: $('#message').val(),
            from: Meteor.userId()
        };

        var date = new Date();

        var messages = {
            userName: name,
            userId: Meteor.userId(),
            date: time(date),
            barName: Session.get('barName'),
            admin: Meteor.user().profile.admin
        };
        console.log('msg', messages);


        // if message count for user = 0
        // create a new message
        // else insert message into array

        console.log('count', Messages.find({userId: Meteor.userId()}).count());
        if(Messages.find({userId: Meteor.userId()}).count() === 0){
            Meteor.call('messages', messages, function(err, succ){
                if(err){
                    console.log(err.reason);
                }
                var msgId = succ;
                console.log(msgId);
                Meteor.call('msg', msgId, msg, function(err){
                    if(err){
                        console.log(err.reason);
                    }
                });
            });

        }

        $('#message').val("");
    },
    'click li.msg':function(event, template){
        var id = event.currentTarget.id;
        Session.set('msgId', id);
        console.log('message set', id);
        console.log('user', Meteor.userId());
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
    },
    'click .reply': function(event, template){
        console.log('session', Session.get('msgId'));
    }

});
