firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        // logged in
        var database = firebase.database();
        
        var messages = database.ref('channels/general');

        messages.push({
            text: "Hello",
            timeStamp: new Date().getTime()
        });

        messages.on("child_added", function(snapshot) {
            console.log(snapshot.key, snapshot.val());
            var id = snapshot.key; // unique guid
            var message = snapshot.val(); // jObject
            
        });



    } else {
        // signed out
        // redirect to index.html
        window.location.href = "index.html";
    }
});

var database = firebase.database();
        
var messages = database.ref('channels/general');

var messageForm = document.getElementById("message-form");
var messageInput = document.getElementById("message-input");

messageForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var message = messageInput.value;
    messages.push({
        text: message,
        timeStamp: new Date().getTime()
    })
    .then(function () {

    })
    .catch(function() {

    });
});