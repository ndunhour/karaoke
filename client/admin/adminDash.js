Template.adminDash.created = function(){
    console.log('this', this.data.barName);
    Meteor.subscribe(this.data.barName);
};

Template.adminDash.rendered = function(){
};

Template.adminDash.helpers({
    playlist: function(){
        var collections = nameToCollection(Template.instance().data.barName);
        console.log('coll', collections);
        return collections.find();
    },
    requests: function(){
        console.log('req', Requests.find({barName:Template.instance().data.barName}));
        return Requests.find({barName:Template.instance().data.barName});
    }

});

Template.adminDash.events({
    'click .logout': function(event){
        event.preventDefault();
        console.log('click');
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
        var deleteSong = event.currentTarget.id;
        Meteor.call('deleteSong', deleteSong, function(err){
            if(err){
                console.log(err.reason);
            }
        });
    }
});