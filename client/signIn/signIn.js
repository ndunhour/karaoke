Template.signIn.created = function(){
    console.log('signInCreated', this);
    this._bar = new ReactiveVar('Establishment Name');
    this._barId = new ReactiveVar();
};

Template.signIn.rendered = function(){
};

Template.signIn.helpers({
    list: function(){
        return Bar.find({});
    },
    nameOfBar: function(){
        return Template.instance()._bar.get();
    }
});

Template.signIn.events({
    'click .js-signIn': function(event, template){
        var emailVar = $('.email').val();
        var passwordVar = $('.password').val();
        var signIn = {
            emailVar: $('.email').val(),
            passwordVar: $('.password').val()
        };
        console.log('signIn', signIn);
        var reg = {
            barId: template._barId.get(),
            barName: template._bar.get(),
            customerName: $('.customerName').val()
        };
        console.log('reg', reg);
        // Meteor.loginWithPassword(emailVar, passwordVar);
        // Meteor.call('signIn', signIn, function(err, succ){
        //     if(err){
        //         console.log(err.reason);
        //     }
            // Router.go('/searchField/' + succ);
        // });

        // ------
        // 'submit form': function(event){
        // event.preventDefault();
        // }
        // ------
    },
    'click .name p': function(event, template){
        template._bar.set(event.currentTarget.textContent);
        var barId = Bar.findOne({name: template._bar.get()});
        template._barId.set(barId._id);
    }

});

// Template.signIn.created = function(){
//     this._bar = new ReactiveVar('Establishment Name');
// };

// Template.signIn.rendered = function(){
// };

// Template.signIn.helpers({
//     list: function(){
//         console.log('helper', BarName.find({}, {sort: {createdAt: -1}}));
//         return BarName.find({});
//     },
//     nameOfBar: function(){
//         return Template.instance()._bar.get();
//     }
// });

// Template.signIn.events({
//     'click .js-signIn': function(event, template){
//         var barName = template._bar.get();
//         var customerName = $('.customeName').val();

//         var signIn = {
//             barName: barName,
//             customerName: customerName
//         };

//         Meteor.call('signIn', signIn, function(err){
//             if(eff){
//                 console.log(err.reason);
//             }
//         });
//     },
//     'click .barName p': function(event, template){
//         template._bar.set(event.currentTarget.textContent);

//     }

// });