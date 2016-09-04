nameToCollection = function(barName) {
    var root = Meteor.isClient ? window : global;
    return root[barName];
};


Template.playlist.created = function(){
    console.log('this', this);
    console.log('user', Meteor.users.findOne);
    // if(this.data.profile.admin === true){
    //     Session.set('barName', this.data.profile.barName);
    // }
};

Template.playlist.rendered = function(){
};

Template.playlist.helpers({
    'playlist': function(){
        var bar = Session.get('barName');
        return Requests.find({barName: bar});
    }
});

Template.playlist.events({

});