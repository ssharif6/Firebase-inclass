'use strict';

console.log("Hello, world!");

// This is single line comment.

/*
This is multiline comment.
*/
var helloWorld = "Hello, world! 2";

console.log(helloWorld);

var x;

x = "Hello world x!";

x = 7;

console.log(x);

console.log(typeof x);

var test;

console.log(test);

var foo = null;

console.log(null);

var helloItsMe = "Hello, its me";
var howAreYou = "How are you?".toUpperCase();

console.log(helloItsMe + " " + howAreYou);

console.log(Math.sqrt(4));

var bool = true;

if (!bool) {
    console.log('true!');
} else {
    console.log('false!');
}


var truthy = "Truthy";

var falsey = null;

if (falsey) {
    console.log("falsey");
}

if (truthy) {
    console.log(truthy + " is truthy!");
}

// var emptyArr = [];
var arr = ["Hello?", "It's me.", 9];

console.log(arr);

console.log(arr[0]);

arr[3] = "4th element";

console.log(arr);

arr.push("Pushing to end of array");

console.log(arr);

// Objects

var obj = {
    property1: "Property 1",
    property2: "Property 2",
    number3: 3,
    nested: {
        property4: "value"
    },
    9: "9"
};

console.log(obj);

var key2 = 'property2';

console.log(obj.property1);
console.log(obj[key2]);

console.log(obj.nested.property4);
console.log(obj['nested']['property4']);
console.log(obj[9]);

var arr2 = ["loop1", "loop2", "loop3"];

for (var i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

function myFunc(name) {
    console.log(name);
}

myFunc("Jason Nutter");

function addition(num1, num2) {
    console.log(arguments);
    return num1 + num2;
}

console.log(addition(2, 2, 4));

console.log(addition("Jason", 2));

var myFuncVar = function() {
    console.log("Hello, world!!!!! ");
}

// myFuncVar("jason");

function asyncFunc(cb) {
    // Service request

    cb();
}

asyncFunc(myFuncVar);

if (true) {
    var scopeVar = "Hello";
}

console.log(scopeVar);

var closureVar = "Hello2132132";

function closureFunc() {
    console.log(closureVar);
}

closureFunc();
