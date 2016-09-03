Template.registration.created = function(){
};

Template.registration.rendered = function(){
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
        var userId = {
            email: emailVar,
            password: passwordVar,
        };
        console.log('userId', userId);
        var profile = {
            barName: barName,
            userName: event.target.userName.value,
            fName: event.target.fName.value,
            lName: event.target.lName.value,
            admin: admin
        };

        console.log('profile', profile);
        // Meteor.call('createAdmin', user, function(err){
        //     if(err){
        //         console.log(err.reason);
        //     } else {
        //         Meteor.loginWithPassword(user.email, user.password, function(err){
        //             if(err){
        //                 console.log(err.reason);
        //             } else {
        //                 Meteor.call('updateAdmin', profile, function(err){
        //                     if(err){
        //                         console.log(err.reason);
        //                     }
        //                     Router.go('/adminDash/' + Meteor.userId());
        //                 });
        //             }
        //         });
        //     }

        // });
        console.log("Form submitted.");
    }
});