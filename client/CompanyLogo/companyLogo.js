Template.companyLogo.created = function(){
};

Template.companyLogo.rendered = function(){
};

Template.companyLogo.helpers({

});

Template.companyLogo.events({
    'click .js-contactHelp': function(event, template){
        console.log("Message Sent to front desk");
    }
});