Template.registration.created = function(){
    this._barName = new ReactiveVar('Establishment Name');
    this._barId = new ReactiveVar();
};

Template.registration.rendered = function(){

};

Template.registration.helpers({
    list: function(){
        return Bar.find({});
    },
    nameOfBar: function(){
        return Template.instance()._barName.get();
    }
});

Template.registration.events({
    'submit form': function(event, template) {
        event.preventDefault();
        var emailVar = $('.regEmail').val();
        var passwordVar = $('.regPassword').val();
        var barName = template._barName.get();

        var admin = false;
        var currentLocation = window.location;
        if(currentLocation.pathname === "/adminReg"){
            admin = true;
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
                            Session.set('barName', barName);
                            if(err){
                                errMsg(err);
                            }
                            if(admin === true){
                                console.log('admin');
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
        template._barName.set(event.currentTarget.textContent);
        var barId = Bar.findOne({barName: template._barName.get()});
        template._barId.set(barId._id);
    },
    'click .admin': function(event, template){
        Router.go('/admin');
    },
});