time = function(date){
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
};

Template.contactDj.created = function(){

};

Template.contactDj.rendered = function(){
};

Template.contactDj.helpers({
    comments: function(){
        console.log(this);
        return this.comments;
    }


});

Template.contactDj.events({
    'click .js-comment': function(event, template){
        console.log(template);

        var date = new Date();
        var comment = {
            fName: template.data.fName,
            barName: template.data.barName,
            comment: $('.comment').val(),
            date: time(date)
        };
        Meteor.call('comment', template.data._id, comment, function(err,succ){
            if(err){
                console.log(err.reason);
            }
        });
        $('.comment').val("");
    }
});