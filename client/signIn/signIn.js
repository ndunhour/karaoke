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
    'click .js-startSinging': function(event, template){
        event.preventDefault();
        var emailVar = $('.signInEmail').val();
        var passwordVar = $('.signInPassword').val();
        var signIn = {
            email: emailVar,
            password: passwordVar,
            barName: template._barName.get()
        };
        if(template._barName.get() === 'Establishment Name'){
            $('.needBarName').css('display', 'block').fadeIn(500).delay(2000).fadeOut(500);
        }else{
            Meteor.loginWithPassword(signIn.email, signIn.password, function(err, succ){
                if(err){
                    errMsg(err);
                }else {
                    Session.set('barName', template._barName.get());
                    Router.go('/userDash/' + Meteor.userId());
                }
            });
        }
    },
    'click .name p': function(event, template){
        event.preventDefault();
        template._barName.set(event.currentTarget.textContent);
        var barId = Bar.findOne({barName: template._barName.get()});
        template._barId.set(barId._id);
    },
    'click .js-signIn': function(event, template){
        event.preventDefault();
        var emailVar = $('.signInEmail').val();
        var passwordVar = $('.signInPassword').val();
        var signIn = {
            email: emailVar,
            password: passwordVar,
        };
        Meteor.call('verifyUser', emailVar, function(err, user){
            if(err){
                console.log(err.reason);
            }
            if(user.profile.admin === true){
                Meteor.loginWithPassword(signIn.email, signIn.password, function(err, succ){
                    if(err){
                        $('.errMsg').text('User Profile not found').fadeIn(500).delay(2000).fadeOut(500);
                    }else {
                        Session.set('barName', user.profile.barName);
                        Router.go('/adminDash/' + Meteor.userId());
                    }
                });
            }else if(user.profile.admin === false){
                $('.barDropdown').css('display', 'block');
                $('.js-startSinging').css('display', 'block');
                $('.js-signIn').css('display', 'none');
            }
        });


    }
});