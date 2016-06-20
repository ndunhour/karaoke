// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

if (Meteor.isClient){
    Meteor.call('getSongs', function(error, result){
        if(error){
            console.log("error", error);
        }
        // console.log("results", result);
        Session.set("songs", result);

    });
}

