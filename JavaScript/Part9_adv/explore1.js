function sayHello() {
    console.log("I would like to say Hello");
}
sayHello();

// ! give me a function that will print "I would like to say Hello" after 4 seconds
// ^ this works in asychronous way, it will not block the main thread
setTimeout(() => {
    sayHello();
}, 4000);

console.log("chaiCode")

for (let i=0; i<10; i++) {
    console.log(i);
}