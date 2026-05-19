// ! async await in javascript
// ^ async await is a syntactic sugar for handling asynchronous operations in JavaScript. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.
// & The async keyword is used to declare an asynchronous function, which returns a Promise. The await keyword is used to wait for a Promise to resolve or reject before proceeding with the execution of the code.


function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({name:"chaicode",url:"www.chaicode.com"});
        }, 1000);
    });
}


async function getUserData() {
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        console.log("User data fetched:", userData);
        return userData;
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

let data=  getUserData();
console.log(data)

let data2= await getUserData();
console.log(data2)
