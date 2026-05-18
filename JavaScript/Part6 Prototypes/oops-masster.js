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
let veh2=Vehicle("Ford", "Mustang");
console.log(veh2.start());