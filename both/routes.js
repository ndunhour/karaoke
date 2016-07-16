Router.configure({
    layoutTemplate: 'baselayout'
});

Router.route('home', {
    path: '/home',
    template: 'home'
});

Router.route('signIn', {
    path: '/signIn',
    template: 'signIn',
    // subscriptions: function() {
    //     return Meteor.subscribe('room');
    // },
    // data: function() {
    //     return Room.find({}, {sort: {createdAt: -1}});
    // }
});

Router.route('resultExp', {
    path: '/resultExp',
    template: 'resultExp',
    // subscriptions: function() {
    //     return Meteor.subscribe('songs');
    // },
    // data: function() {
    //     return Songs.find({}, {sort: {createdAt: -1}});
    // }
});

