Template.companyLogo.created = function(){
};

Template.companyLogo.rendered = function(){
};

Template.companyLogo.helpers({
    cust: function(){
        var cust = Cust.findOne({},{sort: {date:-1}});
        return Cust.findOne({},{sort: {date:-1}});
    },
    nameOfBar: function(){
        return Session.get('barName');
    },
    signIn: function(){
        if(window.location.pathname === "/"){
            return true;
        }else {
            return false;
        }
    },
    navBar: function(){
        if(window.location.pathname === "/"){
            return 'none';
        }else {
            return 'block';
        }
    },
    home: function(){
        if(Meteor.user().profile.admin === true){
            return "/adminDash/" + Meteor.userId();
        }else {
            return "/userDash/" + Meteor.userId();
        }
    },
    show: function(){
        if(Meteor.user().profile.admin === true){
            return "block";
        }else {
            return "none";
        }
    }

});

Template.companyLogo.events({
    'click .js-logOut': function(event, template){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    },
});