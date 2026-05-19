// ! Prototypal Inheritance in JavaScript
// & Prototypal inheritance is a fundamental concept in JavaScript where objects can inherit properties and methods from other objects. This is achieved through the prototype chain. Every JavaScript object has a prototype, which is another object that it inherits properties and methods from. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null).

function Person(name){
    this.name=name;
}
Person.prototype.greet=function(){
    console.log(`Hello, my name is ${this.name}`);
}
let alice=new Person("Alice");
let bob=new Person("Bob");
alice.greet();
bob.greet();

console.log('alice', alice.__proto__);
console.log('bob', bob.__proto__);