"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var userName = prompt("What is you name?");

while (userName === "") {
    userName = prompt("What is you name?");
}

// TODO: Show an alert message that welcomes the user based on their input.

alert("Welcome " + userName + "!");


// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var pizzaYesNo = confirm("Do you like pizza?");

if(pizzaYesNo) {
    alert("Me too");
}else {
    alert("What? you don't.");
}

//bonus

var registered = confirm("are you registered?");

if (registered) {
    var logedInUser = prompt("Enter Username");
    prompt("Enter Password");
}else {
    logedInUser = prompt("Create a Username");
    prompt("Create a Password");
}

alert("Welcome " + logedInUser);