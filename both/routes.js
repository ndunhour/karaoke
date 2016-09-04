Router.configure({
    layoutTemplate: 'baselayout'
});
Router.route('adminSignIn', {
    path: '/adminSignIn',
    template: 'adminSignIn',
    layoutTemplate:null,
    waitOn: function(){
        return [
            Meteor.subscribe('bar')
        ];
    },
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
            Meteor.subscribe('requests'),
            Meteor.subscribe('messages')
        ];
    },
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});
Router.route('adminReg', {
    path: '/adminReg/',
    template: 'registration',
    layoutTemplate: null,
    waitOn: function(){
        Meteor.subscribe('bar');
    },
    data: function(){
        return {};
    }
});
// --------- customer -----------//
Router.route('registration', {
    path:'/registration',
    template: 'registration',
    layoutTemplate: null,
    data: function(){
        return {};
    }
});


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
        return {};
    }
});
Router.route('userDash', {
    path: '/userDash/:_id',
    template: 'userDash',
    layoutTemplate: null,
    waitOn: function() {
        return [
            Meteor.subscribe('requests'),
            Meteor.subscribe('messages')
        ];
    },
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});
Router.route('contactDj', {
    path: '/contactDj',
    template: 'contactDj',
    layoutTemplate:null,
    waitOn: function(){
        // var barName = this.params._id;
        return [
            // Meteor.subscribe(barName),
            Meteor.subscribe('cust'),
            // Meteor.subscribe('requests' + barName),
            Meteor.subscribe('requests')

            ];
    },
    data: function(){
        return Cust.findOne({});
    }
});
