var functions = require('firebase-functions');
var defaultStorage = firebase.storage();

function scrollWin() {
    window.scrollTo(0, 0);
}
function changefontsizetossmall(){
  document.getElementById("body").style.fontSize = "small";
}
function changefontsizetomedium(){
  document.getElementById("body").style.fontSize = "medium";
}
function changefontsizetolarge(){
  document.getElementById("body").style.fontSize = "large";
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
