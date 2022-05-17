const car = {
  brand: "Tesla",
  model: "Model S",
  weight: 2000,
  summary: function() {
    return this.brand +' ' + this.model;
  }
}

console.log(car.brand);
console.log(car.summary());




x = new String('John');    
y = new String('John');

// Comparing two JS objects will always return FALSE
// Beacause, In JavaScript, objects are a reference type. Two distinct objects are never equal, even if they have the same properties. Only comparing the same object reference with itself yields true.

console.log(x == y);
console.log(x === y);