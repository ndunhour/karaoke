Template.signIn.created = function(){
    this._bar = new ReactiveVar('Establishment Name');
};

Template.signIn.rendered = function(){
};

Template.signIn.helpers({
    list: function(){
        console.log('helper', BarName.find({}, {sort: {createdAt: -1}}));
        return BarName.find({});
    },
    nameOfBar: function(){
        return Template.instance()._bar.get();
    }
});

Template.signIn.events({
    'click .js-signIn': function(event, template){
        var barName = template._bar.get();
        var customerName = $('.customeName').val();

        var signIn = {
            barName: barName,
            customerName: customerName
        };

        Meteor.call('signIn', signIn, function(err){
            if(eff){
                console.log(err.reason);
            }
        });
    },
    'click .barName p': function(event, template){
        template._bar.set(event.currentTarget.textContent);

    }

});