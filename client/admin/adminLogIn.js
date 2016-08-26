Template.adminLogIn.created = function(){
};

Template.adminLogIn.rendered = function(){
};

Template.adminLogIn.helpers({

});

Template.adminLogIn.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
        console.log("Form submitted.");
    }
});