// Higher order functions
/*
Functions which take another functions as argument or return functions are known as higher order functions.

They are very important for functional programming. 
i.e to make code more modularize.
*/

var radius = [1,2,3];

function area(radius) {
  return Math.PI * radius * radius;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

function diameter(radius) {
  return 2 * radius;
}

function calculate(radius, cricleLogic) {
  var output = [];

  for(let i=0; i < radius.length; i++) {
    output.push(cricleLogic(radius[i]));
  }
  return output;
}

console.log("Area of circles: ",calculate(radius, area));

console.log("Circumference of circles: ",calculate(radius, circumference));

console.log("Diameter of circles: ",calculate(radius, diameter));