// get customer data to send request/chat with admin
Template.registerHelper("custId", function () {
    var user = this.fName;
    if (typeof user === "undefined") {
        return "Anonymous";
    }
    return user;
});
// get customer data to send request/chat with admin
Template.registerHelper("time", function (timestamp) {
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});