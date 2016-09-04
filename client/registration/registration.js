Template.registration.created = function(){
};

Template.registration.rendered = function(){
    // $('.registration').validate();
    // $('.registration').validate({
    //     rules: {
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //         password: {
    //             required: true,
    //             minlength: 6
    //         }
    //     },
    //     messages: {
    //         email: {
    //             required: "You must enter an email address.",
    //             email: "You've entered an invalid email address."
    //         },
    //         password: {
    //             required: "You must enter a password.",
    //             minlength: "Your password must be at least {0} characters."
    //         }
    //     }
    // });
    // var validator = $('.registration').validate({
    //     submitHandler: function(event){
    //         var emailVar = event.target.regEmail.value;
    //         var passwordVar = event.target.regPassword.value;
    //         var barName = event.target.barName.value;

    //         var admin = false;
    //         var currentLocation = window.location;
    //         if(currentLocation.pathname === "/adminReg"){
    //             admin = true;
    //         }
    //         var reg = {
    //             email: emailVar,
    //             password: passwordVar,
    //         };
    //         var profile = {
    //             barName: barName,
    //             userName: event.target.userName.value,
    //             fName: event.target.fName.value,
    //             lName: event.target.lName.value,
    //             admin: admin
    //         };

    //         Meteor.call('register', reg, function(err){
    //             if(err){
    //                 if(error.reason == "User not found"){
    //                     validator.showErrors({
    //                         email: error.reason
    //                     });
    //                 }
    //                 if(error.reason == "Incorrect password"){
    //                     validator.showErrors({
    //                         password: error.reason
    //                     });
    //                 }
    //                 if(error.reason == "Email already exists."){
    //                     validator.showErrors({
    //                         email: "That email already belongs to a registered user."
    //                     });
    //                 }
    //             } else {
    //                 Meteor.loginWithPassword(reg.email, reg.password, function(err){
    //                     if(err){
    //                         console.log(err.reason);
    //                     } else {
    //                         Meteor.call('updateUser', profile, function(err){
    //                             if(err){
    //                                 console.log(err.reason);
    //                             }
    //                             if(admin === true){
    //                                 console.log('admin');
    //                             } else{
    //                                 console.log('user');
    //                             }
    //                         });
    //                     }
    //                 });
    //             }

    //         });

    //     }
    // });
};

Template.registration.helpers({

});

Template.registration.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.regEmail.value;
        var passwordVar = event.target.regPassword.value;
        var barName = event.target.barName.value;

        var admin = false;
        var currentLocation = window.location;
        if(currentLocation.pathname === "/adminReg"){
            admin = true;
        }
        var reg = {
            email: emailVar,
            password: passwordVar,
        };
        var profile = {
            barName: barName,
            userName: event.target.userName.value,
            fName: event.target.fName.value,
            lName: event.target.lName.value,
            admin: admin
        };

        Meteor.call('register', reg, function(err){
            if(err){
                errMsg(err);
            } else {
                Meteor.loginWithPassword(reg.email, reg.password, function(err){
                    if(err){
                        errMsg(err);
                    } else {
                        Meteor.call('updateUser', profile, function(err){
                            if(err){
                                errMsg(err);
                            }
                            if(admin === true){
                                console.log('admin');
                            } else{
                                console.log('user');
                            }
                        });
                    }
                });
            }

        });
    }
});