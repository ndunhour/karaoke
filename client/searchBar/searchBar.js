// 1.  get data from file
// 2.  display in table
// 3.  search text field
// 4.  display in table
// 5.  make row clickable

Template.searchBar.onCreated( function(){

});

Template.searchBar.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
  showList() {
    return Session.get('songList');
  },
  showRequests() {
    return Requests.find({});
  },
});

Template.searchBar.events({
    'submit .searchfield': function(event){
        event.preventDefault();
        const searchValue = event.target[0].value;

        Session.set('searchValue', searchValue);

        Meteor.call('findSong', Session.get('searchValue'), songs, function(err, result){
            Session.set('songList', result);
            const makeList = Session.get('songList').map(list => {

                const regex = new RegExp(Session.get('searchValue', 'gi'));
                const artist = list.Artist.replace(regex, function(match){
                    Session.set('songId', list.ID);
                    return makeList;
                });
            });

        });
        // set input box to placeholder
        $('.inputField').val('');
    },
    'click tr': function(e){
        const selection = e.currentTarget.innerText;

        $('.requestBox').text(selection + " has been requested for you")
            .fadeIn(800)
            .delay(1500)
            .fadeOut(500);

        Meteor.call('requests.insert', selection, function(err, result){
            console.log('selection', result);
        }) ;

    },

});
