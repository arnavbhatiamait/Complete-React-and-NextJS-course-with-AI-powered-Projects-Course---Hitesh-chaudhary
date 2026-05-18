Best practices & resources

- Prefer composition over deep prototype chains when behavior can be reused by referencing helper modules.
- Use `class` syntax for clearer intent, but remember it is prototype-based underneath.
- Attach methods to prototypes (or class methods) instead of creating functions per instance to save memory.
- Avoid mutating built-in prototypes in libraries or shared code; do so only in controlled learning/demo code.
- Favor `#private` fields for encapsulation in modern code. Use WeakMap or closures if you need legacy compatibility.
- Avoid `Object.setPrototypeOf` at runtime; build prototype links once at creation time.

Resources:

- MDN: Prototypes and Inheritance — <https://developer.mozilla.org/>
- "You Don’t Know JS (This & Object Prototypes)" — book for deep understanding.
