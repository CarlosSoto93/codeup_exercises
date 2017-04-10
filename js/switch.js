/**
 * Created by Carlos on 4/10/17.
 */

"use strict";

var luckyNumber = Math.floor(Math.random()* 6);
var costOfReceipt = 60;
var numberOne = .90;
var numberTwo = .75;
var numberFour = .50;
var numberFive = 0;


switch (luckyNumber) {
    case 1 :
        console.log("10% off, you pay: " + "$" + costOfReceipt * numberOne);
        break;
    case 2 :
        console.log("25% off, you pay: " + "$" + costOfReceipt * numberTwo);
        break;
    case 4 :
        console.log("50% off, you pay: " + "$" + costOfReceipt * numberFour);
        break;
    case 5 :
        console.log("100% off. you pay: " + "$" + costOfReceipt * numberFive);
        break;
    default:
        console.log("No discount, you pay: " + "$" + costOfReceipt);
}




switch (luckyNumber) {
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("Febuary");
        break;
    case 3 :
        console.log("March");
        break;
    case 4 :
        console.log("April");
        break;
    case 5 :
        console.log("May");
        break;
    default :
        console.log("0 is not a month");
        break;
}