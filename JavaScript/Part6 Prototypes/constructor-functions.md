Constructor functions and `new`

1. Constructor functions

- A constructor is a regular function intended to be called with `new`. By convention it is capitalized: `function Person(name){ ... }`.
- When called with `new`, JS performs several steps:
  1. Creates a fresh object.
  2. Sets the object's internal prototype to `Fn.prototype`.
  3. Calls `Fn` with `this` bound to the new object.
  4. If the function returns an object, that object is returned; otherwise the new object is returned.

1. The `.prototype` property

- `Fn.prototype` is an object used as the prototype for instances created by `new Fn()`.
- Attach shared methods to `Fn.prototype` to avoid duplicating functions per instance.

1. `new.target` and defensive checks

- Inside a constructor you can check `if (!new.target) throw new Error('must use new')` to guard against accidental calls without `new`.

1. Example patterns

```js
function Drink(name){
  if (!new.target) throw new Error('Drink must be called with new');
  this.name = name;
}
Drink.prototype.describe = function(){ return `Drink: ${this.name}`; };

const d = new Drink('tea');
console.log(d.describe());
```

1. Common pitfalls

- Forgetting `new` will bind `this` to global (or undefined in strict mode) and can corrupt state. Use `new.target` or write factories to avoid the problem.
- Attaching instance methods inside the constructor (e.g., `this.fn = function(){}`) duplicates the function for every instance — prefer prototype methods.

1. Migrating to `class`

- `class` syntax wraps the constructor/prototype pattern in clearer syntax, but under the hood it uses prototypes.
