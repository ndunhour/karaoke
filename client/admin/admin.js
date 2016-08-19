Template.admin.created = function(){
    this._barName = new ReactiveVar("Establishment Name");
    this._img = new ReactiveVar();
};

Template.admin.rendered = function(){
};

Template.admin.helpers({
    bars: function(){
        return Bar.find({});
    },
    listBars: function(){
        return Template.instance()._barName.get();
    },
    img: function(){
        return Template.instance()._img.get();
    }

});

Template.admin.events({
    'click .js-createBar': function(event, template){
        var bar = {
            barName: $('.barName').val()
        };
        template._barName.set($('.barName').val());
        Meteor.call('newBar', bar, function(err){
            if(err){
                console.log(err.reason);
            }
        });
    },
    'click .listBars p': function(event, template){
        template._barName.set(event.currentTarget.textContent);
    },
    'click .js-newSong': function(event, template){
        var barId = Bar.findOne({barName: template._barName.get()})._id;
        var newSong = {
            Title: $('.title').val(),
            Artist: $('.artist').val(),
            ID: $('.songId').val(),
            barId: barId,
            barName: template._barName.get()
        };
        Meteor.call('insertSong', newSong.barName, newSong, function(err){
            if(err){
                console.log(err.reason);
            }
        });
        $('.barName').val("");
        $('.title').val("");
        $('.artist').val("");
        $('.songId').val("");
    },
    'change #files': function(event, template){
        var files = event.target.files; // FileList object

            // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

              // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader();

              // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {
                  // Render thumbnail.
                  var span = document.createElement('span');
                  span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                    '" title="', escape(theFile.name), '"/>'].join('');
                  document.getElementById('list').insertBefore(span, null);
                };
            })(f);

              // Read in the image file as a data URL.
              reader.readAsDataURL(f);
        }

    }


});