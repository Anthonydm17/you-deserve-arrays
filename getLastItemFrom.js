const prompt = require("prompt-sync")();

let userArray = JSON.parse(prompt("Enter an array: "));
let item = userArray;

let itemlength = userArray.length;
let firstItem = item[itemlength-1];




console.log("The first item in your array is: " + firstItem)