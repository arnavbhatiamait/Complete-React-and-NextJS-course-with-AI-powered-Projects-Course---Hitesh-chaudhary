// ! generatorIterator in js
// ^ Generator functions are a special type of function that can be paused and resumed, allowing you to generate a sequence of values on the fly. They are defined using the `function*` syntax and use the `yield` keyword to produce values.
// & When a generator function is called, it returns an iterator object that can be used to iterate through the generated values. The `yield` keyword is used to produce a value and pause the execution of the generator function until the next value is requested.

// ~ Example of a generator function in JavaScript:
// ~ The `generatorIterator` function is a generator that yields the values 1, 2, and 3. When we call the generator function, it returns an iterator object. We can use the `next()` method to retrieve the next value from the generator. Each call to `next()` will return an object with a `value` property containing the yielded value and a `done` property indicating whether the generator has completed.

function* generatorIterator() {
  yield 1;
  yield 2;
  yield 3;
}

let iterator = generatorIterator();
console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next());
