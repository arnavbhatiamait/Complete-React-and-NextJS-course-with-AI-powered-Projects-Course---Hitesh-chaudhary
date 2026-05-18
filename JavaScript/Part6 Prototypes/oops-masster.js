let car={
    make:"Toyota",
    model:"Camry",
    year:2020,
    start:function(){
        return `Starting the ${this.make} ${this.model}`;
    }
}
console.log(car);

function Person(name, age){
    this.name = name;
    this.age = age;
}
let person1 = new Person("Arnav", 25);
console.log(person1.name);
console.log(person1.age);

function Animal(type){
    this.type = type;   
}

Animal.prototype.sound = function(){
    return `The ${this.type} makes a sound.`;
}
let dog = new Animal("Dog");

Array.prototype.arnav=function(){   
    return `This is an array ${this}`;
}

let myArray = [1,2,3];
console.log(myArray.arnav());
let myNewArray = ["a","b","c"];
console.log(myNewArray.arnav());

// ! classes
class Vehicle{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    start(){
        return `Starting the ${this.make} ${this.model}`;
    }
}

// ! inheritance
// & Inheritance is a fundamental concept in object-oriented programming that allows a new class (called a child or subclass) to inherit properties and methods from an existing class (called a parent or superclass). This promotes code reusability and establishes a natural hierarchical relationship between classes. For example, if we have a Vehicle class with properties like make and model, we can create a Car class that inherits from Vehicle and adds additional properties or methods specific to cars.
class Car extends Vehicle{
    drive(){
        return `Driving the ${this.make} ${this.model} this is inherited from Vehicle class`;
    }
}

let myCar = new Car("Honda", "Civic");
console.log(myCar.start());
console.log(myCar.drive());

let veh1=new Vehicle("Toyota", "Corolla");
console.log(veh1.start());
// ! This will throw an error because we are not using the new keyword to create an instance of the Vehicle class.
// let veh2=Vehicle("Ford", "Mustang");
// console.log(veh2.start());

// ! Encapsulation
// & Encapsulation is the concept of bundling data and methods that operate on that data within a single unit, such as a class. This helps to protect the internal state of an object and only expose necessary parts. For example, in a BankAccount class, we can encapsulate the balance property and provide methods to deposit and withdraw money without allowing direct access to the balance from outside the class.
class BankAccount{
    // ^ here balance is a private property, it cannot be accessed directly from outside the class
    #balance=0
    
    deposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }
    getBalance(){
        return `Balance: $${this.#balance}`;
    }}

let myAccount = new BankAccount();
console.log(myAccount.deposit(100));
console.log(myAccount.getBalance());
// ! This will throw an error because we are trying to access a private property directly from outside the class.
// console.log(myAccount.#balance);

// !Abstraction
// & Abstraction is the concept of hiding the internal details of an object and only exposing the necessary parts. This is achieved through the use of classes and objects in JavaScript. For example, when we create a class for a coffee machine, we can hide the internal workings of how the coffee is made and only expose a method to make coffee.
class CoffeeMachine{
    start(){
        return "Starting the coffee machine...";
    }
    brewCoffee(){
        return "Brewing coffee...";
    }
    pressButton(){
        return this.start() + " " + this.brewCoffee();
    }
}
let myCoffeeMachine = new CoffeeMachine();
console.log(myCoffeeMachine.start());
console.log(myCoffeeMachine.brewCoffee());
console.log(myCoffeeMachine.pressButton());


// ! Polymorphism
// & Polymorphism is the ability of different classes to be treated as instances of the same class through inheritance. This allows for methods to be overridden in child classes, providing different implementations while maintaining a consistent interface. For example, if we have a base class called Shape with a method called area(), we can create child classes like Circle and Rectangle that override the area() method to calculate the area specific to their shape.
class Bird{
    fly(){
        return "The bird is flying.";
    }

}

class Penguin extends Bird{
    fly(){
        return "Penguins can't fly, but they can swim!";
    }
}
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());


// ! static methods
// & Static methods are methods that belong to the class itself rather than to instances of the class. They can be called without creating an instance of the class. For example, in a MathUtils class, we can have static methods for common mathematical operations like addition and subtraction.
class MathUtils{
    static add(a, b){
        return a + b;
    }
    static subtract(a, b){
        return a - b;
    }
}

console.log(MathUtils.add(5, 3));
console.log(MathUtils.subtract(5, 3));


// ! getters and setters
// & Getters and setters are special methods that allow you to get and set the values of an object's properties while providing control over how those properties are accessed and modified. For example, in a User class, we can have a private property for the user's password and use a getter to retrieve it and a setter to update it while ensuring that the password meets certain criteria.
class Employee{
    #salary;
    constructor(name, salary){
        if (salary < 0){
            throw new Error("Salary must be a positive number.");
        }
        this.name = name;
        this.#salary = salary; // #salary is a convention to indicate that it's a private property
    }
    get salary(){
        // return this.#salary;
        
        return `you are not allowed to access the salary directly.`;
    }
    set salary(newSalary){
        if (newSalary > 0){
            this.#salary = newSalary;
        } else {
            console.log("Salary must be a positive number.");
        }
    }
}

let emp = new Employee("John", 50000);
console.log(emp.name);
console.log(emp.salary);
emp.salary = 60000; // using the setter to update the salary
console.log(emp.salary);
emp.salary = -1000; // trying to set an invalid salary