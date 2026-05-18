// ! number
let balance=120;
console.log("Balance:", balance);
console.log("Type of balance:", typeof balance);
// !object
let anotherBalance=new Number(150);
console.log("Another Balance:", anotherBalance);
console.log("Type of anotherBalance:", typeof anotherBalance);

// ! string
let username="arnav";
let singlestring='a';
let backtickString=`Hello, ${username}!`;
let oldway="Hello, " + username + "!";
console.log("Backtick String:", backtickString);
console.log("Username:", username);
console.log("Old Way String:", oldway);
console.log("Single String:", singlestring);
console.log("Username:", username);
console.log("Type of username:", typeof username);
// ! string object
let anotherUsername=new String("bhatia");
console.log("Another Username:", anotherUsername);
console.log("Type of anotherUsername:", typeof anotherUsername);

// ! boolean
let isLoggedIn=true;
console.log("Is Logged In:", isLoggedIn);
console.log("Type of isLoggedIn:", typeof isLoggedIn);
// ! boolean object
let anotherIsLoggedIn=new Boolean(false);
console.log("Another Is Logged In:", anotherIsLoggedIn);
console.log("Type of anotherIsLoggedIn:", typeof anotherIsLoggedIn);

// ! null and 
let userEmail=null;
console.log("User Email:", userEmail);
console.log("Type of userEmail:", typeof userEmail);

// !undefined`
let userPhone;
console.log("User Phone:", userPhone);
console.log("Type of userPhone:", typeof userPhone);


// ! symbol
let sm1=Symbol()
let sm2=Symbol()
console.log("Symbol 1:", sm1);
console.log("Symbol 2:", sm2);
console.log("Are sm1 and sm2 equal?", sm1 === sm2);
