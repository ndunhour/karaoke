Router.configure({
    layoutTemplate: 'baselayout'
});

Router.route('signIn', {
    path: '/',
    template: 'signIn',
    subscriptions: function(){
        return Meteor.subscribe('bar');
    },
    data: function(){
        return Bar.find({});
    }
});
Router.route('admin', {
    path: '/admin',
    template: 'admin',
    subscriptions: function(){
        return [
            Meteor.subscribe('bar'),
            Meteor.subscribe('songs')
        ];
    },
    data: function(){
        return Bar.find({});
    }
});
Router.route('searchField', {
    path: '/searchField/:_id',
    template: 'searchField',
    waitOn: function(){
        return [
            Meteor.subscribe('barSongbook'),
            Meteor.subscribe('songs')
        ];
    },
    data: function(){
        return Bar.find({_id: this.params._id});
    }
});
