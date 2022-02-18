const prompt = require("prompt-sync")();

let userArray = JSON.parse(prompt("Enter an array: "));
let item = userArray;

let itemlength = userArray.length;
let lastItem = item[item.length-1];
let index3= item[3]


if (userArray[index3]=""){
    console.log("The third item in your array is: " + index3)
}
else {
console.log("The last item in your array is: " + lastItem)
}