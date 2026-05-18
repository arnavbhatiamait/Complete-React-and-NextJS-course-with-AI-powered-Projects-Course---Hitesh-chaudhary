# Difference Between Arrow Functions and Normal Functions in JavaScript

| Feature            | Normal Function              | Arrow Function                          |
| ------------------ | ---------------------------- | --------------------------------------- |
| Syntax             | Uses `function` keyword      | Uses `=>` arrow syntax                  |
| `this` Binding     | Has its own `this`           | Inherits `this` from parent scope       |
| Hoisting           | Fully hoisted                | Not fully hoisted                       |
| `arguments` Object | Available                    | Not available                           |
| Constructor Usage  | Can be used with `new`       | Cannot be used with `new`               |
| Best Use Case      | Object methods, constructors | Short callbacks, functional programming |
| Implicit Return    | No                           | Yes (single-line functions)             |
| Prototype Property | Has prototype                | No prototype                            |
| Readability        | Better for large logic       | Better for short functions              |

---

# 1. Syntax Difference

## Normal Function

```javascript id="zhuhf4"
function add(a, b) {
    return a + b;
}
```

---

## Arrow Function

```javascript id="m72d2y"
const add = (a, b) => {
    return a + b;
}
```

---

# Shorter Arrow Function

```javascript id="4zpd4v"
const add = (a, b) => a + b;
```

This automatically returns the value.

---

# 2. `this` Keyword Difference

This is the MOST important difference.

---

# Normal Function → Own `this`

```javascript id="mg2wyy"
const user = {
    name: "Arnav",

    greet: function() {
        console.log(this.name);
    }
}

user.greet();
```

## Output

```text id="9nl5i4"
Arnav
```

Here:

```javascript id="c66j0l"
this
```

refers to the object calling the function.

---

# Arrow Function → No Own `this`

```javascript id="g6e4c2"
const user = {
    name: "Arnav",

    greet: () => {
        console.log(this.name);
    }
}

user.greet();
```

## Output

```text id="z9ux1l"
undefined
```

Why?

Arrow functions inherit `this` from the surrounding scope.

They do NOT create their own `this`.

---

# Visualization

## Normal Function

```text id="4w5n2m"
Object
  └── function()
        └── own this
```

---

## Arrow Function

```text id="3v0ffv"
Object
  └── arrow function
        └── parent this
```

---

# 3. Hoisting Difference

---

# Normal Function is Hoisted

```javascript id="5g1py4"
sayHello();

function sayHello() {
    console.log("Hello");
}
```

✅ Works perfectly.

---

# Arrow Function is NOT Fully Hoisted

```javascript id="ehvk2y"
sayHello();

const sayHello = () => {
    console.log("Hello");
}
```

❌ Error:

```text id="s7fdmr"
Cannot access before initialization
```

Because arrow functions are stored in variables.

---

# 4. `arguments` Object

---

# Normal Function Has `arguments`

```javascript id="xxm0cf"
function showArgs() {
    console.log(arguments);
}

showArgs(1,2,3);
```

## Output

```text id="7m6h5v"
[1,2,3]
```

---

# Arrow Function Does NOT Have `arguments`

```javascript id="cbf9cb"
const showArgs = () => {
    console.log(arguments);
}
```

❌ Error:

```text id="ksr57r"
arguments is not defined
```

---

# Alternative in Arrow Functions

Use rest operator:

```javascript id="kqly3t"
const showArgs = (...args) => {
    console.log(args);
}
```

---

# 5. Constructor Difference

---

# Normal Functions Can Be Constructors

```javascript id="trdzt8"
function Person(name){
    this.name = name;
}

const user = new Person("Arnav");

console.log(user.name);
```

✅ Works.

---

# Arrow Functions Cannot Be Constructors

```javascript id="gz0g91"
const Person = (name) => {
    this.name = name;
}

const user = new Person("Arnav");
```

❌ Error:

```text id="ojqvwb"
Person is not a constructor
```

---

# 6. Prototype Difference

---

# Normal Function Has Prototype

```javascript id="qxh1wu"
function demo(){}

console.log(demo.prototype);
```

✅ Exists.

---

# Arrow Function Has No Prototype

```javascript id="j9y4m4"
const demo = () => {}

console.log(demo.prototype);
```

## Output

```text id="a6ebsz"
undefined
```

---

# 7. Use Cases

---

# Use Normal Functions When:

✅ Working with:

* Object methods
* Constructors
* Classes
* Dynamic `this`
* Event listeners needing own context

Example:

```javascript id="sjx9ph"
const car = {
    brand: "BMW",

    start: function() {
        console.log(this.brand);
    }
}
```

---

# Use Arrow Functions When:

✅ Working with:

* Short callbacks
* Functional programming
* Array methods
* React functional components
* Lexical `this`

Example:

```javascript id="up6s1o"
const nums = [1,2,3];

const doubled = nums.map(num => num * 2);
```

---

# Real Interview Question

## Why are arrow functions popular in React?

Because arrow functions inherit `this` from the component scope, avoiding manual binding.

---

# Example with `setTimeout`

---

# Normal Function Problem

```javascript id="0fj4m8"
function Counter(){
    this.count = 0;

    setTimeout(function(){
        console.log(this.count);
    },1000);
}

new Counter();
```

## Output

```text id="skc8fu"
undefined
```

Because `this` changes inside normal function.

---

# Arrow Function Solution

```javascript id="q0pm7f"
function Counter(){
    this.count = 0;

    setTimeout(() => {
        console.log(this.count);
    },1000);
}

new Counter();
```

## Output

```text id="ayjg59"
0
```

Arrow function inherits parent `this`.

---

# Memory Perspective

Arrow functions are lightweight because:

* No own `this`
* No `arguments`
* No prototype

This makes them faster for small callbacks.

---

# Final Summary

| Use Arrow Function     | Use Normal Function   |
| ---------------------- | --------------------- |
| Short callbacks        | Constructors          |
| Array methods          | Object methods        |
| Lexical `this` needed  | Dynamic `this` needed |
| Functional programming | Traditional OOP       |

---

# Simple Rule to Remember

```text id="w4ajc8"
Arrow Function
→ Small & lexical this

Normal Function
→ Full-featured traditional function
```
