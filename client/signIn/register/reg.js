Template.reg.created = function(){
    this._barName = new ReactiveVar('Establishment Name');
    this._barId = new ReactiveVar();
};

Template.reg.rendered = function(){
};

Template.reg.helpers({
    list: function(){
        return Bar.find({});
    },
    nameOfBar: function(){
        return Template.instance()._barName.get();
    }
});

Template.reg.events({
    'click .js-reg': function(event, template){
        var pass1 = $('.pass1').val();
        var pass2 = $('.pass2').val();
        var name = $('.name').val();
        if(pass1 === pass2){
            password = pass1;
        } else{
            alert("Password doesn't match");
            $('.pass1').val("");
            $('.pass2').val("");
        }
        Accounts.createUser({
            email: $('.email').val(),
            password: password
        });
        var cust = {
            name: name,
        };
        Meteor.call('addName', cust, function(err){
            if(err){
                console.log(err.reason);
            }
        });
        $('.succ').show();
        $('.reg').hide();
    },
    'click .js-signIn': function(event, template){
        var passWord = $('.pass').val();
        var signIn = {
            custId: Meteor.userId(),
            barId: template._barId.get(),
            custName: Meteor.user().profile.name,
            barName: template._barName.get()
        };

        Meteor.loginWithPassword(Meteor.user().emails[0].address, passWord, function(err){
            if(err){
                console.log(err.reason);
            }

            Meteor.call('signIn', signIn, function(err){
                if(err){
                    console.log(err.reason);
                }
            });
            Router.go('/searchField/' + Meteor.userId());
        });
    },
    'click .name p': function(event, template){
        template._barName.set(event.currentTarget.textContent);
        var barId = Bar.findOne({name: template._barName.get()});
        template._barId.set(barId._id);
    }
});