Router.configure({
    layoutTemplate: 'baselayout'
});

Router.route('index', {
    path: '/index',
    template: 'index'
});

Router.route('createParty', {
    path: '/',
    template: 'createParty'
});

Router.route('resultExp', {
    path: '/resultExp',
    template: 'resultExp'
});