const prompt = require("prompt-sync")();

let userArray = JSON.parse(prompt("Enter an array: "));
let item = userArray;

let itemlength = userArray.length;
let firstItem = item[0]




console.log("The first item in your array is: " + firstItem)