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

Router.route('reg', {
    path:'/reg',
    template: 'reg',
    layoutTemplate: null,
    subscriptions: function(){
        return [
            Meteor.subscribe('bar'),
            Meteor.subscribe('users', this.params._id)
        ];
    },
    data: function(){
        return Meteor.users.findOne({_id: this.params._id});
    }
});
Router.route('signIn', {
    path: '/',
    template: 'signIn',
    layoutTemplate:null,
    subscriptions: function(){
        console.log('signInThis', this.params);
        return [
            Meteor.subscribe('bar'),
            ];
    },
    data: function(){
        return Bar.findOne({_id:this.params._id});
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
Router.route('searchField', {
    path: '/searchField/:_id',
    template: 'searchField',
    waitOn: function(){
        return [
            Meteor.subscribe('bar'),
        ];
    },
    data: function(){
        return Cust.findOne({_id: this.params._id});
    }
});
