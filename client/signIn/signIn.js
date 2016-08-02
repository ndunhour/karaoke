Template.signIn.created = function(){
    this._nameOfBar = new ReactiveVar('Establishment Name');
    this._barId = new ReactiveVar();
};

Template.signIn.rendered = function(){
};

Template.signIn.helpers({
    list: function(){
        return Bar.find({});
    },
    nameOfBar: function(){
        return Template.instance()._nameOfBar.get();
    }
});

Template.signIn.events({
    'click .js-signIn': function(event, template){
        var nameOfBar = template._nameOfBar.get();
        var customerName = $('.customerName').val();

        Meteor.call('signIn', nameOfBar, customerName, function(err){
            if(err){
                console.log(err.reason);
            }
        });
        var findBarId = Bar.findOne({name: nameOfBar});
        var barId = findBarId._id;
        Router.go('/searchField/' + barId );
    },
    'click .nameOfBar p': function(event, template){
        template._nameOfBar.set(event.currentTarget.textContent);

    }

});