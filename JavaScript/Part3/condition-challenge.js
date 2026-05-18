// ! Checking if a number is greater than another number:
let num1 = 5;
let num2 = 8;
if (num1 > num2) {
    console.log(" num 1 is greater than num2");
} else {
    console.log("Nope, num1 is NOT greater");
}

// ! Checking if a string is equal to another string:

let username = "chai";
let another="chai";
// let another="chai1";

if (username == another) {
    console.log("Pick another username");
}
else {
    console.log("You can pick this username");
}

// ! Checking if a variable is a number or not:
let score = "44";
let score2=44;
if (typeof score === "number") {   
    console.log("Yep, this is a number");
} else {
    console.log("No that is not a number");
}
if (typeof score2 === "number") {
    console.log("Yep, this is a number");
} else {
    console.log("No that is not a number");
}

// ! Checking if a boolean value is true or false:
let trueValue = true;
let falseValue = false;
if (trueValue) {
    console.log("This is true");
} 
if (falseValue) {
    console.log("This is true");
}else{
    console.log("This is false");
}
// ! Checking if an array is empty or not:

let items=[];
if (items.length == 0) {
    console.log("Array is empty");
} else {
    console.log("Array is NOT empty");
}