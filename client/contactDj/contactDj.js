Template.contactDj.created = function(){
    Meteor.subscribe('cust');

};

Template.contactDj.rendered = function(){

};

Template.contactDj.helpers({
    comments: function(){
        var user = Cust.findOne({fName: Session.get('cust')});
        Session.set('custId', user._id);
        Session.set('barName', user.barName);
        return user.comments;
    }


});

Template.contactDj.events({
    'click .js-comment': function(event, template){
        var date = new Date();
        var comment = {
            fName: Session.get('cust'),
            barName: Session.get('barName'),
            comment: $('.comment').val(),
            date: time(date)
        };
        Meteor.call('comment', Session.get('custId'), comment, function(err,succ){
            if(err){
                console.log(err.reason);
            }
        });
        $('.comment').val("");
    }
});