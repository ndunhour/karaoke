Template.adminReg.created = function(){
};

Template.adminReg.rendered = function(){
};

Template.adminReg.helpers({

});

Template.adminReg.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.regEmail.value;
        var passwordVar = event.target.regPassword.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });
        console.log("Form submitted.");
    }
});