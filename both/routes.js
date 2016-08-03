Router.configure({
    layoutTemplate: 'baselayout'
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
// --------- customer -----------//
Router.route('signIn', {
    path: '/',
    template: 'signIn',
    subscriptions: function(){
        return [
            Meteor.subscribe('bar'),
            ];
    },
    data: function(){
        return {};
    }
});
Router.route('searchField', {
    path: '/searchField/:_id',
    template: 'searchField',
    waitOn: function(){
        return [
            Meteor.subscribe('bar'),
            Meteor.subscribe('songs'),
            Meteor.subscribe('cust'),
            Meteor.subscribe('requests')
        ];
    },
    data: function(){
        return Cust.findOne({_id: this.params._id});
    }
});
