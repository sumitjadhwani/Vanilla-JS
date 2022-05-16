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
