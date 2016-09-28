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
        return Template.instance()._barName.get();
    },
    admin: function(){
        if(Router.current().route._path ==="/registration"){
            return "none";
        }else{
            return "block";
        }
    },
    userReg: function(){
        if(Router.current().route._path ==="/registration"){
            return "Admin";
        }else{
            return "User";
        }
    },
    path: function(){
        if(Router.current().route._path ==="/registration"){
            return "/adminReg";
        }else{
            return "/registration";
        }
    },
    display: function(){
        if(Router.current().route._path ==="/registration"){
            return "User";
        }else{
            return "Admin";
        }
    },

});

Template.registration.events({
    'submit form': function(event, template) {
        event.preventDefault();
        var emailVar = $('.regEmail').val();
        var passwordVar = $('.regPassword').val();
        var barName = null;

        var admin = false;
        var currentLocation = window.location;
        if(currentLocation.pathname === "/adminReg" && $('#adminPassword').val() === "tk091413"){
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

        if(currentLocation.pathname === "/adminReg" && $('#adminPassword').val() === "tk091413"){
            Meteor.call('register', reg, function(err){
                if(err){
                    console.log('reg1',err.reason);

                    errMsg(err);
                } else {
                    Meteor.loginWithPassword(reg.email, reg.password, function(err){
                        if(err){
                            console.log('reg2', err.reason);
                            errMsg(err);
                        } else {
                            Meteor.call('updateUser', profile, function(err){
                                if(err){
                            console.log('reg3', err.reason);

                                    errMsg(err);
                                }
                                    Router.go('/adminDash/' + Meteor.userId());

                            });

                        }
                    });
                }
            });
        }else if(currentLocation.pathname === "/registration"){
            Meteor.call('register', reg, function(err){
                if(err){
                            console.log('reg4', err.reason);

                    errMsg(err);
                } else {
                    Meteor.loginWithPassword(reg.email, reg.password, function(err){
                        if(err){
                            console.log('reg5', err.reason);

                            errMsg(err);
                        } else {
                            Meteor.call('updateUser', profile, function(err){
                                if(err){
                            console.log('reg6', err.reason);

                                    errMsg(err);
                                }
                                    Router.go('/userDash/' + Meteor.userId());
                            });

                        }
                    });
                }
            });
        }else{
            $('.errMsg').text('You need Admin Rights to Register as Admin');
            $('#adminPassword').click(function(){
                $('#adminPassword').val('');
            });

        }
    },
    'click .name p': function(event, template){
        Session.set('barName', event.currentTarget.id);
        template._barName.set(event.currentTarget.id);
        var barId = Bar.findOne({barName: Session.get('barName')});
    },
});