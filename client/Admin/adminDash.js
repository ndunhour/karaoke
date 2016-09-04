Template.adminDash.created = function(){
};

Template.adminDash.rendered = function(){
};

Template.adminDash.helpers({
});

Template.adminDash.events({
    'click .js-logOut': function(event){
        Meteor.logout();
        Router.go('/adminSignIn');
    }
});