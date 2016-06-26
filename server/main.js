Songs = new Mongo.Collection('songs');
Room = new Mongo.Collection('room');

if (Meteor.isServer){
    Meteor.startup(function(){
        var cheerio = Meteor.npmRequire('cheerio');

        Meteor.methods({
            getSongs: function(){
                return Songs.find().fetch();
            }
        });
        Meteor.methods({
            getRoom: function(){
                return Room.find().fetch();
            }
        });
    });
}