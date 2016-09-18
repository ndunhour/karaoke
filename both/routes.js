Router.configure({
    layoutTemplate: 'baselayout'
});
Router.route('companyLogo', {
    template: 'companyLogo',
    layoutTemplate:null,
    waitOn: function(){
        return [
            Meteor.subscribe('bar')
        ];
    },
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});
Router.route('adminSignIn', {
    path: '/adminSignIn',
    template: 'signIn',
    layoutTemplate:null,
    waitOn: function(){
        return [
            Meteor.subscribe('bar')
        ];
    },
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
        // return {};

    }
});
Router.route('adminDash', {
    path: '/adminDash/:_id',
    template: 'userDash',
    layoutTemplate: null,
    waitOn: function() {
        return [
            Meteor.subscribe('requests'),
            Meteor.subscribe('messages')
        ];
    },
    data: function(){
        return Meteor.users.findOne({_id:this.params._id});
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
    waitOn: function(){
        return [
            Meteor.subscribe('bar'),
            ];
    },
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
            Meteor.subscribe('users')
            ];
    },
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
        // return Meteor.users.find({});
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
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});
Router.route('playlist', {
    path: '/playlist',
    template: 'playlist',
    layoutTemplate:null,
    waitOn: function(){
        return Meteor.subscribe('requests');
    }
});
Router.route('topTen', {
    path: '/topTen',
    template: 'topTen',
    layoutTemplate:null,
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});
Router.route('updatDb', {
    path: '/updateDb',
    template: 'updateDb',
    layoutTemplate: null,
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});
