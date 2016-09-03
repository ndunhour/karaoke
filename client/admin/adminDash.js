Template.adminDash.created = function(){
    Meteor.subscribe(this.data.barName);
    Meteor.subscribe('cust');
    Meteor.subscribe('comments');
};

Template.adminDash.rendered = function(){
};

Template.adminDash.helpers({
    playlist: function(){
        var collections = nameToCollection(Template.instance().data.barName);
        return collections.find();
    },
    requests: function(){
        return Requests.find({barName:Template.instance().data.barName});
    },
    comments: function(){
        var user = Comments.find({});
        return user;
    },
    responses: function(){
        var response = Comments.find({});
        return response;
    }

});

Template.adminDash.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout(function(err){
            if(err){
                console.log(err.reason);
            }
            Router.go('/');
        });
    },
    'click .adminReg': function(event){
        event.preventDefault();
        Router.go('/adminReg');
    },
    'click .js-tr': function(event, template){
        event.preventDefault();
        var deleteSong = event.currentTarget.id;
        Meteor.call('deleteSong', deleteSong, function(err){
            if(err){
                console.log(err.reason);
            }
        });
    },
    'click .js-respond': function(event, template){
        var date = new Date();
        Session.set('inputId', event.currentTarget.id);
        var response = document.getElementById(Session.get('inputId')).value;
        var respond = {
            response: response,
            commentId: event.currentTarget.id,
            date: time(date),
        };
        Meteor.call('response', event.currentTarget.id, respond, function(err, succ){
            if(err){
                console.log(err.reason);
            }
            Session.set('inputId', "");
        });

    },
});