Template.contactDj.created = function(){
    Meteor.subscribe('cust');
    Meteor.subscribe('messages');
};

Template.contactDj.rendered = function(){

};

Template.contactDj.helpers({

});

Template.contactDj.events({
    // 'click .js-comment': function(event, template){
    //     var date = new Date();
    //     var comment = {
    //         fName: Session.get('cust'),
    //         custId: Session.get('custId'),
    //         barName: Session.get('barName'),
    //         comment: $('.comment').val(),
    //         date: time(date)
    //     };
    //     Meteor.call('comment',comment, function(err,succ){
    //         if(err){
    //             console.log(err.reason);
    //         }
    //     });
    //     $('.comment').val("");
    // }
});

Template.messages.helpers({
    messages: function() {
        var barName = Session.get('barName');
        return Messages.find({barName: barName}, {$sort: -1});
    }
});

Template.input.events({
    'click input.js-msg': function(event) {
        var name;
        if (Meteor.user()){
            name = Meteor.user().profile.fName;
        }else{
            name = 'Anonymous';
        }
        var message = $('#message').val();
        var date = new Date();

        var messages = {
            message: message,
            fName: name,
            date: time(date),
            barName: Session.get('barName')
        };
        Meteor.call('messages', messages, function(err){
            if(err){
                console.log(err.reason);
            }
        });

        $('#message').val("");

    },
});