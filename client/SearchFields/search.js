nameToCollection = function(barName) {
    var root = Meteor.isClient ? window : global;
    return root[barName];
};


Template.search.created = function(){
    var data = this.data; // return barId and name
    data.barName = new ReactiveVar(data.collection.name);
    this.custName = new ReactiveVar();
};

Template.search.rendered = function(){

};

Template.search.helpers({
    settings: function(){
        var collection = nameToCollection(Template.instance().data.barName.get());
        return {
            collection: collection.find({}),
            fields:['ID', 'Title', 'Artist'],
            showNavigation: 'always',
            rowsPerPage: 10

        };
    },
    songs: function(){
        var collection = nameToCollection(Template.instance().data.barName.get());
        return collection.find({});
    },
    cust: function(){
        var cust = Cust.findOne({},{sort: {date:-1}});
        Template.instance().custName.set(cust.fname);
        return Cust.findOne({},{sort: {date:-1}});
    }

});

Template.search.events({
    'click .reactive-table tbody tr': function(event, template){
        var requestSong = {
            Artist: this.Artist,
            Title: this.Title,
            ID: this.ID,
            barName: template.data.barName,
            custName: template.custName.get(),
            date: Date(Date.now())

        };

        Meteor.call('addToPlaylist', requestSong, function(err, succ){
            if(err){
                console.log('here',err.reason);
            }

            if(HMC.find({"request_counter" : { "$exists" : true}})){
                Meteor.call('counter', requestSong, function(err,succ){
                    if(err){
                        console.log(err.reason);
                    }
                });
            }else{
                Meteor.call('insertCounter', requestSong, function(err,succ){
                    if(err){
                        console.log(err.reason);
                    }
                });
            }
        });
        var modal = Requests.findOne({},{sort:{date:-1}});
        $('.request').css({'display': 'block'});
        $('.msg').text("Your request to sing " + modal.Title + " by " + modal.Artist + " will be played shortly").css({'background': 'red'});
        $('.main').css({'display': 'none'});

    },
    'click .js-close': function(event, template){
        $('.request').css({'display': 'none'});
        $('.main').css({'display': 'inline'});
        document.location.reload(true);

    }

});
