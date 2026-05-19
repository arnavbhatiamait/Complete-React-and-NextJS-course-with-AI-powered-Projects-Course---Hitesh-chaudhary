// ! Promises in JavaScript
// & A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner.
// & A Promise can be in one of three states:
// & 1. Pending: The initial state, neither fulfilled nor rejected.
// & 2. Fulfilled: The operation completed successfully, and the promise has a value.
// & 3. Rejected: The operation failed, and the promise has a reason for the failure.
// ~code 
// ~ Example of a Promise in JavaScript:
// ~ The `fetchData` function simulates an asynchronous operation (like fetching data from an API) and returns a Promise. The Promise resolves successfully after 3 seconds, and we handle the resolved value using `.then()` and any potential errors using `.catch()`.
// & In this example, we log "Fetching data..." immediately, and after 3 seconds, we log "Data fetched successfully" followed by "data fetched successfully" in lowercase. If there were an error, it would be caught and logged to the console.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 3000);
    });
}

console.log("Fetching data...");

// let fetchPromise = fetchData();
// console.log("Promise object:", fetchPromise);
fetchData()
.then((data)=>{
    console.log(data);
    return data.toLowerCase();

})
// .then((data) => {
//     console.log(data);
//     return data.toLowerCase();
//   })
.catch(
    (error) => console.error(error)
);