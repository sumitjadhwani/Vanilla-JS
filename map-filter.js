const arr = [1,2,3,4,5];


//Map just iterates through elements and executes the function inside it
//Mainly used for 1-1 mapping 
arr.map((x) => { console.log(x*2);});



function isOdd(x) {
  return x%2;
}

//filter is used to filter the varibles based on condition or expression
//Only returns element when condition is true 
//Used for filtering the values
const result = arr.filter(isOdd);
console.log(result);


// Reduce returns only one computed value 
//Used when the output is single variables formed by some operations on arr
// Eg. find max, sum and so on.
//Find SUM
 const output = arr.reduce(function(a,b){
  a= a+b;
  return a;
},0);

console.log(output);

//Find MAX
const max = arr.reduce(function(max,first){
  if(first > max)max = first;
  return max;
},arr[0]);

console.log(max);


//Find MIN
const min = arr.reduce(function(min,first){
  if(first < min)min = first;
  return min;
},arr[0]);

console.log(min);