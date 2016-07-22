(function(){
    var songs = [

        { "ID":50052, "Title":"Hello", "Artist":"Adele", "Year":2015, "Duo":0, "Explicit":0, "Date Added":"2016-05-13", "Styles":"Pop" },
        { "ID":48052, "Title":"Uptown Funk", "Artist":"Bruno Mars", "Year":2014, "Duo":0, "Explicit":0, "Date Added":"2015-01-12", "Styles":"Funk,Pop,Electro" },
        { "ID":50022, "Title":"On écrit sur les murs", "Artist":"Kids United", "Year":2015, "Duo":0, "Explicit":0, "Date Added":"2015-12-30", "Styles":"French pop,Kids" },
        { "ID":50244, "Title":"Love Yourself", "Artist":"Justin Bieber", "Year":2015, "Duo":0, "Explicit":0, "Date Added":"2016-02-17", "Styles":"Pop" },
        { "ID":50548, "Title":"7 Years", "Artist":"Lukas Graham", "Year":2015, "Duo":0, "Explicit":0, "Date Added":"2016-02-17", "Styles":"Pop" },
        { "ID":45000, "Title":"All Of Me", "Artist":"John Legend", "Year":2013, "Duo":0, "Explicit":0, "Date Added":"2013-10-08", "Styles":"Soul,Pop" },
        { "ID":50332, "Title":"One Call Away", "Artist":"Charlie Puth", "Year":2015, "Duo":0, "Explicit":0, "Date Added":"2016-02-18", "Styles":"Pop"}
    ];
    console.log('songs', songs[0].Title);
    var songTitle = [];
    for(var i=0; i<songs.length; i++){
        songTitle.push(songs[i].Title);
    }
    $('.searchBox').autocomplete({
        source: songTitle
    });
})();