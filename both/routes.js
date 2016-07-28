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
// Router.route('searchField', {
//     path: '/searchField',
//     template: 'searchField',
//     waitOn: function(){
//         return [
//             Meteor.subscribe('barName'),
//         ];
//     },
//     data: function(){
//         return BarName.find({});
//     }
// });
Router.route('admin', {
    path: '/admin',
    template: 'admin',
    subscriptions: function(){
        return Meteor.subscribe('bar');
    },
    data: function(){
        return Bar.find({}, {sort: {createdAt: -1}});
    }
});
