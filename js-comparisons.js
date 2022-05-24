/*
== implies equal to
=== implies equal value and equal type
*/

let x = 10;

console.log(x == 10);     //true
console.log(x == '10');   //true

console.log(x === 10);     //true
console.log(x === '10');   //false


/*
When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.
*/


//number with number or string number
console.log("2 < 12: ",2 < 12); //true
console.log("2 < '12'",2 < '12'); //true

//number with non-numeric string which is always false
console.log("2 < 'John'",2 < 'John'); //false
console.log("2 > 'John'",2 > 'John'); //false



//String with string 
// When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

console.log("'2' < '12'",'2' < '12'); //false
console.log("'2' > '12'",'2' > '12'); //true

