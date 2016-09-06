Template.registration.created = function(){
    this._barName = new ReactiveVar('Establishment Name');
};

Template.registration.rendered = function(){

};

Template.registration.helpers({
    list: function(){
        return Bar.find({});
    },
    nameOfBar: function(){
        return Session.get('barName');
    },
    admin: function(){
        if(window.location.pathname ==="/adminSignIn"){
            return "none";
        }else {
            return "block";
        }
    }

});

Template.registration.events({
    'submit form': function(event, template) {
        event.preventDefault();
        var emailVar = $('.regEmail').val();
        var passwordVar = $('.regPassword').val();
        var barName = null;

        var admin = false;
        var currentLocation = window.location;
        if(currentLocation.pathname === "/adminReg"){
            admin = true;
            barName = Session.get('barName');
        }
        var reg = {
            email: emailVar,
            password: passwordVar,
        };
        var profile = {
            barName: barName,
            userName: $('.userName').val(),
            fName: $('.fName').val(),
            lName: $('.lName').val(),
            admin: admin
        };
        Meteor.call('register', reg, function(err){
            if(err){
                errMsg(err);
            } else {
                Meteor.loginWithPassword(reg.email, reg.password, function(err){
                    if(err){
                        errMsg(err);
                    } else {
                        Meteor.call('updateUser', profile, function(err){
                            if(err){
                                errMsg(err);
                            }
                            if(admin === true){
                                Router.go('/adminDash/' + Meteor.userId());
                            } else{
                                Router.go('/userDash/' + Meteor.userId());
                            }
                        });
                    }
                });
            }

        });
    },
    'click .name p': function(event, template){
        Session.set('barName', event.currentTarget.id);
        template._barName.set(event.currentTarget.id);
        var barId = Bar.findOne({barName: Session.get('barName')});
    },
    'click .admin': function(event, template){
        Router.go('/admin');
    },
});