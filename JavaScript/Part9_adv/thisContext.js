const person={
    name:"Hitesh",
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
}
person.greet();
// ! this keyword
// ^ this keyword refers to the object that is currently executing the code. It allows you to access properties and methods of the current object.

// const greetFunction=person.greet;
// greetFunction();
// ! here we are calling the greet function without the person object, so this will refer to the global object (window in browsers) and since there is no name property on the global object, it will return undefined.

const boundGreetFunction=person.greet.bind({name:"arnav"});
boundGreetFunction();
// ! here we are using the bind method to bind the greet function to the person object, so this will refer to the person object and it will return "Hello, my name is Hitesh".

// ! bind ,call,apply
function introduce(greeting){
    console.log(`${greeting}, my name is ${this.name}`);
}
introduce.call({name:"arnav"}, "Hi");
// ! here we are using the call method to call the introduce function with the person object as the this value and "Hi" as the argument for the greeting parameter.
introduce.apply({name:"arnav"}, ["Hello","hi"]);
// ! here we are using the apply method to call the introduce function with the person object as the this value and ["Hello"] as the argument for the greeting parameter. The apply method takes an array of arguments, while the call method takes individual arguments.


// ! difference between bind, call and apply
// & bind returns a new function with the this value set to the provided object, while call and apply immediately invoke the function with the this value set to the provided object.
// & call takes individual arguments, while apply takes an array of arguments.
// & bind is used when you want to create a new function with a specific this value, while call and apply are used when you want to invoke a function with a specific this value.
// ^ apply with multiple arguments is useful when you have an array of arguments that you want to pass to a function, while call is more convenient when you have individual arguments. 