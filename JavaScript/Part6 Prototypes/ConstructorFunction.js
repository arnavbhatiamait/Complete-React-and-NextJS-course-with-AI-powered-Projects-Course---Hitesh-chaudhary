function Person(name, age) {
    this.name = name;
    this.age = age;

}

function Car(make, model) {
    this.make = make;
    this.model = model;
}


let myCar = new Car("Tesla", "Model S");
console.log(myCar);
console.log(myCar.make);
console.log(myCar.model);

let myNewCar = new Car("BMW", "X5");
console.log(myNewCar);

function Tea(type){
    this.type = type;
    this.describe=function(){
        return `This is a ${this.type} tea.`;
    }
}

let lemonTea = new Tea("lemon");
console.log(lemonTea);
console.log(lemonTea.describe());

function Animal(species){
    this.species = species;
}
// ~! Adding a method to the prototype of the constructor function
Animal.prototype.sound = function(){
    return `The ${this.species} makes a sound.`;
}

let dog = new Animal("dog");
console.log(dog);
console.log(dog.sound());

function Drink(name){
if (! new.target) {
    throw new Error("Drink must be called with new");}
    this.name = name;


}
let tea = new Drink("tea");
console.log(tea);
// let coffee =  Drink("coffee"); // !This will throw an error because we are not using the new keyword to create an instance of the Drink constructor function.
// console.log(coffee);
