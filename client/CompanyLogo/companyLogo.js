Template.companyLogo.created = function(){
};

Template.companyLogo.rendered = function(){
};

Template.companyLogo.helpers({
    cust: function(){
        var cust = Cust.findOne({},{sort: {date:-1}});
        return Cust.findOne({},{sort: {date:-1}});
    }

});

Template.companyLogo.events({
    'click .js-contactHelp': function(event, template){
        // Router.go('/contactDj');
    },
    'click .js-logOut': function(event, template){
        event.preventDefault();
        Router.go('/');
    }
});