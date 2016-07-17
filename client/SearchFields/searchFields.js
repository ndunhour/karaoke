// var songList = function(){
//         Session.set('songList',Songs.find({}).fetch());
//         console.log('here');
//         return Songs.find({}).fetch();
//     };

Template.searchFields.created = function(){
};

Template.searchFields.rendered = function(){
};

Template.searchFields.helpers({
    songList: function(){
        Session.set('songList',Songs.find({}).fetch());
        return Songs.find({}).fetch().sort();
    },
    // songList: songList,
    find: function(){
        var search = Session.get("search");
        return Songs.find({$or: [{Title: {$eq: search}}, {Artist: {$eq: search}}]});
    }
});

Template.searchFields.events({
    'click .js-searchBtn': function(event, template){
        var searchFor = $('.searchBox').val();
        Session.set('search', searchFor);
        $('.found').css('display','inline');
        $('.available').css('display','none');


    },
    'click .clickable': function(event, template){
        var row = $(this).closest('tr').children('td');
        $('.searchBox').val('');
        console.log('row', row);
        Router.go('/');
    }
});