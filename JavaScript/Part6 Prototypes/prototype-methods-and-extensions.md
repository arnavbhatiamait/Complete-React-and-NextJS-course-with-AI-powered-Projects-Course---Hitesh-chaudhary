Prototype methods & extending built-ins

1. Adding methods to prototypes

- Attach shared behavior by adding functions to a constructor's prototype:
  `Constructor.prototype.method = function(){ ... }`.
- This is memory-efficient because the function reference is shared across instances.

1. Example from workspace

- In `oops-masster.js` you added `Array.prototype.arnav = function(){ return`This is an array ${this}`; }`.
- This example shows how an extension makes the method available on all arrays, e.g. `[1,2,3].arnav()`.

1. Caveats of modifying built-ins

- Extending built-ins like `Array.prototype` or `Object.prototype` affects every array/object in the runtime, and can conflict with libraries or future ECMAScript methods.
- Avoid altering standard prototypes in shared libraries or large apps. Use composition or helper utilities instead.

1. Safer alternatives

- Create small helper modules, e.g. `const arnav = arr => ...`.
- Use subclassing (`class MyArray extends Array { ... }`) when you truly need custom array behavior for a contained path.

1. Reflect and property descriptors

- Use `Object.defineProperty` to make a non-enumerable method so it doesn't show up in `for..in` loops.

```js
Object.defineProperty(Array.prototype, 'arnav', { value: function(){...}, writable:true, configurable:true });
```
