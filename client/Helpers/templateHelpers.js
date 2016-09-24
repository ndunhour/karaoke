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

funtimes = function(){
    console.log('here');
    setTimeout(function(){
        $(".welcomeMsg").hide();
    },8000);
};

// displayTable = function(){
//     String.prototype.embraceWith = function(tag) {
//         return "<" + tag + ">" + this + "</" + tag + ">";
//     };

//     var tableHeader = ("ID".embraceWith("th") + "Title".embraceWith("th") + "Artist".embraceWith("th")).embraceWith("tr");
//     var tableBody = songList.map(function(song) {
//         return (song.ID.embraceWith("td") + song.Title.toString().embraceWith("td") + song.Artist.embraceWith("td")).embraceWith("tr")
//     }).join("");

//     var table = (tableHeader + tableBody).embraceWith("table");
//     $(".songList").append(table);
// }