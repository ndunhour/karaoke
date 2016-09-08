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
    'submit form': function(event, template){
        event.preventDefault();
        var emailVar = $('.signInEmail').val();
        var passwordVar = $('.signInPassword').val();

        var signIn = {
            email: emailVar,
            password: passwordVar,
            barName: template._barName.get()
        };
        Meteor.loginWithPassword(signIn.email, signIn.password, function(err, succ){
            if(err){
                errMsg(err);
            }else {
                Session.set('barName', template._barName.get());
                if(Meteor.user().profile.admin){
                    Router.go('/adminDash/' + Meteor.userId());
                }else{
                    Router.go('/userDash/' + Meteor.userId());
                }

            }
        });
    },
    'click .name p': function(event, template){
        template._barName.set(event.currentTarget.textContent);
        var barId = Bar.findOne({barName: template._barName.get()});
        template._barId.set(barId._id);
    }


});