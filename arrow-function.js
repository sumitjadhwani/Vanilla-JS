/*
Arrow functions were introduced in ES6 2015
which is another way to declare and use functions. Here are the benefits they bring:
- More concise
- this is picked up from surroundings
- implicit return
*/

function double1(x) { return x * 2; } // Traditional way
console.log(double1(2)) // 4


const double2 = x => x * 2; // Same function written as an arrow function with implicit return
console.log(double2(2)) // 4


//Function default parameter value
//Starting from ES2015 JavaScript update, you can set default value to your function parameters using the following syntax:

function myFunc(x = 10) {
  return x;
}
console.log(myFunc()) // 10 -- no value is provided so x default value 10 is assigned to x in myFunc

console.log(myFunc(5)) // 5 -- a value is provided so x is equal to 5 in myFunc

console.log(myFunc(undefined)) // 10 -- undefined value is provided so default value is assigned to x

console.log(myFunc(null)) // null -- a value (null) is provided, so x will be null
