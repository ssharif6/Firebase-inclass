var foo = "bar";

function myFunction() {
    var baz = "foo";

    console.log(baz);

    if (1 === 1) {
        var myVar = 1;
    }

    function inner() {

    }

    console.log(myVar);

    console.log(foo);
}

function myFunction2() {
    var var2 = "var 2";
}

myFunction();
myFunction2();

console.log(BABY_NAMES);

var myButton = document.getElementById('my-button');

console.log(myButton);

var myClassElements = document.getElementsByClassName('my-class');

console.log(myClassElements);

for (var i = 0; i < myClassElements.length; i++) {
    console.log(myClassElements.item(i));
}

var myClassQuery = document.querySelectorAll(".my-class");

console.log("myClassQuery", myClassQuery);


var linkContainer = document.querySelector(".link-container");
var newLink = document.createElement("a");
newLink.setAttribute("href", "http://uw.edu");
newLink.textContent = "Link to UW.edu";

linkContainer.appendChild(newLink);

var innerHtmlDiv = document.querySelector(".inner-html");
var lorem = document.querySelector(".lorem");

// innerHtmlDiv.removeChild(lorem);
innerHtmlDiv.innerHTML = "";