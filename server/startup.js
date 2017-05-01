Meteor.autorun(function() {
    // Whenever this session variable changes, run this function.
    // var message = Session.get('errMsg');
    // if (message) {
    //   var stringArray = message.split('&amp;');
    //   ui.notify(stringArray[0], stringArray[1])
    //     .effect('slide')
    //     .closable();

    //   Session.set('errMsg', null);
    // }
    // if(Meteor.isClient){
    //     console.log('validate');
    //     $.validator.setDefaults({
    //         rules: {
    //             email: {
    //                 required: true,
    //                 email: true
    //             },
    //             password: {
    //                 required: true,
    //                 minlength: 6
    //             }
    //         },
    //         messages: {
    //             email: {
    //                 required: "You must enter an email address.",
    //                 email: "You've entered an invalid email address."
    //             },
    //             password: {
    //                 required: "You must enter a password.",
    //                 minlength: "Your password must be at least {0} characters."
    //             }
    //         }
    //     });
    // }

    if (Meteor.isServer) {
        Meteor.startup(function () {
            if (HMC.find().count() === 0) {
                var HMCsongs = [
                    {
                        "ID":48052,
                        "Title":"Uptown Funk",
                        "Artist":"Bruno Mars",
                        "Year":2014,
                        "Duo":0,
                        "Explicit":0,
                        "Date Added":"2015-01-12",
                        "Styles":"Funk,Pop,Electro"
                    },
                    {
                        "ID":45873,
                        "Title":"Let It Go",
                        "Artist":"Idina Menzel",
                        "Year":2013,
                        "Duo":0,
                        "Explicit":0,
                        "Date Added":"2015-04-08",
                        "Styles":"TV & movie soundtrack,Pop"
                    },
                    {
                        "ID":11426,
                        "Title":"Summer Nights",
                        "Artist":"Grease",
                        "Year":1978,
                        "Duo":1,
                        "Explicit":0,
                        "Date Added":"2008-07-17",
                        "Styles":"TV & movie soundtrack,Rock 'n Roll,Pop,Oldies,Duet"
                    },
                    {
                        "ID":12110,
                        "Title":"Hello",
                        "Artist":"Lionel Richie",
                        "Year":1984,
                        "Duo":0,
                        "Explicit":0,
                        "Date Added":"2012-02-02",
                        "Styles":"Love,Soft rock"
                    },
                    {
                        "ID":50711,
                        "Title":"Hello",
                        "Artist":"Boyce Avenue",
                        "Year":2016,
                        "Duo":0,
                        "Explicit":0,
                        "Date Added":"2016-06-07",
                        "Styles":"Pop"
                    },
                    {
                        "ID":6228,
                        "Title":"Hello Again",
                        "Artist":"Neil Diamond",
                        "Year":1980,
                        "Duo":0,
                        "Explicit":0,
                        "Date Added":"2007-06-18",
                        "Styles":"Soft rock"
                    }
                ];
                for(i=0; i<HMCsongs.length; i++){
                    HMC.insert(HMCsongs[i]);
                }
            }
            if (AB.find().count() === 0) {
                var ABsongs = [
                    {
                        "ID":50819,
                        "Title":"J'ai cherché",
                        "Artist":"Amir",
                        "Year":2016,
                        "Duo":0,
                        "Explicit":0,
                        "Date Added":"2016-06-07",
                        "Styles":"French pop"
                    },
                    {
                        "ID":50058,
                        "Title":"Les yeux de la mama",
                        "Artist":"Kendji Girac",
                        "Year":2015,
                        "Duo":0,
                        "Explicit":0,
                        "Date Added":"2016-02-18",
                        "Styles":"French pop,Latin"
                    },
                    {
                        "ID":49342,
                        "Title":"Stitches",
                        "Artist":"Shawn Mendes",
                        "Year":2015,
                        "Duo":0,
                        "Explicit":0,
                        "Date Added":"2015-07-01",
                        "Styles":"Rock,Pop"
                    },
                    {
                        "ID":50906,
                        "Title":"No",
                        "Artist":"Meghan Trainor",
                        "Year":2016,
                        "Duo":0,
                        "Explicit":0,
                        "Date Added":"2016-04-08",
                        "Styles":"Pop,R&B"
                    },
                    {
                        "ID":6534,
                        "Title":"Sweet Caroline",
                        "Artist":"Neil Diamond",
                        "Year":1969,
                        "Duo":0,
                        "Explicit":0,
                        "Date Added":"2011-05-31",
                        "Styles":"Pop"
                    },
                    {
                        "ID":50662,
                        "Title":"Cheap Thrills",
                        "Artist":"Sia",
                        "Year":2016,
                        "Duo":0,
                        "Explicit":0,
                        "Date Added":"2016-03-10",
                        "Styles":"Pop,Electro"
                    },
                ];
                for(i=0; i<ABsongs.length; i++){
                    AB.insert(ABsongs[i]);
                }
            }

        });
    }
});
