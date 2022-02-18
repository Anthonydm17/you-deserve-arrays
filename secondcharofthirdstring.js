// 6. `secondCharOfThirdString.js`: prompts the user for an array then logs the second character in the third item in the array.
//  If the third item is not a string, log an error instead

const prompt = require("prompt-sync")();

var number = JSON.parse((prompt("Enter an Array: ")));

let item3 = number[2];
let char2 = item3[1];

if (typeof item3 === "string"){
    console.log(char2)
}
else if (typeof item3 !== "string"){
    console.log("Error")
}
