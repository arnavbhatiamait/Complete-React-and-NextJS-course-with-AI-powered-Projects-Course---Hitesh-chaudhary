// ! logical operators

let x = 10;
let y = 20;

// ! and operator (&&)
console.log("Is x greater than 5 AND y less than 30?", x > 5 && y < 30);
// ! or operator (||)
console.log("Is x less than 5 OR y greater than 15?", x < 5 || y > 15);
// ! not operator (!)
console.log("Is x NOT greater than 5?", !(x > 5));


let isEmailUser=true;
let isGoogleUser=false;

console.log("Is the user an email user AND a Google user?", isEmailUser && isGoogleUser);
console.log("Is the user an email user OR a Google user?", isEmailUser || isGoogleUser);
console.log("Is the user NOT an email user?", !isEmailUser);