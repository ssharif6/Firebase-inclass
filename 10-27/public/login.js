// Store our DOM elements
var loginForm = document.getElementById("login-form");
var loginEmail = document.getElementById("login-email");
var loginPassword = document.getElementById("login-password");
var loginButton = document.getElementById("login-button");

// When the user logs in, send the email and password to firebase.
// Firebase will determine whether or not the user logged in correctly.
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var email = loginEmail.value;
    var password = loginPassword.value;

    // console.log(email);
    // console.log(password);

    // If the login was successful, the .then callback will be called.
    // Otherwise, the .catch callback will be called,
    // with an error object containing the error message.
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      console.log("Logged in successfully!");
    })
    .catch(function(error) {
      console.log(error.message);
    });
});

var signupForm = document.getElementById("signup-form");
var signupEmail = document.getElementById("signup-email");
var signupName = document.getElementById("signup-name");
var signupPassword = document.getElementById("signup-password");
var signupPasswordConfirm = document.getElementById("signup-password-confirm");
var signUperror = document.getElementById("signup-error");

signupForm.addEventListener("submit", function(e) {
    e.preventDefault();
    signUperror.classList.remove("active");

    var displayName = signupName.value;
    var email = signupEmail.value;
    var password = signupPassword.value;
    var passwordConfirm = signupPasswordConfirm.value;

    if(password !== passwordConfirm) {
        signUperror.textContent = "Passwords do not match!";
        signUperror.classList.add("active");
    } else {
        // passwords equal
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log(user);
            // send verificationEmail
            
            // Update their display name and profile picture
            // displayName, photoUrl

            // Redirect to chat page
            window.location.href = "chat.html";

        })
        .catch(function(err) {
            signUperror.textContent = err.message;
            signUperror.classList.add("active");
        });
    }
});


// This callback is called whenever the user's logged in state changes,
// e.g. when the page first loads, when a user logs in, when a user logs out.
firebase.auth().onAuthStateChanged(function(user) {
  // If the user parameter is truthy,
  // the user is logged in.
  if (user) {
      console.log("signed in");

      // Connect to your project's database.
      var database = firebase.database();

      // This code detects when the value of "test" changes
      var testRef = database.ref('test');
      testRef.on('value', function(snapshot) {
          var val = snapshot.val();

          console.log(val);
      });

      // This sets the value of "test2"
      var testRef2 = database.ref('test2');
      testRef2.set('Hello from VS Code! Again');

      // This sets the value of test3.hello
      database.ref('test3/hello').set('test 3');
  } else {
    // Otherwise, they have not signed in.
    console.log("signed out");
  }
});