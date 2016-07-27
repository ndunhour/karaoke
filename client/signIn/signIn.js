Template.signIn.created = function(){
};

Template.signIn.rendered = function(){
};

Template.signIn.helpers({
    bar: function(){
        return BarName.find({}, {sort: {createdAt: -1}});
    }
});

Template.signIn.events({
    'click .js-signIn': function(){
        var barName = ('.barName').val();
        var username = ('.userName').val();
        var password = ('.password').val();

        console.log(barname + ", " + username + ", " + password);
    }

});