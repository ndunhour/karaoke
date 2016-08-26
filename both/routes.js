Router.configure({
    layoutTemplate: 'baselayout'
});
Router.route('admin', {
    path: '/admin',
    template: 'admin',
    subscriptions: function(){
        return [
            Meteor.subscribe('bar'),
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
    layoutTemplate:null,
    subscriptions: function(){
        return [
            Meteor.subscribe('bar'),
            ];
    },
    data: function(){
        return Bar.find({});
    }
});
Router.route('signUp', {
    path:'/signUp',
    template: 'signUp',
    layoutTemplate: null,
    data: function(){
        return {};
    }
});
Router.route('search', {
    path: '/search/:_id',
    template: 'search',
    waitOn: function(){
        var barName = this.params._id;
        return [
            Meteor.subscribe(barName),
            Meteor.subscribe('cust'),
            // Meteor.subscribe('requests' + barName),
            Meteor.subscribe('requests')

            ];
    },
    data: function(){
        var barName = this.params._id;
        var nameToCollection = function(barName) {
        var root = Meteor.isClient ? window : global;
            return root[barName];
        };

        var collection = nameToCollection(barName);
        return collection.find({});
    }
});
