Bar = new Mongo.Collection('bar');
Cust = new Mongo.Collection('cust');
Requests = new Mongo.Collection('requests');
HMC = new Mongo.Collection('HMC');
AB = new Mongo.Collection('AB');


// Albums = new Mongo.Collection( 'albums' );

// if ( Meteor.isServer ) {
//   Albums._ensureIndex( { title: 1, artist: 1, year: 1 } );
// }

// Albums.allow({
//   insert: () => false,
//   update: () => false,
//   remove: () => false
// });

// Albums.deny({
//   insert: () => true,
//   update: () => true,
//   remove: () => true
// });

// let AlbumsSchema = new SimpleSchema({
//   'title': {
//     type: String,
//     label: 'The title of this album.'
//   },
//   'artist': {
//     type: String,
//     label: 'The artist of this album.'
//   },
//   'year': {
//     type: String,
//     label: 'The year this album was released.'
//   }
// });

// Albums.attachSchema( AlbumsSchema );