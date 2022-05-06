// var is function scoped
// let & const are block scoped
// Block has its own separate memory
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
