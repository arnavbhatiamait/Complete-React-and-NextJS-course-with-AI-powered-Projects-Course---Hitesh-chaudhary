let username={name: "arnav", age: 25,isLoggedIn: true};
console.log("Username Object:", username);
console.log("Type of username:", typeof username);
console.log("Username Object:", username['age']);
console.log("Username Object:", username.name);


const myFirstName="Arnav";
const myLastName="Bhatia";
const myFullName=myFirstName+" "+myLastName;
console.log("My Full Name:", myFullName);

// ! can change the properties of an object but cannot reassign the object itself
const anotherFullName={
    firstName: "Arnav",
    lastName: "Bhatia",
}
anotherFullName.firstName="Arnav ji";
console.log("Another Full Name Object:", anotherFullName);
console.log("Type of anotherFullName:", typeof anotherFullName);



let today=new Date();
console.log("Today:", today.getDate());


// ! array
let names=["arnav", "bhatia", "john", "doe"];
console.log("Names Array:", names);


// !map
names.map((name) => {
    console.log("Name:", name);
}   );

// ! filter and map
names.filter((name) => {
    return name.startsWith("a");
}).map((name) => {
    console.log("Name starting with a:", name);
});


// ! type conversion
console.log(1+'1'); // "11"
console.log(1+Number('1')); // 2

let isValue="jdkca1";
console.log(isValue+1);
console.log(Number(isValue)+1);