const prompt = require("prompt-sync")();

let userArray = JSON.parse(prompt("Enter an array: "));
let item = userArray;

var itemcount;

if (item.length >= 10){
    itemcount = true;
    console.log("true");
}else (
    console.log("false")
)
