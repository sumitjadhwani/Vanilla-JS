/* 
1. var is function scoped
2. let & const are block scoped
3. Block has its own separate memory
-----------------------------------------------------------------
Shadowing: The concept of having same variable in other scope is known as shadowing.
Here variable inside one scope shadows the variable of outer scope. 
-----------------------------------------------------------------
Illegal Shadowing: When one variable scope does interfere with other variable then it throws error and is known as Illegal Shadowing.
eg. 
let a = 5;
{
var a = 1; // This will throw error as var scope here is global.
}
*/

console.log('------global scope-------');
var g =1;
{
  var g = 10;
  console.log(g);
}
console.log(g);
console.log('-------------------------');

console.log('------function scope-----');
var a =1;
function gg() {
  var a = 10;
  console.log(a);
}
gg();
console.log(a);
console.log('-------------------------');

console.log('--------block scope------');
let b = 3;
{
  let b = 30;
  console.log(b);
}
 console.log(b);
console.log('-------------------------');
