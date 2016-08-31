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
        Meteor.loginWithPassword(emailVar, passwordVar, function(err){
            if(err){
                console.log(err.reason);

                Router.go('/admin');
            }
                Router.go('/adminDash/' + Meteor.userId());
        });
        console.log("Form submitted.");
    }
});