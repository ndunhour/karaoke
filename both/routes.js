Router.configure({
    layoutTemplate: 'baselayout'
});

Router.route('home', {
    path: '/',
    template: 'searchField',
    waitOn: function(){
        return [
            Meteor.subscribe('songs'),
        ];
    },
    data: function(){
        return Songs.find({});
    }
});
Router.route('signIn', {
    path: '/signIn',
    template: 'signIn',
    subscriptions: function() {
        return Meteor.subscribe('barName');
    },
    data: function() {
        return BarName.find({}, {sort: {createdAt: -1}});
    }
});
