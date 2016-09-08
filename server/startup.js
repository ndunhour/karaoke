Meteor.autorun(function() {
    // Whenever this session variable changes, run this function.
    // var message = Session.get('errMsg');
    // if (message) {
    //   var stringArray = message.split('&amp;');
    //   ui.notify(stringArray[0], stringArray[1])
    //     .effect('slide')
    //     .closable();

    //   Session.set('errMsg', null);
    // }
    // if(Meteor.isClient){
    //     console.log('validate');
    //     $.validator.setDefaults({
    //         rules: {
    //             email: {
    //                 required: true,
    //                 email: true
    //             },
    //             password: {
    //                 required: true,
    //                 minlength: 6
    //             }
    //         },
    //         messages: {
    //             email: {
    //                 required: "You must enter an email address.",
    //                 email: "You've entered an invalid email address."
    //             },
    //             password: {
    //                 required: "You must enter a password.",
    //                 minlength: "Your password must be at least {0} characters."
    //             }
    //         }
    //     });
    // }
});