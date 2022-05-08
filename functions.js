/*
All about different types of functions.
1. Function Statement.
2. Function Declaration.
3. Function expression.
4. Anonymous function.
5. Named function expression.
6. First Class functions 
*/

//Function Statement aka Function declaration
function xyz() {
  console.log("Function statement or function declaration");
}
xyz();

// Function expression 
//Also anonymous function is just normal function without name. And it has to used in form of function expression.
var a = function() {
  console.log("Function Expression.")
}
a();

// Named function expression(Function exp with name)
var a = function abc() {
  console.log("Named function Expression.")
}
a();

//First Class functions 
/*
A programming lang is said to have first class
functions when functions are treated same as variables.
That means function can be returned from another function as well as can be passed as arguments to the functions.

Refer to above example for first class functions.
*/
//When function is passed as argument
function sayHello() {
   return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!