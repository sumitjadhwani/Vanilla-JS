/*
Variable	Scope	Reassignable Mutable	Temporal Dead Zone
const	  Block	    No	        Yes	          Yes
let	    Block	    Yes	        Yes	          Yes
var	    Function	Yes	        Yes	          No
*/

var x = 10;
var x = 9;       //Re-Declaration allowed
console.log(x); //prints 9

let y = 1;
// let y = 2;    Throws syntax error y is already declared.
y = 2;
console.log(y);   //Prints 2

const z = 3;
// const z = 4;   Throws syntax error
// z = 5;           //Throws Type error Assignment to const 
console.log(z);   //Prints 3


//Function Scoped var
function myFunction() {
  var myVar = "Nick";
  if (true) {
    var myVar = "John";
    console.log(myVar); // "John"
    // actually, myVar being function scoped, we just erased the previous myVar value "Nick" for "John"
  }
  console.log(myVar); // "John" - see how the instructions in the if block affected this value
}
myFunction();
// console.log(myVar); // Throws a ReferenceError, myVar is not accessible outside the function.


//Block scoped let
function letFunction() {
  let myVar = "Nick";
  if (true) {
    let myVar = "tyrant";
    console.log(myVar); // "tyrant"
    // actually, myVar being block scoped, we just created a new variable myVar.
    // this variable is not accessible outside this block and totally independent
    // from the first myVar created !
  }
  console.log(myVar); // "Nick", see how the instructions in the if block DID NOT affect this value
}
letFunction();
// console.log(myVar); // Throws a ReferenceError, myVar is not accessible outside the function.

//All variables are mutable
//const variables are not immutable ! Concretely, it means that object and array const declared variables can be mutated.

//For objects:
const person = {
  name: 'Nick'
};
person.name = 'John' // this will work ! person variable is not completely reassigned, but mutated
console.log(person.name) // "John"
// person = "Sandra" // raises an error, because reassignment is not allowed with const declared variables

