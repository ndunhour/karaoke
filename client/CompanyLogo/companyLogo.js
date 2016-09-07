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
        return "/userDash/" + Meteor.userId();
    }

});

Template.companyLogo.events({
    'click .js-logOut': function(event, template){
        event.preventDefault();
        Router.go('/');
    },
});