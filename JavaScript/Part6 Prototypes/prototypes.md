Prototypes — deep dive

1. What is a prototype?

- Every JavaScript object has an internal link to another object called its prototype. This is the mechanism that enables property inheritance.
- When you access `obj.prop`, JS looks for `prop` on `obj`. If not found, it follows the prototype link (`obj.__proto__` / `Object.getPrototypeOf(obj)`) and repeats until it finds the property or reaches `null`.

1. Prototype chain and lookup order

- Own properties are checked first (properties defined directly on the object).
- Then the object's prototype is checked, then the prototype's prototype, and so on.
- This lookup order explains why you can call methods defined on `SomeConstructor.prototype` from instances.

1. Common APIs

- `Object.getPrototypeOf(obj)` — returns the prototype object.
- `Object.setPrototypeOf(obj, proto)` — sets the prototype (slow; avoid in hot paths).
- `obj.__proto__` — legacy getter/setter, works in browsers/Node but not recommended for new code.
- `Object.create(proto)` — creates a new object whose prototype is `proto`.
- `Object.prototype.hasOwnProperty.call(obj, 'key')` — test whether `key` is an own property.

1. Prototype vs constructor `prototype` property

- Functions used as constructors have a `prototype` property. Instances created with `new Fn()` will have their internal prototype link set to `Fn.prototype`.
- Adding methods to `Fn.prototype` means all existing and future instances share that method reference (memory efficient).

1. Example

```js
const parent = {a: 1};
const child = Object.create(parent);
child.b = 2;
console.log(child.a); // 1 (found on prototype)
```

1. Performance and patterns

- Reading up the prototype chain is fast; however, writing `Object.setPrototypeOf` or repeatedly changing prototypes is slow.
- Prefer defining prototype structure once (constructor or `class`) rather than mutating it at runtime.

1. When to use prototypes

- Use prototypes for shared behavior between many objects (methods, utilities).
- Use composition (objects referencing smaller modules) when you want to avoid deep prototype chains.
