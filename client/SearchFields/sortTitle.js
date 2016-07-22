Template.sortTitle.created = function(){
    // var results = Songs.find({});
};

Template.sortTitle.rendered = function(){

};

Template.sortTitle.helpers({
    sortTitle: function(){
        return Songs.find({}, {sort:{Title:1}});
    },
    find: function(){
        var search = Session.get("search");
        return Songs.find({$or: [{Title: {$eq: search}}, {Artist: {$eq: search}}]});
    },
    sortArtist: function(){
        return Songs.find({}, {sort: {Artist: 1}});
    }
});

Template.sortTitle.events({
    'click .js-searchBtn': function(event, template){
        var searchFor = $('.searchBox').val();
        Session.set('search', searchFor);
        $('.search').css('display', 'inline');
    },
    'click .clickable': function(event, template){
        var row = $(this).closest('tr').children('td');
        $('.searchBox').val('');
        var data = row.prevObject.prevObject[0];
        console.log('data', data);
        var updateSong = {
            Artist : "omz",
            DateAdded: "2008-07-17",
            Duo: 1,
            Explicit: 0,
            ID: 11426,
            Styles: "TV & movie soundtrack,Rock 'n Roll,Pop,Oldies,Duet",
            Title: "Summer Nights",
            Year: 1978,
            // _id: "MongoID.ObjectID",
            count: 0,
        };
        console.log('updateSong', updateSong);
        console.log('count', updateSong.count);
        updateSong.count = updateSong.count + 1;
        console.log('add', updateSong.count);
        // Meteor.call('updateSong', updateSong, data._id._str, function(err, succ){
        //     console.log("in method updateSong call");
        // });
        // Router.go('/');
    },
    'click .sortArtist': function(event, template){
        // Router.go('/sortArtist');
    },
    'submit .auto': function(event){
        var target = event.target;
        var text = target.text.value;
        console.log('what', target);

    }
});