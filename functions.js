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

