Router.configure({
    layoutTemplate: 'baselayout'
});

Router.route('home', {
    path: '/',
    template: 'searchField',
    waitOn: function(){
        return [
            Meteor.subscribe('songs'),
            // Meteor.subscribe('sort')
        ];
    },
    data: function(){
        return Songs.find({});
    }
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

