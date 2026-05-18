/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/
let teaFlavours=["green tea", "black tea", "oolong tea"];
const firstTea=teaFlavours[0];
console.log(firstTea);
/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities=["London", "Tokyo", "Paris", "New York"];
const favoriteCity=cities[2];
console.log(favoriteCity);


/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/
const teaTypes=["herbal tea", "white tea", "masala chai"];
teaTypes[1]="jasmine tea";
console.log(teaTypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited=["Mumbai", "Sydney"];
// citiesVisited[2]='Berlin';
citiesVisited.push("Berlin");
console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
const teaOrders=["chai", "iced tea", "matcha", "earl grey"];
const lastOrder=teaOrders.pop();
console.log(lastOrder);
console.log(teaOrders);


/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
const popularTeas=["green tea", "oolong tea", "chai"];
let softCopyTeas=popularTeas;
softCopyTeas.pop();
// ! this will change the original array as well because both variables are pointing to the same array in memory
console.log("Soft Copy Teas:", softCopyTeas);
console.log("Popular Teas:", popularTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities=["Berlin", "Singapore", "New York"];
// let hardCopyCities=topCities.slice();
let hardCopyCities=[...topCities];
topCities.pop();
console.log("Hard Copy Cities:", hardCopyCities);
console.log("Top Cities:", topCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
const europeanCities=["Paris", "Rome"];
const asianCities=["Tokyo", "Bangkok"];
const worldCities=europeanCities.concat(asianCities);
// const worldCities=[...europeanCities, ...asianCities];
console.log(worldCities); 

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
const teaMenu=["masala chai", "oolong tea", "green tea", "earl grey"];
const menuLength=teaMenu.length;
console.log(menuLength);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
const cityBucketList=["Kyoto", "London", "Cape Town", "Vancouver"];
const isLondonInList=cityBucketList.includes("London");
console.log(isLondonInList);