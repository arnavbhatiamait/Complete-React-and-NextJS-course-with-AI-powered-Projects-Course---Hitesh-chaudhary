# DOM, BOM, and JavaScript

## 1. JavaScript (JS)

JavaScript is a high-level programming language used to create interactive and dynamic web pages. It runs inside the browser and can manipulate HTML, CSS, and browser behavior.

### Features of JavaScript

* Lightweight and interpreted language
* Object-oriented
* Event-driven
* Supports asynchronous programming
* Runs on browsers and servers (Node.js)

### Example

```javascript
let name = "Arnav";
console.log("Hello " + name);
```

### Common Uses

* Form validation
* Animations
* API requests
* Dynamic content updates
* Game development
* Backend development with Node.js

---

# 2. DOM (Document Object Model)

The DOM is a programming interface for HTML and XML documents. It represents the webpage as a tree structure where each HTML element is an object.

Using JavaScript, developers can:

* Access elements
* Modify content
* Change styles
* Add or remove elements
* Handle events

## DOM Structure Example

```html
<html>
  <body>
    <h1 id="title">Hello</h1>
  </body>
</html>
```

DOM Tree:

```text
Document
 └── html
      └── body
           └── h1
```

---

## Accessing DOM Elements

### By ID

```javascript
document.getElementById("title");
```

### By Class

```javascript
document.getElementsByClassName("box");
```

### By Tag Name

```javascript
document.getElementsByTagName("p");
```

### Query Selector

```javascript
document.querySelector(".box");
```

---

## Modifying DOM Content

```javascript
document.getElementById("title").innerHTML = "Welcome";
```

---

## Changing CSS with DOM

```javascript
document.getElementById("title").style.color = "blue";
```

---

## Creating Elements

```javascript
let para = document.createElement("p");
para.textContent = "New Paragraph";
document.body.appendChild(para);
```

---

## Event Handling

```javascript
button.addEventListener("click", function() {
    alert("Button clicked");
});
```

---

# 3. BOM (Browser Object Model)

The BOM allows JavaScript to interact with the browser itself, not just the webpage.

It provides objects like:

* `window`
* `navigator`
* `location`
* `history`
* `screen`

---

## Window Object

The `window` object is the top-level object in the browser.

### Example

```javascript
window.alert("Hello");
```

---

## Navigator Object

Provides browser information.

```javascript
console.log(navigator.userAgent);
```

---

## Location Object

Used to get or change the current URL.

```javascript
console.log(location.href);
```

Redirect to another page:

```javascript
location.href = "https://google.com";
```

---

## History Object

Used to navigate browser history.

```javascript
history.back();
history.forward();
```

---

## Screen Object

Provides information about the user's screen.

```javascript
console.log(screen.width);
console.log(screen.height);
```

---

# Difference Between DOM and BOM

| Feature     | DOM                           | BOM                   |
| ----------- | ----------------------------- | --------------------- |
| Full Form   | Document Object Model         | Browser Object Model  |
| Purpose     | Interact with webpage content | Interact with browser |
| Main Object | `document`                    | `window`              |
| Standard    | W3C Standard                  | Browser-specific      |
| Example     | Change HTML content           | Redirect browser      |

---

# Relationship Between JS, DOM, and BOM

```text
JavaScript
   ├── DOM → Controls webpage
   └── BOM → Controls browser
```

---

# Simple Combined Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM and BOM</title>
</head>
<body>

<h1 id="heading">Hello World</h1>
<button onclick="changeText()">Click Me</button>

<script>
function changeText() {
    // DOM
    document.getElementById("heading").innerHTML = "Text Changed";

    // BOM
    alert("Button was clicked");
}
</script>

</body>
</html>
```

---

# Summary

## JavaScript

* Programming language for web development

## DOM

* Represents webpage structure
* Manipulates HTML/CSS

## BOM

* Interacts with browser features
* Controls navigation, screen, alerts, etc.
