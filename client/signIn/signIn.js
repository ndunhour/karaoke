Template.signIn.created = function(){
    this._barName = new ReactiveVar('Establishment Name');
    this._barId = new ReactiveVar();
};

Template.signIn.rendered = function(){
};

Template.signIn.helpers({
    list: function(){
        return Bar.find({});
    },
    nameOfBar: function(){
        return Template.instance()._barName.get();
    }
});

Template.signIn.events({
    'click .js-signIn': function(event, template){
        var signIn = {
            fName: $('.fName').val(),
        };
        var reg = {
            barId: template._barId.get(),
            barName: template._barName.get(),
            fName: $('.fName').val(),
            date: Date(Date.now()),
            comments:[]
        };

        Session.set('cust', $('.fName').val());
        Session.set('barName', template._barName.get());

        Meteor.call('signIn', reg, function(err, succ){
            if(err){
                console.log(err.reason);
            } else {
                Meteor.loginWithPassword
            }
            Session.set('custId', succ);
        });
        Meteor._reload.reload();
        Router.go('/search/' + template._barName.get());
    },
    'click .name p': function(event, template){
        template._barName.set(event.currentTarget.textContent);
        var barId = Bar.findOne({barName: template._barName.get()});
        template._barId.set(barId._id);
    },
    'click .admin': function(event, template){
        Router.go('/admin');
    },


});