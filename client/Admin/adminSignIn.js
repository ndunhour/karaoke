Template.adminSignIn.created = function(){

};

Template.adminSignIn.rendered = function(){

};

Template.adminSignIn.helpers({

});

Template.adminSignIn.events({
    'click .js-signIn': function(event, template){
        var emailVar = $('.signInEmail').val();
        var passwordVar = $('.signInPassword').val();

        var signIn = {
            email: emailVar,
            password: passwordVar,
        };

        Meteor.loginWithPassword(signIn.email, signIn.password, function(err, succ){
            if(err){
                errMsg(err);
            } else {
                Router.go('/adminDash/' + Meteor.userId());
            }
        });
    },
});