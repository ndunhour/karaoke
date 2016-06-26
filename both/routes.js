Router.configure({
    layoutTemplate: 'baselayout'
});

Router.route('index', {
    path: '/index',
    template: 'index'
});

Router.route('createParty', {
    path: '/',
    template: 'createParty',
    subscriptions: function() {
        return Meteor.subscribe('room');
    },
    data: function() {
        return Room.find({}, {sort: {createdAt: -1}});
    }
});

Router.route('resultExp', {
    path: '/resultExp',
    template: 'resultExp',
    subscriptions: function() {
        return Meteor.subscribe('songs');
    },
    data: function() {
        return Songs.find({}, {sort: {createdAt: -1}});
    }
});

