function x() {
	var a = 100;
  
  return function y(){
  console.log(a);
  }
  
}

var z = x();  
console.log(z); // Prints function 
z(); // prints 100 

// So this means JS remebers closures of returned function.
// i.e it returns the reference of that original function.