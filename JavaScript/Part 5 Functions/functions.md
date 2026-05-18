# Functions in JavaScript

Functions are one of the most important concepts in JavaScript.
A function is a reusable block of code designed to perform a specific task.

---

# Why Functions are Important

Functions help:

* Reuse code
* Organize logic
* Reduce repetition
* Improve readability
* Make debugging easier

---

# Basic Syntax of a Function

```javascript id="y5ob1x"
function functionName(parameters){
    // code
    return value;
}
```

---

# 1. Normal Function (Function Declaration)

## Code

```javascript id="ic3h0m"
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

console.log(makeTea("green tea"));
```

---

## Explanation

### Function Declaration

```javascript id="lk73jv"
function makeTea(typeOfTea)
```

* `function` keyword creates a function
* `makeTea` is the function name
* `typeOfTea` is a parameter

---

## Parameter

A parameter is a variable passed into a function.

```javascript id="jqz2m5"
typeOfTea
```

When calling the function:

```javascript id="8sdu9g"
makeTea("green tea")
```

`"green tea"` becomes the argument.

---

## Return Statement

```javascript id="8xtvza"
return `Making ${typeOfTea}`;
```

* `return` sends a value back from the function
* Template literals use backticks `` ` ``
* `${}` inserts variables into strings

---

## Output

```text id="v6pnru"
Making green tea
```

---

# Function Execution Flow

```text id="pkwpjr"
makeTea("green tea")
        ↓
typeOfTea = "green tea"
        ↓
return "Making green tea"
```

---

# 2. Nested Function (Function Inside Function)

## Code

```javascript id="2fhp0e"
function orderTea(teaType){

    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    }

    return confirmOrder();
}

let orderConfirmation = orderTea("chai");

console.log(orderConfirmation);
```

---

# What is a Nested Function?

A nested function is a function defined inside another function.

---

# Step-by-Step Explanation

## Outer Function

```javascript id="jjzv8g"
function orderTea(teaType)
```

This function accepts a tea type.

---

## Inner Function

```javascript id="u40rpi"
function confirmOrder()
```

This function exists only inside `orderTea`.

---

# Closure Concept

The inner function can access variables from the outer function.

```javascript id="4m5pc4"
teaType
```

Even though `confirmOrder` does not have `teaType` as a parameter, it can still use it.

This is called a **closure**.

---

# Returning Inner Function Result

```javascript id="7z9ewg"
return confirmOrder();
```

This executes the inner function and returns its result.

---

# Output

```text id="a9w1w8"
Order confirmed for chai
```

---

# Scope Visualization

```text id="d80f8l"
orderTea Scope
│
├── teaType = "chai"
│
└── confirmOrder()
      │
      └── Can access teaType
```

---

# 3. Arrow Function

## Code

```javascript id="n73o8t"
const calculateTotal = (price, quantity) => {
    return price * quantity;
}

let totalCost = calculateTotal(499,100);

console.log(totalCost);
```

---

# What is an Arrow Function?

Arrow functions are a shorter way to write functions.

Introduced in ES6.

---

# Syntax Breakdown

## Traditional Function

```javascript id="rkrj4e"
function add(a,b){
    return a+b;
}
```

## Arrow Function

```javascript id="d0r7lk"
const add = (a,b) => {
    return a+b;
}
```

---

# Explanation

## Function Stored in Variable

```javascript id="81kkis"
const calculateTotal
```

Functions can be stored inside variables.

---

## Arrow Operator

```javascript id="0b9v8m"
=>
```

This replaces the `function` keyword.

---

# Parameters

```javascript id="9lw7x6"
(price, quantity)
```

Inputs to the function.

---

# Return Value

```javascript id="4lq9a5"
return price * quantity;
```

Calculates total price.

---

# Output

```text id="5f5tjr"
49900
```

---

# Short Arrow Function Syntax

If only one line:

```javascript id="2dkfmi"
const multiply = (a,b) => a*b;
```

Implicit return happens automatically.

---

# Important Difference: `this`

Arrow functions do NOT create their own `this`.

They inherit `this` from the parent scope.

---

# 4. Higher-Order Function

## Code

```javascript id="08x9ma"
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}

function processTeaOrder(teaFunction,arg){
    return teaFunction(arg);
}

console.log(processTeaOrder(makeTea,"green tea"));
```

---

# What is a Higher-Order Function?

A higher-order function:

* Takes another function as an argument
* OR returns another function

---

# Function as Parameter

```javascript id="y6ydy0"
processTeaOrder(makeTea,"green tea")
```

Here:

* `makeTea` is passed as a function
* `"green tea"` is another argument

---

# Function Reference vs Function Call

## Function Reference

```javascript id="5ht1ru"
makeTea
```

Means:

> Pass the function itself

---

## Function Call

```javascript id="0zhxq6"
makeTea()
```

Means:

> Execute the function

---

# Execution Flow

```text id="7q6zyz"
processTeaOrder(makeTea, "green tea")
            ↓
teaFunction = makeTea
arg = "green tea"
            ↓
teaFunction(arg)
            ↓
makeTea("green tea")
            ↓
"Making green tea"
```

---

# Output

```text id="4y5npr"
Making green tea
```

---

# Why Higher-Order Functions Matter

They are heavily used in:

* Callbacks
* Event handling
* Array methods
* Functional programming
* React

Examples:

```javascript id="jv9lzm"
map()
filter()
reduce()
```

---

# 5. Function Returning Another Function

## Code

```javascript id="k5k7n7"
function createTeaMaker(){

    let teaMaker = (teaType)=>{
        return `Making ${teaType} `;
    }

    return teaMaker;
}

let teaMaker = createTeaMaker();

console.log(teaMaker("green tea"));
```

---

# What Happens Here?

This function returns another function.

---

# Step-by-Step

## Outer Function

```javascript id="j15h87"
function createTeaMaker()
```

Creates and returns a function.

---

## Inner Arrow Function

```javascript id="bbp0tb"
let teaMaker = (teaType)=>{
    return `Making ${teaType}`;
}
```

This function is stored in a variable.

---

## Returning Function

```javascript id="xsk0lb"
return teaMaker;
```

The function itself is returned.

NOT:

```javascript id="14dhmn"
return teaMaker();
```

Because that would execute it immediately.

---

# Storing Returned Function

```javascript id="91ehw9"
let teaMaker = createTeaMaker();
```

Now:

```javascript id="0a8b3s"
teaMaker
```

contains a function.

---

# Calling Returned Function

```javascript id="d7klhn"
teaMaker("green tea")
```

---

# Output

```text id="p7m7sh"
Making green tea
```

---

# Visualization

```text id="4s8brs"
createTeaMaker()
        ↓
returns another function
        ↓
teaMaker = returned function
        ↓
teaMaker("green tea")
```

---

# Closures in Returned Functions

Returned functions remember variables from their parent scope.

Example:

```javascript id="y6q6tl"
function outer(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}
```

This is a powerful JavaScript concept called a **closure**.

---

# Types of Functions Covered

| Function Type               | Description                      |
| --------------------------- | -------------------------------- |
| Normal Function             | Standard reusable function       |
| Nested Function             | Function inside another function |
| Arrow Function              | Short syntax function            |
| Higher-Order Function       | Takes function as argument       |
| Function Returning Function | Returns another function         |

---

# Important Concepts Learned

## Parameters vs Arguments

```javascript id="g6qm2q"
function demo(param){}

demo(argument);
```

* Parameter → variable in function definition
* Argument → actual value passed

---

# Return Keyword

```javascript id="m0vb1m"
return value;
```

* Stops function execution
* Sends value back

---

# Scope

Variables are accessible only within their scope.

Types:

* Global scope
* Function scope
* Block scope

---

# Closures

Inner functions remember variables from outer functions even after outer function execution ends.

---

# Functions are First-Class Citizens

In JavaScript:

* Functions can be stored in variables
* Passed as arguments
* Returned from functions

---

# Final Summary

JavaScript functions are extremely powerful because they:

* Support reusable logic
* Allow functional programming
* Enable asynchronous behavior
* Form the foundation of frameworks like React and Node.js

Mastering functions is one of the biggest steps toward becoming strong in JavaScript.
