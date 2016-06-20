Songs = new Mongo.Collection('songs');

if (Meteor.isServer){
    Meteor.startup(function(){
        var cheerio = Meteor.npmRequire('cheerio');

        Meteor.methods({
            getSongs: function(){
                return Songs.find().fetch();
            }
        });
    });
}