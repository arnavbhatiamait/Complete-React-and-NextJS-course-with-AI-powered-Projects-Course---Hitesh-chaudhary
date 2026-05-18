let computer ={
    cpu:12
}
let lenovo={screen:"HD",
    // ! here we are setting the prototype of lenovo to computer, which means that lenovo will inherit properties from computer. So, lenovo will have access to the cpu property of computer, which is 12.
    __proto__:computer
}
let tomHardware={}
console.log('computer',computer.__proto__);
console.log('lenovo',lenovo.__proto__);
console.log("lenovo.cpu", lenovo.cpu);
console.log('tomHardware',tomHardware.__proto__);


let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};
// ! Object.setPrototypeOf(tesla, genericCar); means that we are setting the prototype of tesla to genericCar, which means that tesla will inherit properties from genericCar. So, tesla will have access to the tyres property of genericCar, which is 4.
Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla `, Object.getPrototypeOf(tesla));
console.log(`tesla.tyres `, tesla.tyres);