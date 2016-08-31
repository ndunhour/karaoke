time = function(date){
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
};

nameToCollection = function(barName) {
    var root = Meteor.isClient ? window : global;
    return root[barName];
};
