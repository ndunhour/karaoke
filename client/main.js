// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

if (Meteor.isClient){
    Meteor.call('getSongs', function(error, result){
        if(error){
            console.log(error.reason);
        }
        // console.log("results", result);
        Session.set("songs", result);
    });
    Meteor.call('getRoom', function(error, result){
        if(error){
            console.log(error.reason);
        }
        Session.set('room', result);
    });

}

