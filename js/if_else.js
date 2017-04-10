/**
 * Created by Carlos on 4/10/17.
 */
"use strict";

//1

var grade = (70 + 80 + 95)/3;

if (grade > 80) {
    console.log("You're awesome")
} else {
    console.log("You need to practice more")
}

//2

var Cameron = 180;
var Ryan = 250;
var George = 320;

//check if amount is greater than the required discount amount purchase
    //if the amount is greater then discount checkpoint. Apply discount of 35%
    //else return amount spent
//output name of person how much they spent and what they payed with the discount.

if (Cameron > 200) {
    console.log("Cameron bought " + Cameron + " worth of products. Final payment : " + Cameron * .65);
} else {
    console.log("Cameron does not get a discount. Final payment: " + Cameron);
}


if (Ryan > 200) {
    console.log("Ryan bought " + Ryan + " worth of products. Final payment : " + Ryan * .65);
} else {
    console.log("Ryan does not get a discount. Final payment: " + Ryan);
}


if (George > 200) {
    console.log("George bought " + George + " worth of products. Final payment : " + George * .65);
} else {
    console.log("George does not get a discount. Final payment: " + George);
}

//3

var flipACoin = Math.floor(Math.random()* 2);

if (flipACoin === 0) {
    console.log("Buy a car");
} else {
    console.log("Buy a house");
}

var carOrHouse =  (flipACoin === 0) ? "Buy a car" : "Buy a house";

console.log(carOrHouse);