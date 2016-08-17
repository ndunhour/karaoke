function create_collection(name) {
    // Meteor.call('create_server_col', name, function(err,result) {
    //     if(!err) {
    //         if(result) {
    //             //make sure name is safe
    //             alert("Collection made");
    //             console.log('res', result);
    //             console.log('coll', collections);
    //         } else {
    //             alert("This collection already exists");
    //         }
    //     }
    //     else
    //     {
    //         alert("Error see console");
    //         console.log(err);
    //     }
    // });
    alert('hi' + name);
}





Bar = new Mongo.Collection('bar');
Cust = new Mongo.Collection('cust');
Requests = new Mongo.Collection('requests');
HMC = new Mongo.Collection('HMC');
AB = new Mongo.Collection('AB');