Template.resultExp.created = function(){
};

Template.resultExp.rendered = function(){
};

Template.resultExp.helpers({

});

Template.resultExp.events({
    'click .js-request': function(event, template){
        Router.go('/main');
    }

});