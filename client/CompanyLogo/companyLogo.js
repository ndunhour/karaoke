Template.companyLogo.created = function(){
};

Template.companyLogo.rendered = function(){
};

Template.companyLogo.helpers({

});

Template.companyLogo.events({
    'click .js-contactHelp': function(event, template){
        alert('Your message has been sent');
    },
    'click .js-logOut': function(event, template){
        event.preventDefault();
        Router.go('/');
    }
});