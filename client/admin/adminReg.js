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
        var barName = event.target.barName.value;

        var admin = {
            email: emailVar,
            password: passwordVar,

        };

        Meteor.call('createAdmin', admin, function(err){
            if(err){
                console.log(err.reason);
            } else {
                Meteor.loginWithPassword(admin.email, admin.password, function(err){
                    if(err){
                        console.log(err.reason);
                    } else {
                        Meteor.call('updateAdmin', barName, function(err){
                            if(err){
                                console.log(err.reason);
                            }
                            Router.go('/adminDash/' + Meteor.userId());
                        });
                    }
                });
            }

        });
        console.log("Form submitted.");
    }
});