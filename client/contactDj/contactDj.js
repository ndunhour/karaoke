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
    }
});
