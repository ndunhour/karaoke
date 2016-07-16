Template.signIn
.created = function(){
};

Template.signIn
.rendered = function(){
};

Template.signIn
.helpers({
    room: function(){
        return Session.get('room');
    }
});

Template.signIn
.events({
    'click .js-createParty': function(event, template){
        // var partyRoom = {
        //     roomNum: $('.room').val(),
        //     partyName: $('.party').val()
        // };
        Router.go('/home');
        console.log("click");

    }
});