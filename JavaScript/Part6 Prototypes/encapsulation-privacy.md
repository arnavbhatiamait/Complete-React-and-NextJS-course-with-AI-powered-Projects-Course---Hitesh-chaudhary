Encapsulation & privacy patterns in JavaScript

1. The problem

- JavaScript objects are open: any code with a reference can read or write properties. Encapsulation provides controlled access to internal state.

1. Private fields with `#`

- Supported by modern engines. Fields prefixed with `#` are inaccessible outside the class body and are per-instance.

1. Closures inside factory functions

- Use a factory that closes over private variables and returns an API object. This works in older environments but uses more memory per instance.

```js
function makeCounter(){
  let count = 0;
  return { increment(){ count++; }, value(){ return count; } };
}
```

1. Symbols

- Use `const SECRET = Symbol('secret')` and store private data using the symbol as a key. It's not strictly private, but harder to accidentally access.

1. WeakMap for instance privacy

- Create a WeakMap keyed by instances to store private state. It avoids exposing properties and does not prevent garbage collection.

```js
const priv = new WeakMap();
class C{
  constructor(v){ priv.set(this, {v}); }
  get(){ return priv.get(this).v; }
}
```

1. Choosing a technique

- Use `#` for modern class-based code.
- Use closures for truly private functional factories.
- Use WeakMap when you need per-instance private storage for many instances and want compatibility.
