Template.adminDash.created = function(){
};

Template.adminDash.rendered = function(){
};

Template.adminDash.helpers({

});

Template.adminDash.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});