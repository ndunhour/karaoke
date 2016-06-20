Template.results.created = function(){
};

Template.results.rendered = function(){
};

Template.results.helpers({

});

Template.results.events({
    'click .js-doSomething': function(event, template){
        Router.go('/resultExp');
    }
});