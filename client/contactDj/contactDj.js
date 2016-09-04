Template.contactDj.created = function(){
    Meteor.subscribe('cust');
    Meteor.subscribe('messages');

};

Template.contactDj.rendered = function(){

};

Template.contactDj.helpers({
    comments: function(){
        var user = Cust.findOne({fName: Session.get('cust')});
        return user.comments;
    }


});

Template.contactDj.events({
    'click .js-comment': function(event, template){
        var date = new Date();
        var comment = {
            fName: Session.get('cust'),
            custId: Session.get('custId'),
            barName: Session.get('barName'),
            comment: $('.comment').val(),
            date: time(date)
        };
        Meteor.call('comment',comment, function(err,succ){
            if(err){
                console.log(err.reason);
            }
        });
        $('.comment').val("");
    }
});

Template.messages.helpers({
    messages: function() {
        return Messages.find({}, { sort: { date: -1}});
    }
});

Template.input.events({
    'click input.js-msg': function(event) {
        var name;
        if (Meteor.user()){
            name = Meteor.user().profile.adminFName;
        }else{
            name = 'Anonymous';
        }
        var message = $('#message').val();
        var date = new Date();

        var messages = {
            message: message,
            name: name,
            date: time(date)
        };
        Meteor.call('messages', messages, function(err){
            if(err){
                console.log(err.reason);
            }
        });

        $('#message').val("");

    },
});