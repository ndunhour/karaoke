Router.configure({
    layoutTemplate: 'baselayout'
});
Router.route('admin', {
    path: '/admin',
    template: 'admin',
    layoutTemplate:null,
    // waitOn: function(){
    //     return [
    //         Meteor.subscribe('requests')
    //     ];
    // },
    data: function(){
        // return Meteor.users.findOne({_id: this.params._id});
        return {};

    }
});
Router.route('adminDash', {
    path: '/adminDash/:_id',
    template: 'adminDash',
    layoutTemplate: null,
    waitOn: function() {
        return [
            Meteor.subscribe('admin', this.params._id),
            Meteor.subscribe('requests')
        ];
    },
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});
Router.route('adminReg', {
    path: '/adminReg/',
    template: 'adminReg',
    layoutTemplate: null,
    waitOn: function() {
        return [
            Meteor.subscribe('admin', this.params._id)
            ];
    },
    data: function(){
        // return Meteor.users.findOne({_id: this.params._id});
        return {};

    }
});
// --------- customer -----------//


Router.route('signIn', {
    path: '/',
    template: 'signIn',
    layoutTemplate:null,
    waitOn: function(){
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

