ES6 Classes and syntax

1. `class` is syntactic sugar

- `class` in JavaScript provides clearer syntax to declare constructors and prototype methods. It does not change the prototype-based model.

1. Basic class

```js
class Vehicle {
  constructor(make, model){
    this.make = make;
    this.model = model;
  }
  start(){ return `Starting the ${this.make} ${this.model}`; }
}

const v = new Vehicle('Toyota','Corolla');
```

1. Inheritance with `extends` and `super`

- `class Car extends Vehicle` sets up prototype inheritance and allows subclass constructors to call `super()` to initialize the parent.

1. `static` methods

- `static` methods live on the constructor itself, not on instances. Useful for helpers related to the class.

1. Private fields (`#`)

- Modern JS supports private instance fields using `#fieldName`. They are enforced by the runtime, not accessible from outside.

```js
class BankAccount{
  #balance = 0;
  deposit(amount){ this.#balance += amount; }
  get balance(){ return this.#balance; }
}
```

1. Getters and setters

- Use `get` and `set` to expose controlled access to state. They appear as properties to callers.

1. Differences vs constructor functions

- Classes are not hoisted the same way as function declarations and must be invoked with `new`.
