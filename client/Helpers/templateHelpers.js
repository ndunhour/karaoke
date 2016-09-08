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

errMsg = function(err){
    if(err.reason == "Incorrect password"){
        return $(".errMsg").text("Incorrect password");
    }
    if(err.reason == "Email already exists."){
        return $(".errMsg").text("Email already exists");
    }
    if(err.reason == "User not found"){
        return $(".errMsg").text("User not found");
    }
    if(err.reason == "Need to set a username or email"){
        return $(".errMsg").text("Need to set a username or email");
    }
    console.log(err.reason);
};