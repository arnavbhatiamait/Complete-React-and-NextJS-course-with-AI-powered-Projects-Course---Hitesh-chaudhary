// ! closures
// ^ closure is a function that has access to the parent scope, even after the parent function has closed.
function outer(){
    let counter=0
    return function(){
        counter++;
        // console.log(counter);
        return counter;
    }
}
let increment=outer();
console.log(increment());
console.log(increment());
console.log(increment());