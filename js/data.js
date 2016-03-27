//GLOBAL VARIABLES
var FIREBASE_REF = new Firebase("https://our-food-journal.firebaseio.com");

function fetchEverything(callback) {
    var ref = FIREBASE_REF.child('/');
    ref.once("value", function(snapshot) {
        callback(snapshot.val());
    });
}
