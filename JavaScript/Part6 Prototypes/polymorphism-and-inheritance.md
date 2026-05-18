Polymorphism & inheritance

1. Inheritance recap

- Subclasses inherit properties and methods from their parent prototype. Use `extends` (class) or set the prototype chain (constructor functions) to establish this.

1. Polymorphism

- Polymorphism means different object types can be used interchangeably if they implement the same interface (method names/signature). In JS this is duck-typing: if it quacks like a duck, it's a duck.

1. Method overriding and `super`

- Subclasses can override parent methods. Use `super.method()` inside classes to call the parent implementation.

1. `instanceof` and `constructor`

- `obj instanceof Constructor` checks whether Constructor.prototype is on obj's prototype chain.
- `obj.constructor` returns the constructor property, but it can be reassigned; prefer `instanceof`.

1. Example

```js
class Shape{ area(){ return 0; }}
class Circle extends Shape{ constructor(r){ super(); this.r=r;} area(){ return Math.PI*this.r*this.r; }}
```

1. Liskov Substitution Principle (practical)

- A subclass should be substitutable for its parent. Avoid surprising behavior in overridden methods.
